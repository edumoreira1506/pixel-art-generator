import faker from 'faker';

describe('user context', () => {
  it('can register', () => {
    cy.visitSite();
    cy.contains('Register').click();

    const username = faker.name.findName();
    const password = faker.internet.password();

    cy.register(username, password);
  });

  it('can login', () => {
    cy.visitSite();
    cy.contains('Register').click();

    const username = faker.name.findName();
    const password = faker.internet.password();

    cy.register(username, password);
    cy.wait(500);
    cy.login(username, password);
  });
});
