describe('My First Test', () => {
  it( 'should have title', function () {
    cy.visit('/');
    cy.title().should('include', 'NgTests');
  } );

  it( 'should contain text "I am testing"', function () {
    cy.visit('/');
    cy.get('app-root .initial-text').should('contain', 'I am testing');
  } );

  it( 'should not contain "Welcome"', function () {
    cy.visit('/');
    cy.get('app-root .welcome-text').should('not.exist');
  } );

  it( 'should contain "Welcome"', function () {
    cy.visit('/');
    cy.get('app-root button').click();
    cy.get('app-root .welcome-text').should('contain', 'Welcome');
  } );

  it('should not contain "Welcome"', () => {
    cy.visit('/');
    cy.get('app-root button').click();
    cy.get('app-root .welcome-text').should('contain', 'Welcome');
    cy.get('app-root button').click();
    cy.get('app-root .welcome-text').should('not.exist');
  });
})
