describe("Check for text Next player: X", () => {
  it("should find a text Next player: X", () => {
    // Visit the page you want to test
    cy.visit("http://localhost:5173/");

    // Check for the header with text 'hello'
    cy.contains("div", "Next player: X").should("exist");
  });
});
