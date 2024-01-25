/// <reference types="cypress" />

import Login from "./../pages/login"
import HomePage from "./../pages/homePage"

const login = new Login()
const homePage = new HomePage()

describe('login & logout on GoIT page', () => {
    beforeEach('go to page', () => {
        cy.visit('/');
    });

    it('succesfully login user 1 to the GoIT page', () => {
        cy.fixture('user1.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            login.loginUser(useremail, password)
            cy.wait(2000)
            homePage.logout();
            cy.wait(3000)
        });
    });

    it('succesfully login user 2 to the GoIT page', () => {
        cy.loginUserCmd('testowyqa@qa.team', 'QA!automation-1')
        cy.url().should('include', 'homepage');
        homePage.logout();
        cy.wait(3000)
    });
});

