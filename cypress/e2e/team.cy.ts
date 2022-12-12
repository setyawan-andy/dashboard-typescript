/// <reference types="cypress" />

describe("Team", () => {
  beforeEach(() => {
    cy.visit("/team")
  })

  it("should have a title", () => {
    cy.get("h1").should("contain", "Team")
  })
})
