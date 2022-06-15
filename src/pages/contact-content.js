import { createHtmlElement, appendChildren } from "../utils/dom-utils";

function createContactDiv(){
    const contactDiv = document.createElement("div");

    appendChildren(contactDiv, [
        createHtmlElement({
            tag: "h1",
            properties: {
                textContent: "Contact Us",
            },
        }),
        createHtmlElement({
            tag: "h2",
            properties: {
                textContent: "Address",
            },
        }),
        createHtmlElement({
            tag: "p",
            properties: {
                textContent: "1800 Amity Rd.",
            },
        }),
        createHtmlElement({
            tag: "p",
            properties: {
                textContent: "Bethany, CT 06524",
            },
        }),
        createHtmlElement({
            tag: "h2",
            properties: {
                textContent: "Phone",
            },
        }),
        createHtmlElement({
            tag: "p",
            properties: {
                textContent: "(203) 867-5309",
            },
        }),

    ]);

    return contactDiv;
}

export { createContactDiv };