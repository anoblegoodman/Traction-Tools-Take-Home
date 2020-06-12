describe('Travel log', () => {
  it('should walk through application', () => {
    // Home page
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="homeButton"]').click();

    // Add places
    cy.location('pathname').should('eq', '/past-places');
    cy.get('[data-testid="addPlaceButton"]').click();

    // Select continent Europe
    cy.location('pathname').should('eq', '/continents');
    cy.get('[data-testid="Europe"]').click();

    // Go back to continents list
    cy.get('[data-testid="backButton"]').click();
    cy.location('pathname').should('eq', '/continents');

    // Select continent Asia
    cy.location('pathname').should('eq', '/continents');
    cy.get('[data-testid="Asia"]').click();

    // Create travel log for Armenia
    cy.get('[data-testid="Armenia"]').click();
    cy.get('textarea').type('Testing trip notes form');
    cy.get('input[id="hotel"]').click();
    cy.get('input[id="goBack"]').click();
    cy.get('[data-testid="submit"]').click();

    // Check successful submission of travel log
    cy.location('pathname').should('eq', '/continents/Asia');
    cy.get('[data-testid="jumpToTravel"]').click();
    cy.location('pathname').should('eq', '/past-places');
    cy.get('[data-testid="diaryText"]').contains('Armenia');
  });
});
