/// <reference types="cypress" />

describe("Team", () => {
  beforeEach(() => {
    cy.visit("/team")
  })

  it("should have a title", () => {
    cy.get("div").should("contain", "Team")
  })
})

export {}
