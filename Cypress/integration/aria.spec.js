describe('/aria', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/aria');
    cy.injectAxe();
  });

  it('Has no detectable a11y violations', () => {
    cy.checkA11y();
  });
});
