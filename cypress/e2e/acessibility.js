import Profile from "../../src/pages/Profile/Profile";
import React from "react";

describe("accessibility spec", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3003/home/acessibility");
  });

  it("should toggle theme", () => {
    cy.get("[data-cy='biggerFont']").click();

    cy.get("html").should("have.css", "font-size", "18px");
  });
});
