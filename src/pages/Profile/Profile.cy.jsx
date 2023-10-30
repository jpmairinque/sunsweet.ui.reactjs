/* eslint-disable no-undef */
import React from "react";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("renders", () => {
    cy.mount(<Profile />);
  });

  it("should toggle edit button", () => {
    cy.mount(<Profile />);

    cy.contains("Edit Profile").should("exist");

    cy.get('button:contains("Edit Profile")').click();

    cy.contains("Save").should("exist");
  });
});
