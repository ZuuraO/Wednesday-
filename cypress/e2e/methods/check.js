/// <reference types="cypress" />
describe('', () => {
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

        cy.contains('Admin').click()

        cy.get("[class='oxd-icon bi-plus oxd-button-icon']").click()

        cy.get('.oxd-select-text-input')

            .eq(0)
            .click()
            .get('.oxd-select-option')
            .contains('Admin')
            .click()

        cy.get('.oxd-select-text-input')
            .eq(1)
            .click()
            .get('.oxd-select-option')
            .contains('Enabled')
            .click()

        cy.get('[placeholder="Type for hints..."]')
        .type('Lisa Andrews')
        .get('[role="option"]')
        .contains('Lisa Andrews')
        .click()

        cy.get('[autocomplete="off"]')
        .eq(0)
        .click()
        .type('testdata1')
        .click()


        cy.get('[autocomplete="off"]')
        .eq(1)
        .click()
        .type('OrangeHRM!1')
        .click()

        cy.get('[autocomplete="off"]')
        .eq(2)
        .click()
        .type('OrangeHRM!1')
        .click()

        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
        .click()
    
    });
        
        
       
});






// cy.get('.oxd-table-cell.oxd-padding-cell div div label input ').eq(0).check({ force: true })

// cy.get('.oxd-table-cell.oxd-padding-cell div div label input ').eq(0).uncheck({ force: true })
