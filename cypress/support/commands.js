Cypress.Commands.add('loginUserCmd', (email, password) => {
    cy.get('#user_email').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
})