describe('Assertion Testing', () => {
    it('Assert', () => {
        /* Validating the orangehrm exist in website */
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrm')
    })


    //Or
    /* Validating using multiple should keywoard */
    it("Assert Testing2", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url()
        should('include', 'orangehrmlive.com')
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .should('contain', 'orangehrm')

    })


    it("Assert Testing3", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url()
            .should('include', 'orangehrmlive.com')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrm')

    })

    it('Title checking using (title)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('include', 'Orange')
            .and('eq', "OrangeHRM")
            .and('contain', "HRM")
    })

    it('Logo Assertion using (be.visible)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.orangehrm-login-branding > img').should('be.visible')
            .and('exist')
    })
    it('Checking No of links Using(have.length)', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath("//a").should('have.length', '5')

    })

    it('Input value into the username and validating the data', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(`input[placeholder='Username']`).type('Admin')
        cy.get(`input[placeholder='Username']`).should('have.value', 'Admin')
    })
});
