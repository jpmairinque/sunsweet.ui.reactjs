// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import { MemoryRouter } from "react-router-dom";
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from "cypress/react";
import { UserProvider } from "../../src/contexts/UserContext";
import { PrivacyProvider } from "../../src/contexts/PrivacyContext";
import { ThemesProvider } from "../../src/contexts/ThemeContext";

Cypress.Commands.add("mount", mount);

// Example use:
// cy.mount(<MyComponent />)

Cypress.Commands.add("mount", (component, options = {}) => {
  const { routerProps = { initialEntries: ["/"] }, ...mountOptions } = options;

  const wrapped = (
    <MemoryRouter {...routerProps}>
      <ThemesProvider>
        <PrivacyProvider>
          <UserProvider>{component}</UserProvider>
        </PrivacyProvider>
      </ThemesProvider>
    </MemoryRouter>
  );

  return mount(wrapped, mountOptions);
});
