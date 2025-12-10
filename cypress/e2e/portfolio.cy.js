describe("Portfolio basic navigation", () => {
  it("loads home and navigates between pages", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Projects").click();
    cy.url().should("include", "/projects");

    cy.contains("Services").click();
    cy.url().should("include", "/services");

    cy.contains("Contact").click();
    cy.url().should("include", "/contact");

    cy.contains("Send Message");
  });
});
