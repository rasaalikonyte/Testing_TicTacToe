// describe("My New Cypress Tests for tic-tac-toe", () => {
//   it("should find a text Next player: X", () => {
//     cy.visit("http://localhost:5173/");
//     cy.contains("div", "Next player: X").should("exist");
//   });
// it("should find a text Next player: O", () => {
//   // Visit the page you want to test
//   cy.visit("http://localhost:5173/");
//   // Check for the text "Next player: O"
//   cy.contains("div", "Next player: O").should("exist");
// });
// });

describe("Cypress Tests for Tic-Tac-Toe Game", () => {
  beforeEach(() => {
    // Assuming your game is hosted at localhost:3000
    cy.visit("http://localhost:5173/");
  });

  it("should display the initial game state", () => {
    cy.get(".square").should("have.length", 9);
    cy.get(".square").each(($el) => {
      cy.wrap($el).should("be.empty");
    });
    cy.get(".game-info div").should("contain", "Next player: X");
  });

  it("should handle a single move", () => {
    cy.get(".square").eq(0).click();
    cy.get(".square").eq(0).should("contain", "X");
    cy.get(".game-info div").should("contain", "Next player: O");
  });

  it("should declare a winner", () => {
    cy.get(".square").eq(0).click(); // X
    cy.get(".square").eq(1).click(); // O
    cy.get(".square").eq(3).click(); // X
    cy.get(".square").eq(4).click(); // O
    cy.get(".square").eq(6).click(); // X wins
    cy.get(".game-info div").should("contain", "Winner: X");
  });

  it("should reset the game", () => {
    cy.get(".square").eq(0).click(); // X
    cy.get(".square").eq(1).click(); // O
    cy.get("button").contains("Go to game start").click();
    cy.get(".square").each(($el) => {
      cy.wrap($el).should("be.empty");
    });
    cy.get(".game-info div").should("contain", "Next player: X");
  });

  it("should jump to a specific move", () => {
    cy.get(".square").eq(0).click(); // X
    cy.get(".square").eq(1).click(); // O
    cy.get(".square").eq(2).click(); // X
    cy.get("button").contains("Go to move #1").click();
    cy.get(".square").eq(0).should("contain", "X");
    cy.get(".square").eq(1).should("be.empty");
    cy.get(".square").eq(2).should("be.empty");
    cy.get(".game-info div").should("contain", "Next player: O");
  });
});
