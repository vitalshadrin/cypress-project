///<reference types="cypress" />
import abPage from '../../pages/ab.page'

describe('Verify A/B Testing page', () => {

  beforeEach(() => {
    cy.fixture('pages/home/home.body.page').as('homebody');
  })

  before(() => {
    cy.visit('/');
  })

  it('Navigate to AB Page', () => {
    cy.get('@homebody').then((pageData) => {
      cy.openPage(pageData.AB);
    })
  })

  it('Verify title', () => {
    abPage.verify_page_title();
  });

  it('Verify body', () => {
    abPage.verify_page_body();
  });
})
