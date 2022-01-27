/// <reference types="cypress" />

beforeEach(() => {
  cy.log("/src/");
});

it("test", function () {
  cy.visit("http://localhost:3000/wc");
  cy.get("#mybox").type("what is this");
  cy.get('#headingTwo > .accordion-button').click();
  cy.get('#flexSwitchCheckDefault').click();
});
