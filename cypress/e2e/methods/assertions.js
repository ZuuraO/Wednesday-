describe('as a user I should be able to login to the hr app', () => {

    it('should practice each method', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

        // cy.get('[href="/web/index.php/pim/viewPimModule"]').click()


        // Explicit method

        // cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').then((x) => {


        //     expect('PIM').to.equal(x.text())
        // })

444        // implicit method 
        // cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
        // .invoke('text')
        // .should('equal', 'PIM')


        // cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
        //     .invoke('text')
        //     .as('HeaderPIM')

        // cy.contains('Employee List')
        //     .invoke('text')
        //     .as('Elist')

        // cy.get('@HeaderPIM').should('equal', 'PIM')
        // cy.get('@Elist').should('equal', 'Employee List')

        // cy.get('@Elist').click()

        cy.contains('Leave').click()

        cy.get('[class="oxd-main-menu"] li').eq(1).click()

         cy.contains('PIM').click()

        cy.get("[data-v-5327b38a = ''] ul li").eq(3).click()

    });
});


























