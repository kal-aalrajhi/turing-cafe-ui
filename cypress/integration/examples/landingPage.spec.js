describe('Landing Page', () => {
    beforeEach( () => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', { fixture: 'reservationData.json' });
        cy.wait(2000);
        cy.visit('http://localhost:3000');
    })

    it('Should load landing page URL', () => {
        cy.url().should('eq', 'http://localhost:3000/');
    })

})