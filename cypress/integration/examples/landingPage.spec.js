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

    it('Should display reservation cards', () => {
        cy.get('.card-container').find('.card').first().contains('Christie')
        cy.get('.card-container').find('.card').last().contains('Leta')
    })

    // Check data input into form
    it('Should start with clear inputs on page load', () => {
        cy.get('input[placeholder="Name"]').should('have.value', '');
        cy.get('input[placeholder="Date (mm/dd)"]').should('have.value', '');
        cy.get('input[placeholder="Time"]').should('have.value', '');
        cy.get('input[placeholder="Number of guests"]').should('have.value', '');
    })

    it('Should take in input for each input bar and submit a reservation', () => {
        cy.get('input[placeholder="Name"]').type('Kale');
        cy.get('input[placeholder="Date (mm/dd)"]').type('04/20');
        cy.get('input[placeholder="Time"]').type('6:66');
        cy.get('input[placeholder="Number of guests"]').type('10');
    
        cy.get('.make-res-btn').click();

        cy.get('.card-container').find('.card').last().contains('Kale')
    })
})