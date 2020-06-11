describe('Visit GraphQL Playground for API', () => {
  it('confirms API exists', () => {
    cy.visit('https://countries.trevorblades.com/');
  });
});
