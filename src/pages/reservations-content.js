import {createHtmlElement, appendChildren } from "../utils/dom-utils";
import './reservation-content.css';

function createReservationDiv(){
    const reservationDiv = createHtmlElement({
        tag: "div",
        classes: ["reservation"],
    });

    const reservationFormDiv = createHtmlElement({
        tag: "div",
        classes: ["reservation-form-div"],
    });

    const reservationForm = createHtmlElement({
        tag: "form",
    });

    const reservationHeader = createHtmlElement({
        tag: "h1",
        classes: ["reservation-header"],
        properties: { textContent: "Request Reservation" },
    });

    const nameLabel = createHtmlElement({
        tag: "label",
        properties: { textContent: "Name:" },
        attributes: { for: "name-field"},
    });

    const nameField = createHtmlElement({
        tag: "input",
        attributes: { 
            id: "name-field",
            name: "name-field",
            type: "text",
        },
    });

    const phoneLabel = createHtmlElement({
        tag: "label",
        properties: { textContent: "Phone:" },
        attributes: { for: "phone-field" },
    });

    const phoneField = createHtmlElement({
        tag: "input",
        attributes: { 
            id: "phone-field",
            name: "phone-field",
            type: "tel",
        },
    });

    const partyNumberLabel = createHtmlElement({
        tag: "label",
        properties: { textContent: "Number in party:" },
        attributes: { for: "num-in-party-field"},
    });

    const partyNumberField = createHtmlElement({
        tag: "input",
        attributes: { 
            id: "num-in-party-field",
            name: "num-in-party-field",
            type: "number",
        },
    });

    const dateLabel = createHtmlElement({
        tag: "label",
        properties: { textContent: "Date:" },
        attributes: { for: "date-field"},
    });

    const dateField = createHtmlElement({
        tag: "input",
        attributes: { 
            id: "date-field",
            name: "date-field",
            type: "date",
        },
    });

    const timeLabel = createHtmlElement({
        tag: "label",
        properties: { textContent: "Time:" },
        attributes: { for: "time-field"},
    });

    const timeField = createHtmlElement({
        tag: "input",
        attributes: { 
            id: "time-field",
            name: "time-field",
            type: "time",
        },
    });

    const submitButton = createHtmlElement({
        tag: "button",
        properties: { textContent: "Submit" },
        attributes: { type: "submit" }
    })

    appendChildren(reservationForm,
        [
            nameLabel,
            nameField,
            phoneLabel,
            phoneField,
            partyNumberLabel,
            partyNumberField,
            dateLabel,
            dateField,
            timeLabel,
            timeField,
            submitButton
        ]
    );

    appendChildren(reservationFormDiv, [ reservationHeader,reservationForm ]);

    appendChildren(reservationDiv,
        [
            reservationFormDiv,
        ]
    );

    return reservationDiv;
}

export {createReservationDiv};
