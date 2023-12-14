/// <reference types="cypress" />

describe('practice dropdown', () => {
    it('should select dropdown', () => {

        //cy.visit('https://artoftesting.com/samplesiteforselenium')

        //cy.get('#testingDropdown').select('Performance')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

        cy.contains('Admin').click()

        cy.contains('[aria-label="Topbar Menu"] ul li', 'Job')
            .click()
            .contains('Job Title')
            .click()

            






    });
});