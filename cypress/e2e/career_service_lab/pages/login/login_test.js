export class login_page {

    url = `https://stage.careerservicelab.com/login`
    email_textbox = `#email`
    password_textbox = `#password`
    login_button = `button[type='submit']`
    dashboard_title_field = `h1[class*='text-2xl font-medium']`
    invalid_credential_warning_field = `div[role='alert'] div:nth-child(2)`
    email_required_text_field = `div[class*='mb-2 text-sm']>p[class*='mt-1.5 text-xs ']`
    password_required_text_field = `div[class*='mb-1.5 text-sm input']>p[class*='mt-1.5 text-xs ']`

    login(email, password) {
        cy.get(this.email_textbox).type(email)
        cy.get(this.password_textbox).type(password)
        cy.get(this.login_button).click()
    }

    navigate_to_login_page() {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }) /* To disable xhr/fetch log */
        cy.visit(this.url)
    }

    verify_login_with_valid_credentials() {
        cy.get(this.dashboard_title_field, { timeout: 6000 }).should('have.contain', 'Dashboard')
    }

    verify_login_with_invalid_credentials() {
        cy.get(this.invalid_credential_warning_field, { timeout: 6000 }).should(`have.contain`, `Invalid credentials.`)
    }

    verify_login_without_credentials() {
        cy.get(this.email_required_text_field).should(`have.text`, 'Email is required')
        cy.get(this.password_required_text_field).should(`have.text`, 'Password is required')
    }

    verify_login_api_using_intercept() {
        cy.intercept('POST', '/api/auth/login').as('login')
        cy.wait('@login').then((data) => {
            expect(data.response.body.message).to.eq("Logged in successfully!")
        })
    }

    verify_profile_api_using_intercept() {
        cy.intercept('GET', '/api/profile').as('profile')
        cy.wait('@profile').then((data) => {
            // cy.log(JSON.stringify(data))
            expect(data.response.body.message).to.eq('User profile!')
            expect(data.response.body.data.id).to.eq(17794)
            expect(data.response.body.data.email).to.eq('subash.gole+labadmin1@codingmountain.com')
        })
    }

}