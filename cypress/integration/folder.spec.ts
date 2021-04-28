import faker from 'faker';

describe('folder context', () => {
  it('can register', () => {
    cy.visitSite();
    cy.contains('Register').click();

    const username = faker.name.findName();
    const password = faker.internet.password();
    const folderName = 'Name!';

    cy.register(username, password);
    cy.wait(500);
    cy.login(username, password);
    cy.window().then((win) => {
      win.prompt = () => folderName;
    });
    cy.contains('New folder').click();
    cy.wait(500);
    cy.contains(folderName);
  });

  it('can delete', () => {
    cy.visitSite();
    cy.contains('Register').click();

    const username = faker.name.findName();
    const password = faker.internet.password();
    const folderName = 'Name!';

    cy.register(username, password);
    cy.wait(500);
    cy.login(username, password);
    cy.window().then((win) => {
      win.prompt = () => folderName;
      win.confirm = () => true;
    });
    cy.contains('New folder').click();
    cy.wait(500);
    cy.contains(folderName);
    cy.get('[data-testid="delete-folder"]').click();
    cy.wait(500);
    cy.contains(folderName).should('not.exist');
  });
});
