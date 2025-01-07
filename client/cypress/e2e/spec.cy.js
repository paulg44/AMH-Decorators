describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://amhdecorators.netlify.app/");
    cy.get('[href="/about"').click();
  });
});
