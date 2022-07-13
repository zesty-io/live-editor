/// <reference types="cypress" />

// describe("Test when content is pass", () => {
//    beforeEach("start", () => {
//       // cy.visit("https://test.zesty.io:9000")
//       cy.visit("https://qzp3zx5t-dev.webengine.zesty.io/")
//    })
//    it("locate zesty launc btn", () => {
//       cy.wait(5000)
//       cy.get("button").click()
//       cy.contains("Site Navigator")
//       cy.contains("Login")
//       cy.get("[data-testid='Code Helper']").click()
//       cy.wait(3000)
//       cy.contains("Reference Name")
//       cy.wait(3000)
//       cy.get("[data-testid='JSON']").click()
//       cy.wait(3000)
//       cy.get(".pretty-json-container")
//       cy.contains("Login").click()
//       cy.contains("Please Login")
//       cy.get("input[type='text']").type("test")
//       cy.get("input[type='Password']").type("test")
//       cy.get("button[type='submit']").click()
//       cy.wait(5000)
//       cy.contains("Invalid")
//       cy.get("button").click()
//       cy.contains("Login")
//    })
// })

describe("Test when content is pass", () => {
   beforeEach("start", () => {
      cy.visit("https://test.zesty.io:9000")
      cy.login()
   })
   it("locate zesty launc btn", () => {
      cy.wait(3000)
      cy.get("input[type='text']").type("https://qzp3zx5t-dev.webEngine.zesty.io/")
      cy.contains("Save").click()
      cy.wait(3000)
      cy.get("button").click()
   })
})
