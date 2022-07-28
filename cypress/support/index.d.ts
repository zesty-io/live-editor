/// <reference types="cypress" />

declare namespace Cypress {
   interface Chainable {
      init(data: any): Chainable<any>
   }
}
