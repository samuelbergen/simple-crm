describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('dashboard');
        cy.visit('user');
    });
})