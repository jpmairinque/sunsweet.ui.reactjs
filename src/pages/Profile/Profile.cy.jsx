/* eslint-disable no-undef */
import React from "react";
import Profile from "./Profile";

describe("<Profile />", () => {
  beforeEach(() => {
    cy.mount(<Profile />);
  })
  
  it("renders", () => {
    cy.mount(<Profile />);
  });

  it("should toggle edit button", () => {
   
    cy.contains("Edit Profile").should("exist");

    cy.get('button:contains("Edit Profile")').click();

    cy.contains("Save").should("exist");
  });

  it("should change name display", () => {
   
    cy.contains("Edit Profile").click();

    cy.get('input[name="name"]').clear().type("New Name");

    cy.contains("Save").click();

    cy.get("[data-cy='nameDisplay']").should("contain", "New Name");
  });
});
