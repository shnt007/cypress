export class signp_data {
    base_url = `https://qacollegetest.stage.careerservicelab.com/signup`
    name_textbox = `#full_name`
    email_textbox = `#email`
    password_textbox = `#password`
    confirm_password_textbox = `#password_confirmation`
    register_button = `button[type='submit']`
    register_successful_msg_field = `div[class='Toastify__toast-body']`
    email_already_exit_msg_field = '.Toastify__toast-body'
    pass_donot_match_msg_field = `p[class='mt-1.5 text-xs text-error-dark ']`
    pass_mustbe_8_character_msg_field = `p[class='mt-1.5 text-xs text-error-dark ']`
    enter_name_msg_field = `(//p[@class='mt-1.5 text-xs text-error-dark '])[1]`
    email_required_msg_field = `(//p[@class='mt-1.5 text-xs text-error-dark '])[2]`
    pass_must_be_8_character_msg_field = `(//p[@class='mt-1.5 text-xs text-error-dark '])[3]`
    confirm_pass_msg_field = `(//p[@class='mt-1.5 text-xs text-error-dark '])[4]`

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
        cy.get(this.register_successful_msg_field, { timeout: 4000 })
            .should(`have.contain`, `Registered successfully!`)
    }

    verify_signup_with_already_exist_email() {
        cy.get(this.email_already_exit_msg_field, { timeout: 4000 }).should('be.visible')
            .should(`have.contain`, `The email has already been taken.`)
    }

    verfiy_signup_with_confirm_password() {
        cy.get(this.pass_donot_match_msg_field)
            .should(`have.contain`, `Passwords do not match`)
    }

    verify_signup_with_password_length() {
        cy.get(this.pass_mustbe_8_character_msg_field)
            .should(`have.contain`, `Password must be 8 characters long`)
    }

    verify_signup_without_data() {
        cy.xpath(this.enter_name_msg_field)
            .should(`have.contain`, `Please enter your name`)
        cy.xpath(this.email_required_msg_field)
            .should(`have.contain`, `Email is required`)
        cy.xpath(this.pass_must_be_8_character_msg_field)
            .should(`have.contain`, `Password must be 8 characters long`)
        cy.xpath(this.confirm_pass_msg_field)
            .should(`have.contain`, `Confirm Password is required`)
    }

}