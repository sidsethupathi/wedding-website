import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    return auth.currentUser
};

const registerWithEmailAndPassword = async ({ name, email, password }) => {
  try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const user = res.user
      console.log('Registering with name:',name)
      console.log('For the email:', email)
      await addDoc(collection(db, "users"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
      })
  } catch (err) {
      console.error(err)
      alert(err.message)
  }
};

const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};


const fetchUserName = async (user) => {
  // let userData
  let name, email

  if (user){
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const userData = doc.docs[0].data();
      // setName(data.name);

      name = userData.name
      email = userData.email

    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    } 
  }

  return {name,email}
  // return userData
};

// const currentAuthenticatedUser = async () => {
//   let myUser

//   try {
//     myUser = await auth.currentUser()
//   } catch (e) {
//       // sign out will clear all existing cognito keys from localStorage
//       await logout()
//       myUser = null
//   }

//   return myUser
// }

const fetchUserRSVPallowed = async (email) => {
  let allowed, confirmed

  if (email){
    try {
      const q = query(collection(db, "rsvp"), where("email", "==", email));
      const doc = await getDocs(q);
      const rsvpData = doc.docs[0].data();

      allowed = rsvpData.allowed
      confirmed = rsvpData.confirmed

    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    } 
  }

  return {allowed,confirmed}
};

const fetchUserRSVPdata = async (email) => {
  let weddingData

  if (email){
    try {
      const q = query(collection(db, "rsvp"), where("email", "==", email));
      const doc = await getDocs(q);
      const rsvpData = doc.docs[0].data();

      weddingData = rsvpData.Wedding

    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    } 
  }
  
  return weddingData
};


const putRSVPDataToDB = async ({Email,Data}) => {
  try {
    const q = query(collection(db, "rsvp"), where("email", "==", Email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data())
      setDoc(doc.ref, Data, { merge: true })
    });
  } catch (err) {
      console.error(err)
      alert(err.message)
  }
};

export {
    auth,
    db,
    fetchUserName,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    fetchUserRSVPallowed,
    fetchUserRSVPdata,
    putRSVPDataToDB,
    // currentAuthenticatedUser,
};