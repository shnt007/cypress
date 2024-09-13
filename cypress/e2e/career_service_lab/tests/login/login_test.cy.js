import { login_page } from "../../pages/login/login_test"
const signin = new login_page()

describe('Login Test', () => {
    beforeEach(() => {
        signin.base_url()
    })

    it('Test 1: Login with valid credentials', () => {
        signin.login('subash.gole+labadmin1@codingmountain.com', 'stuk-zd9Rnmbcya')
        signin.verify_login_with_valid_credentials()
    })

    it('Test 2: Login with invalid credentials', () => {
        signin.login('abc@email.com', 'password1234')
        signin.verify_login_with_invalid_credentials()
    })

    it('Test 3: Login without any credentails', () => {
        // signin.verify_login_without_credentials()
        signin.login('{backspace}', '{backspace}')
        signin.verify_login_without_credentials
    })

})