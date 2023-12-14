
/// <reference types="cypress" />


describe('', () => {
    it('', () => {
        cy.visit('https://automationteststore.com/')

        cy.get('.subnav')
            .find('li')
            .find('a')
            .filter('.active')
            .click()


    });
});