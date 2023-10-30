import Profile from "../../src/pages/Profile/Profile";
import React from "react";

describe("template spec", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3003/home/profile')
  })
  
  it("should toggle edit mode and save data on submit", () => {
   

    cy.contains("Edit Profile").click();

    cy.get('input[name="name"]').clear().type("New Name");
    cy.get('input[name="username"]').clear().type("newUsername");
    cy.get('input[name="email"]').clear().type("newemail@example.com");
    cy.get('input[name="birth"]').clear().type("01/01/1990");

    cy.contains("Save").click();

    cy.contains("New Name");
    cy.contains("newUsername");
    cy.contains("newemail@example.com");
    cy.contains("01/01/1990");
  });
});
