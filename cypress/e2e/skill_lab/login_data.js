export class LoginPage {
    email_textbox = `#email`
    password_textbox = `#password`
    login_button = `button[type='submit']`
    // login_button = `//button[@type='submit']`
    profile_button = `.hidden`

    /** Method 1*/
    // enterUserName(username) {
    //     cy.get(this.email_textbox).type(username)
    // }
    // enterPassword(password) {
    //     cy.get(this.password_textbox).type(password)
    // }
    // enterLoginButton() {
    //     cy.xpath(this.login_button).click()
    // }

    /** Method 2 */
    login_Skill_Lab(email, password) {
        cy.get(this.email_textbox).type(email)
        cy.get(this.password_textbox).type(password)
        cy.get(this.login_button).click()
    }

    verifyUsername() {
        cy.get(this.profile_button).should(`have.contain`, 'QA')
    }

    verifyTitle() {
        cy.title({ timeout: 6000 }).should('include', 'Dashboard - Career Service Center | Skill Lab')

    }
    verifyPageTitile() {
        cy.get(`.border-b > .justify-between`).should('have.contain', 'Dashboard')
    }

}