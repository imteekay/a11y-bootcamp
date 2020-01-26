describe('/semantic-web', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/semantic-web');
    cy.injectAxe();
  });

  it('Has no detectable a11y violations', () => {
    cy.checkA11y();
  });
});
