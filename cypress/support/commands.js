Cypress.Commands.add('visitSite', () => {
  cy.visit('http://localhost:3000');
});

Cypress.Commands.add('fillInput', (dataSelector, value) => {
  cy.get(`[data-input="${dataSelector}"]`).clear();
  cy.get(`[data-input="${dataSelector}"]`).type(value);
});

Cypress.Commands.add('login', (username, password) => {
  cy.fillInput('username', username);
  cy.fillInput('password', password);
  cy.contains('Login').click();
});

Cypress.Commands.add('register', (username, password) => {
  cy.fillInput('username', username);
  cy.fillInput('password', password);
  cy.fillInput('confirmPassword', password);
  cy.contains('Save').click();
});
