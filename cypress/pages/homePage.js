class HomePage {
    get menuBtn() {
        return cy.get('#open-navigation-menu-mobile');
    }

    get logoutBtn() {
        return cy.get('.next-1l6xiut').contains('Log out')
    }

    logout() {
        this.menuBtn.click();
        this.logoutBtn.click();
        cy.url().should('include', 'account/login');
    }
}

export default HomePage