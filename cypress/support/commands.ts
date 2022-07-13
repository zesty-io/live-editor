/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
// const { ZestyLiveEditor } = require("../../src/index")
declare namespace Cypress {
   interface Chainable<Subject> {
      login(): Chainable<Subject>
   }
}

Cypress.Commands.add("login", () => {
   const formBody = new FormData()

   formBody.append("email", Cypress.env("email"))
   formBody.append("password", Cypress.env("password"))

   // @ts-ignore
   return cy
      .request({
         url: `${Cypress.env("API_AUTH")}/login`,
         method: "POST",
         credentials: "include",
         body: formBody,
      })
      .then(async (res) => {
         const response = await new Response(res.body).json()
         // We need the cookie value returned reset so it is unsecure and
         // accessible by javascript
         cy.setCookie(Cypress.env("COOKIE_NAME"), response.meta.token)
      })
})
