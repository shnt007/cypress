export class login_page {

    url = `https://stage.careerservicelab.com/login`
    email_textbox = `#email`
    password_textbox = `#password`
    login_button = `button[type='submit']`

    login(email, password) {
        cy.get(this.email_textbox).type(email)
        cy.get(this.password_textbox).type(password)
        cy.get(this.login_button).click()
    }

    base_url() {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }) /* To disable xhr/fetch log */
        cy.visit(this.url)
    }

    verify_login_with_valid_credentials() {
        cy.wait(4000)
        cy.get(`h1[class*='text-2xl font-medium']`).should('have.contain', 'Dashboard')
    }

    verify_login_with_invalid_credentials() {
        cy.wait(2000)
        cy.get(`div[role='alert'] div:nth-child(2)`).should(`have.contain`, `Invalid credentials.`)
    }

    verify_login_without_credentials() {
        // cy.get(this.login_button).click()
        cy.get(`div[class*='mb-2 text-sm']>p[class*='mt-1.5 text-xs ']`).should(`have.text`, 'Email is required')
        cy.get(`div[class*='mb-1.5 text-sm input']>p[class*='mt-1.5 text-xs ']`).should(`have.text`, 'Password is required')
    }

}