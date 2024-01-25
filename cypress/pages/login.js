class Login {
    get emailInput() {
        return cy.get('#user_email');
    }

    get passwordInput() {
        return cy.get('[name="password"]');
    }

    get loginButton() {
        return cy.get('button[type="submit"]');
    }

    loginUser(email, password) {
        this.emailInput.type(email)
        .should('have.value', email);
        this.passwordInput.type(password)
        .should('have.value', password);;
        this.loginButton.click();
        cy.url().should('include', 'homepage');
    }

}

export default Login