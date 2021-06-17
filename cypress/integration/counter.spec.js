/// <reference types="cypress" />

describe("counter component", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should add one to the counter when the btn is clicked", () => {
        cy.contains("button", "+").click();
        cy.get("[data-cy='counter']").contains("1");
    });

    it("should remove one from counter when minus btn is clicked", () => {
        cy.contains("button", "-").click();
        cy.get("[data-cy='counter']").contains("-1");
    })
});