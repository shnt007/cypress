import { LoginPage } from "./login_data"

const Login = new LoginPage


describe('Skill Lab Login using POM', () => {
    beforeEach(function () {
        cy.visit(`https://stage.careerservicelab.com/login`)
    })

    /**Method 1 */
    // it('Login with Title and Username Validation', () => {
    //     Login.enterUserName('subash.gole+labadmin1@codingmountain.com')
    //     Login.enterPassword('stuk-zd9Rnmbcya')
    //     Login.enterLoginButton()
    //     Login.verifyTitle()
    //     Login.verifyUsername()

    /** Method 2 */
    it('Login with Title and Username Validation', () => {
        Login.login_Skill_Lab('subash.gole+labadmin1@codingmountain.com', '@secret@')
        Login.verifyTitle()
        Login.verifyUsername()
        Login.verifyPageTitile()
    })

})