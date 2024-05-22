describe("My New Cypress Tests for tic-tac-toe", () => {
  it("should find a text Next player: X", () => {
    // Visit the page you want to test
    cy.visit("http://localhost:5173/");

    // Check for the text "Next player: X"
    cy.contains("div", "Next player: X").should("exist");
  });

  // Check for the text "Next player: O"
  it("should visit the home page and check the title", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("div", "Next player: O").should("exist");
  });

  // // Check for the text "Next player: O"
  // it("should visit the home page and check the title", () => {
  //   cy.visit("http://localhost:5173/");
  //   cy.contains("div", "Next player: O").should("exist");
  // });
});

// describe("Square Component", () => {
//   it("renders with the correct value", () => {
//     const value = "X";
//     mount(<Square value={value} onClick={() => {}} />);
//     cy.visit("http://localhost:5173/");
//     cy.get("button.square").should("contain", value);
//   });

//   it("triggers onClick event when clicked", () => {
//     const onClick = cy.stub().as("onClick");
//     mount(<Square value="O" onClick={onClick} />);
//     cy.visit("http://localhost:5173/");
//     cy.get("button.square").click();
//     cy.get("@onClick").should("have.been.calledOnce");
//   });
// });
