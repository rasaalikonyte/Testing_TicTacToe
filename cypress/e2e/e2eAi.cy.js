describe("Tic-Tac-Toe Game with AI", () => {
  beforeEach(() => {
    // Assuming your game is hosted at localhost:5173
    cy.visit("http://localhost:5173");
  });

  it("should display the initial game state", () => {
    cy.get(".square").should("have.length", 9);
    cy.get(".square").each(($el) => {
      cy.wrap($el).should("be.empty");
    });
    cy.get(".game-info div").should("contain", "Next player: X");
  });

  it("should handle a player move followed by an AI move", () => {
    cy.get(".square").eq(0).click();
    cy.get(".square").eq(0).should("contain", "X");
    cy.get(".game-info div").should("contain", "Next player: O");

    // Wait for AI to make its move
    cy.wait(500); // Adjust the wait time as necessary

    cy.get(".square").then(($squares) => {
      cy.wrap($squares).filter(':contains("O")').should("have.length", 1);
    });

    cy.get(".game-info div").should("contain", "Next player: X");
  });

  it("should declare a winner", () => {
    // Player makes moves
    cy.get(".square").eq(0).click(); // X
    cy.wait(500); // Wait for AI
    cy.get(".square").eq(4).click(); // X
    cy.wait(500); // Wait for AI
    cy.get(".square").eq(8).click(); // X

    // Check for winner
    cy.get(".game-info div").should("contain", "Winner: X");
  });

  it("should reset the game", () => {
    cy.get(".square").eq(0).click(); // X
    cy.wait(500); // Wait for AI
    cy.get("button").contains("Go to game start").click();

    cy.get(".square").each(($el) => {
      cy.wrap($el).should("be.empty");
    });
    cy.get(".game-info div").should("contain", "Next player: X");
  });

  it("should jump to a specific move", () => {
    cy.get(".square").eq(0).click(); // X
    cy.wait(500); // Wait for AI
    cy.get(".square").eq(4).click(); // X
    cy.wait(500); // Wait for AI
    cy.get(".square").eq(8).click(); // X

    cy.get("button").contains("Go to move #1").click();
    cy.get(".square").eq(0).should("contain", "X");
    cy.get(".square").eq(1).should("be.empty");
    cy.get(".square").eq(4).should("be.empty");
    cy.get(".square").eq(8).should("be.empty");
    cy.get(".game-info div").should("contain", "Next player: O");
  });
});
