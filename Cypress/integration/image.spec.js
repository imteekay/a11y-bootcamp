describe('/image', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/image');
    cy.injectAxe();
  });

  it('Has no detectable a11y violations', () => {
    cy.checkA11y();
  });
});
