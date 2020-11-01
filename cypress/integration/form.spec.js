describe('/form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form');
    cy.injectAxe();
  });

  it('Has no detectable a11y violations', () => {
    cy.checkA11y();
  });
});
