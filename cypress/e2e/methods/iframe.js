
/// <reference types="cypress" />


describe('', () => {
    it('', () => {

        // cy.visit('https://the-internet.herokuapp.com/iframe')

        // cy.get('#mce_0_ifr').then((iframe) => {

        //     const iframeDocument = iframe.contents().find('body')

        //     cy.wrap(iframeDocument).clear().type('test')

        // })

        cy.visit('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element')

        cy.get('[name="iframeResult"]').then((iframe) => {

            const iframeDocument = iframe.contents().find('body')

            cy.wrap(iframeDocument)
                .find('div')
                .find('button')
                .contains('3')
                .click()

        })



    });
});