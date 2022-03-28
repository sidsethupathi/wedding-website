import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        AlertNoEmail: () => (
            <>
                Whoops, it looks like we don't have your email address. Email us
                at{" "}
                <strong>
                    <a href="mailto:lizandchristian2022@gmail.com">
                    lizandchristian2022@gmail.com
                    </a>
                </strong>{" "}
                so we can update our records.
            </>
        ),
        submitButtonText: "Submit RSVP",
        updateButtonText: "Update RSVP",
        yesLabel: "Yes",
        noLabel: "No",
        chickenLabel: "Chicken",
        veggieLabel: "Vegetarian",
        lampollaLabel: "L'Ampolla",
        tortosaLabel: "Tortosa",
        otherLabel: "Other",
        otherLabelExtra: "Reach out if you need help arranging transportation",
        WeddingFormHeader: () => <>Wedding</>,
        NumberOfGuestsLabel: () => <>Number of guests attending</>,
        zeroLabel: "Can't Attend",
        NumberOfGuestsHelp: () => (
            <>
                The number of guests in your party (including yourself) that
                will be in attendance.
            </>
        ),
        FoodChoiceLabel: () => (
            <>Which food option would you like?</>
        ),
        FoodChoiceHelp: () => (
            <>
                Let us know which option you prefer, any dietary restrictions will be accomodated.
            </>
        ),
        OriginLabel: () => <>Where is your origin?</>,
        OriginHelp: () => (
            <>
                We're only planning on having bus transportation from L'Ampolla
                and Tortosa. Reach out if you need help arranging transportation
                from other locations.
            </>
        ),
        DietRestrictionsLabel: () => <>Dietary Restrictions</>,
        DietRestrictionsHelp: () => (
            <>Do you have any dietary restrictions? (i.e. vegetarian, vegan, Kosher, gluten free, etc.)</>
        ),
        // DinnerFormHeader: () => <>Welcome &ldquo;Pica-pica&ldquo;</>,
        // DinnerGuestsLabel: () => <>Number of guests attending</>,
        // DinnerGuestsHelp: () => (
        //     <>
        //         The number of guests (including yourself) that will be in
        //         attendance.
        //     </>
        // ),
        AlertRSVPUpdated: () => <>Thanks for your RSVP!</>,
    },
    [LANGUAGE.PT]: {
        AlertNoEmail: () => (
            <>
                Uups, sembla que no tenim el vostre email. Envieu-nos un email a{" "}
                <strong>
                    <a href="mailto:lizandchristian2022@gmail.com">
                    lizandchristian2022@gmail.com
                    </a>
                </strong>{" "}
                i actualitzarem el nostre registre.
            </>
        ),
        submitButtonText: "Envia RSUP",
        updateButtonText: "Actualitza RSUP",
        yesLabel: "Sí",
        noLabel: "No",
        chickenLabel: "Frango",
        veggieLabel: "Vegetariana",
        lampollaLabel: "L'Ampolla",
        tortosaLabel: "Tortosa",
        otherLabel: "Altres",
        otherLabelExtra: "Feu-nos saber si necessiteu ajuda trobant transport.",
        WeddingFormHeader: () => <>Casament</>,
        NumberOfGuestsLabel: () => <>Número de convidats</>,
        zeroLabel: "No podem venir",
        NumberOfGuestsHelp: () => (
            <>Número de convidats (incloen-te a tu) que vindran.</>
        ),
        FoodChoiceLabel: () => (
            <>Qual opção de comida você gostaria?</>
        ),
        FoodChoiceHelp: () => (
            <>
                Deixe-nos saber qual opção você prefere, quaisquer restrições alimentares serão acomodadas.
            </>
        ),
        OriginLabel: () => <>Des d'on?</>,
        OriginHelp: () => (
            <>
                Només hi haurà autobús des de L'Ampolla i Tortosa. Feu-nos saber
                si necessiteu ajuda trobant transport.
            </>
        ),
        DietRestrictionsLabel: () => <>Restrições alimentares?</>,
        DietRestrictionsHelp: () => (
            <>
                Você tem alguma restrição alimentar? (ou seja, vegetariano, vegano, Kosher, sem glúten, etc.)
            </>
        ),
        // DinnerFormHeader: () => <>Pica-pica de Benvinguda</>,
        // DinnerGuestsLabel: () => <>Número de convidats</>,
        // DinnerGuestsHelp: () => (
        //     <>Número de convidats (incloen-te a tu) que vindran.</>
        // ),
        AlertRSVPUpdated: () => <>Gràcies pel vostre RSUP!</>,
    },
}
