
const LIST_ELEMENT = 'a';

Cypress.Commands.add('openPage', (page) => {
    cy.get(LIST_ELEMENT).contains(page).click();
});

