export class register_page {

    url = `https://qacollegetest.stage.careerservicelab.com/signup`
    name_textbox = `#full_name`
    email_textbox = `#email`
    password_textbox = `#password`
    confirm_password_textbox = `#password_confirmation`
    submit_button = `button[type='submit']`

    base_url() {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }) /* To disable xhr/fetch log */
        cy.visit(this.url)
    }

    register(name, email, password, confirm_password) {
        cy.get(this.name_textbox).type(name)
        cy.get(this.email_textbox).type(email)
        cy.get(this.password_textbox).type(password)
        cy.get(this.confirm_password_textbox).type(confirm_password)
        cy.get(this.submit_button).click()
    }

    verify_registeration_successful() {
        cy.get('.Toastify__toast-body > :nth-child(2)').should(`have.contain`, `successfully`)
    }

    verify_registration_with_already_used_email() {
        cy.get('.Toastify__toast-body').should(`have.contain`, `The email has already been taken.`)
    }
} 