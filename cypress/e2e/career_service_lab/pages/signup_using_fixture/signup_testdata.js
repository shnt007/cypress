export class signp_data {
    base_url = `https://qacollegetest.stage.careerservicelab.com/signup`
    name_textbox = `#full_name`
    email_textbox = `#email`
    password_textbox = `#password`
    confirm_password_textbox = `#password_confirmation`
    register_button = `button[type='submit']`

    navigate_to_signup() {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit(this.base_url)
    }

    signup(name, email, password, confirm_password) {
        cy.get(this.name_textbox).type(name)
        cy.get(this.email_textbox).type(email)
        cy.get(this.password_textbox).type(password)
        cy.get(this.confirm_password_textbox).type(confirm_password)
        cy.get(this.register_button).click()
    }

    verify_signup_with_valid_data() {
        cy.get(`div[class='Toastify__toast-body']`)
            .should(`have.contain`, `Registered successfully!`)
    }

    verify_signup_with_already_exist_email() {
        // cy.wait(3000)
        cy.get('.Toastify__toast-body', { timeout: 10000 }).should('be.visible')
            .should(`have.contain`, `The email has already been taken.`)
    }

    verfiy_signup_with_confirm_password() {
        cy.get(`p[class='mt-1.5 text-xs text-error-dark ']`)
            .should(`have.contain`, `Passwords do not match`)
    }

    verify_signup_with_password_length() {
        cy.get(`p[class='mt-1.5 text-xs text-error-dark ']`)
            .should(`have.contain`, `Password must be 8 characters long`)
    }

    verify_signup_without_data() {
        cy.xpath(`(//p[@class='mt-1.5 text-xs text-error-dark '])[1]`)
            .should(`have.contain`, `Please enter your name`)
        cy.xpath(`(//p[@class='mt-1.5 text-xs text-error-dark '])[2]`)
            .should(`have.contain`, `Email is required`)
        cy.xpath(`(//p[@class='mt-1.5 text-xs text-error-dark '])[3]`)
            .should(`have.contain`, `Password must be 8 characters long`)
        cy.xpath(`(//p[@class='mt-1.5 text-xs text-error-dark '])[4]`)
            .should(`have.contain`, `Confirm Password is required`)
    }

}