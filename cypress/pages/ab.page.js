class ABPage {

    getPageData() {
        cy.fixture('pages/ab/ab.page').as('abpage');
        return cy.get('@abpage');
    }

    getTitleLocator() {
        return cy.get('h3');
    }

    getBodyLocator() {
        return cy.get('p');
    }

    verify_page_title() {
        this.getPageData().then((pageData) => {
            this.getTitleLocator().should(($h3) => {
                const text = $h3.text();
                expect(text).to.be.oneOf(pageData.title);
            })
        })
    }

    verify_page_body() {
        this.getPageData().then((pageData) => {
            this.getBodyLocator().should('contain.text', pageData.body);
        })
    }
}

export default new ABPage();