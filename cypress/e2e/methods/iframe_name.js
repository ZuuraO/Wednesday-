/// <reference types="cypress" />


describe('', () => {
    it('', () => {

       cy.visit('https://nxtgenaiacademy.com/iframe/')

        cy.get('[name="formpage"]').then((iframe) => {

            const iframeDocument = iframe.contents().find('[name="vfb-5"]')
            const iframeDocument1 = iframe.contents().find('[name="vfb-7"]')

            cy.wrap(iframeDocument).type("Zuura")
            cy.wrap(iframeDocument1).type("Osmonova")
                

        })



    });
});