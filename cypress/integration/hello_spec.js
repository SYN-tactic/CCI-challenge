describe('The Say Hi Button', () => {
	it('renders Hi when clicked', function() {
	    cy.visit('http://localhost:3000');
	    cy.get('h1').should('not.have.text', 'Hi');
	    cy.contains('Say Hi').click();
	    cy.get('h1').should('have.text', 'Hi');
	});
    });
