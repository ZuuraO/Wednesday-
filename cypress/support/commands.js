// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', (username, password) => {

//     cy.session('login', () => {

//         cy.visit(Cypress.env('qa'))

//         cy.get('[name="username"]').type(username)

//         cy.get('[name="password"]').type(password)

//         cy.get('[type="submit"]').click()


//     })


// })

Cypress.Commands.add('login', () => {

    cy.session('login', () => {


        cy.visit('/')

        cy.get('[name="username"]').type(Cypress.env('username'), {log: false})

        cy.get('[name="password"]').type(Cypress.env('password'), {log: false})

        cy.get('[type="submit"]').click()


    })

})






