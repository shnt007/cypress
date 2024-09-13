describe('Tab child handeling', () => {

    it('Child Tab Handeling', () => {
        /** Method 1 */
        // cy.visit(`https://the-internet.herokuapp.com/windows`) /* Parent Tab */
        // cy.get(`.example>a`).invoke('removeAttr', 'target').click()  /* Remove target and then click */
        // cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') /* validaiting the link open in same tab */
        // cy.wait(5000)
        // cy.go('back') /** TO go back */

        /** Method 2 */
        cy.visit(`https://the-internet.herokuapp.com/windows`) /* Parent Tab */
        cy.get(`.example>a`).then((e) => {
            let url = e.prop('href')
            cy.visit(url)
        })
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') /* validaiting the link open in same tab */
        cy.wait(5000)
        cy.go('back')
    })


})