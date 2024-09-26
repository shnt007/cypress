describe('Navigate between tabs', () => {
    it('Navigate between pages', () => {
        cy.visit(`https://demo.opencart.com/`)
        cy.title().should('eq', 'Your Store')

        cy.get('.nav > :nth-child(4) > .nav-link').click()
        cy.get(`#content>h2`).should(`have.text`, `Tablets`)

        cy.go('back')
        cy.title().should('eq', 'Your Store')

        cy.go('forward')
        cy.get(`#content>h2`).should(`have.text`, `Tablets`)

        cy.go(-1)
        cy.title().should('eq', 'Your Store')

        cy.go(1)
        cy.get(`#content>h2`).should(`have.text`, `Tablets`)

    })
})