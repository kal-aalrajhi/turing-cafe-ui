describe('Landing Page', () => {
    beforeEach( () => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', { fixture: 'reservationData.json' });
        cy.wait(2000);
        cy.visit('http://localhost:3000');
    })

    it('Should load landing page URL', () => {
        cy.url().should('eq', 'http://localhost:3000/');
    })

    // Check what should be displayed
    it('Should have a title', () => {
        cy.contains('Turing Cafe Reservations');
    }) 

    it('Should have a form with four inputs and a make reservation button', () => {
        cy.get('input[placeholder="Name"]');
        cy.get('input[placeholder="Date (mm/dd)"]');
        cy.get('input[placeholder="Time"]');
        cy.get('input[placeholder="Number of guests"]');
        cy.get('.make-res-btn').contains('Make Reservation');
    }) 

    it.only('Should display reservation cards', () => {
        cy.get('.card-container').find('.card').first().contains('Christie')
        cy.get('.card-container').find('.card').last().contains('Leta')
    })

    // Check data input into form

})