import get from "lodash/get"

import {
    // auth,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    // currentAuthenticatedUser,
    fetchUserName,
    fetchUserRSVPallowed,
    putRSVPDataToDB,
    fetchUserRSVPdata,
    fetchPartyUsers,
  } from "services";

import { APP } from "./constants"

export const initializeApp = async (dispatch,user) => {

    const {name,email} = await fetchUserName(user)

    if (name) {

        dispatch({
            type: APP.SET.INITIALIZE_USER,
            payload: {
                name,
                email,
            },
        })
    }
}

export const signUp = async (
    { name, email, password },
    setStatus,
    history,
    dispatch
) => {
    try {
        await registerWithEmailAndPassword({
            name,
            email,
            password,
        })

        await logInWithEmailAndPassword(email, password)

        dispatch({
            type: APP.SET.USER_SIGN_IN,
            payload: {
                name,
                email,
            },
        })
    } catch (error) {
        const { message } = error
        setStatus(message)
        dispatch({
            type: APP.SET.USER_ERROR,
            payload: message,
        })
    }

}

export const signIn = async (
    { email: providedEmail, password },
    setStatus,
    history,
    dispatch
) => {
    try {
        const myUser = await logInWithEmailAndPassword(providedEmail, password)        
        const {name,email} = await fetchUserName(myUser)

        dispatch({
            type: APP.SET.USER_SIGN_IN,
            payload: {
                name,
                email,
            },
        })
    } catch (error) {
        let { message } = error
        setStatus(message)
        dispatch({
            type: APP.SET.USER_ERROR,
            payload: message,
        })
    }
}

export const signOut = async dispatch => {
    try {
        await logout()
        dispatch({
            type: APP.SET.USER_SIGN_OUT,
        })
    } catch (error) {
        const { message } = error
        dispatch({
            type: APP.SET.USER_ERROR,
            payload: message,
        })
    }
}


export const fetchUserRSVPInformation = async (email, dispatch) => {
    try {
        let weddingData, partyGuests
        const {allowed,confirmed} = await fetchUserRSVPallowed(email.toLowerCase())
        if(allowed){
            partyGuests = await fetchPartyUsers(email)
            // weddingData = await fetchUserRSVPdata(email.toLowerCase())
            weddingData = await Promise.all(partyGuests.emails.map(function (guestEmails, index) {
                return fetchUserRSVPdata(guestEmails)
              }));
        }
        dispatch({
            type: APP.SET.RSVP,
            payload: {
                allowed,
                confirmed,
                weddingData,
                partyGuests,
            },
        })
    } catch (error) {
        console.error(error.message)
    }
}

export const putUserRSVPInformation = async (
    // { email, isAttending, foodChoice, dietRestrictions, guestNote},
    { email, guestData, partyNote},
    setSubmitting,
    setStatus,
    setShowConfirmation,
    dispatch
) => {
    try {
        guestData.forEach(function (guest, index) { 
            putRSVPDataToDB({
                Email: guest.email.toLowerCase(),
                Data: {
                    Wedding: {
                        IsAttending: guest.isAttending,
                        ...(guest.foodChoice ? { FoodChoice: guest.foodChoice } : {}),
                        DietRestrictions: guest.dietRestrictions,
                        Note: partyNote,
                    },
                    confirmed: guest.isAttending,
                },
            })
        });
        await fetchUserRSVPInformation(email, dispatch)

        setShowConfirmation(true)

        // dismiss alert
        setTimeout(() => setShowConfirmation(false), 3000)
    } catch (error) {
        const { message } = error
        setStatus(message)
    }
    setSubmitting(false)
}
