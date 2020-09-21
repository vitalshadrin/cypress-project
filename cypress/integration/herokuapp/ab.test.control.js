/// <reference types="cypress" />

describe('Verify A/B Testing page', () => {

  beforeEach(() => {
    cy.fixture('pages/ab/ab.page').as('abpage');
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
    cy.get('@abpage').then((pageData) => {
      cy.get('h3').should(($h3) => {
        const text = $h3.text();
        expect(text).to.be.oneOf(pageData.title);
      })
    })
  });

  it('Verify body', () => {
    cy.get('@abpage').then((pageData) => {
      cy.get('p').should('contain.text', pageData.body);
    })
  });
})
