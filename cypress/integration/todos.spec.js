/// <reference types="cypress" />

describe("todos component", () => {
    beforeEach(() =>{
        cy.visit("/");
    });

    // With HTTP API request
    it("should be 5 todos retrieved from the API call on page load", () => {
        cy.get("article h2").should('have.length', 5);
    });

    it("first h2 todo element should start with 'delectus'", () => {
        cy.get("article h2").contains("delectus");
    });

    // Alternative mocked HTTP request
    it("should mock HTTP req and detect 5 todos on page load", () => {
        const fakeJSONData = [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
              },
              {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
              },
              {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
              },
              {
                "userId": 1,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
              },
              {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
              }
        ];

        cy.intercept("GET", "https://jsonplaceholder.typicode.com/todos", fakeJSONData);

        cy.get("article h2").contains("delectus aut autem");
        cy.get("article h2").contains("quis ut nam facilis et officia qui");
        cy.get("article h2").contains("fugiat veniam minus");
        cy.get("article h2").contains("et porro tempora");
        cy.get("article h2").contains("laboriosam mollitia et enim quasi adipisci quia provident illum");
    });
});