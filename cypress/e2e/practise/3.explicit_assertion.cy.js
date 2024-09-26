describe('Explicit Assertion', () => {
    it('Login and Check Username Using BDD and TDD', () => {
        /* Login with valid username and password and comparing the username */
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
        cy.get(`input[placeholder='Username']`).type("Admin")
        cy.get(`input[placeholder = 'Password']`).type('admin123')
        cy.get(`button[type = 'submit']`).click()

        let expName = 'Jos Butler'
        cy.get(`.oxd-userdropdown-name`).then((x) => {
            let actName = x.text()

            // Using BDD
            // expect(actName).to.eq(expName)
            // expect(actName).to.not.eq(expName)

            // Using TDD
            assert.equal(actName, expName)
            // assert.not.equal(actName, expName)
        })
    })
});
