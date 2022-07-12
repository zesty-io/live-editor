/// <reference types="cypress" />

describe("empty spec", () => {
   beforeEach("start", () => {
      cy.visit("https://test.zesty.io:9000")
   })
   it("locate", () => {
      cy.get("button").click()
   })
})
