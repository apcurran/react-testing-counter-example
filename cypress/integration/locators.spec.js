/// <reference types="cypress" />

describe("locators", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("locating elements with the 'get' command", () => {
        // Get elems by CSS selector
        cy.get("h1");
    });

    it("locating elements by contains", () => {
        cy.contains("My Counter");
        cy.contains("0");
    });

    it("locating elements with find", () => {
        // Get plus and minus btns
        cy.get(".counter-section").find("button");
    });
});