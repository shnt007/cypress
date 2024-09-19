import { login_page } from "../../pages/login/login_test"
const signin = new login_page()

describe('Login Test', () => {
    beforeEach(() => {
        signin.navigate_to_login_page()
    })

    it('Test 1: Login with valid credentials', () => {
        signin.login('subash.gole+labadmin1@codingmountain.com', '@secret@')
        signin.verify_login_with_valid_credentials()
    })

    it('Test 2: Login with invalid credentials', () => {
        signin.login('abc@email.com', 'Password@1234')
        signin.verify_login_with_invalid_credentials()
    })

    it('Test 3: Login without any credentails', () => {
        // signin.verify_login_without_credentials()
        signin.login('{backspace}', '{backspace}')
        signin.verify_login_without_credentials
    })

    it('Test 4: Login Api Verification using Intercept', () => {
        signin.login('subash.gole+labadmin1@codingmountain.com', '@secret@')
        signin.verify_login_api_using_intercept()
    })

    it('Test 5: Profile Api Verfication using Intercept', () => {
        signin.login('subash.gole+labadmin1@codingmountain.com', '@secret@')
        signin.verify_profile_api_using_intercept()
    })
})