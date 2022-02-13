import React from "react"

import { LANGUAGE } from "actions/constants"

const hashtag = "reichstein"

export default {
    [LANGUAGE.EN]: {
        Title: () => <span>Christian and Liz are getting married!</span>,
        Date: () => (
            <div className="d-flex flex-column">
                <div>June 12th, 2022</div>
            </div>
        ),
        Location: () => <span>Caf&eacute; Brauer, Chicago, IL, USA</span>,
        locationLink: "https://goo.gl/maps/Ad5FzWZs14nSD9QT6",
        hashtag,
    },
    [LANGUAGE.PT]: {
        Title: () => <span>Christian e Liz est&atilde;o se casando!</span>,
        Date: () => (
            <div className="d-flex flex-column">
                <div>12th Junho, 2022</div>
            </div>
        ),
        Location: () => <span>Caf&eacute; Brauer, Chicago, IL, USA</span>,
        locationLink: "https://goo.gl/maps/Ad5FzWZs14nSD9QT6",
        hashtag,
    },
}
