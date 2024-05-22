describe("Check for header with text hello", () => {
  it("should find a header with text hello", () => {
    // Visit the page you want to test
    cy.visit("your-page-url");

    // Check for the header with text 'hello'
    cy.contains("header", "hello").should("exist");
  });
});
