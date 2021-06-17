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
    });

    it("should turn counter text green when the count is equal to or greater than 100", () => {
        const addBtn = cy.contains("button", "+");

        for (let i = 0; i < 100; i++) {
            addBtn.click();
        }

        cy.get("[data-cy='counter']").should("have.class", "clr--green");
    });

    it("should turn counter text red when the count is less than or equal to -100", () => {
        const subtractBtn = cy.contains("button", "-");

        for (let i = 0; i < 100; i++) {
            subtractBtn.click();
        }

        cy.get("[data-cy='counter']").should("have.class", "clr--red");
    });
});