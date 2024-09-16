import { signp_data } from "../../pages/signup_using_fixture/signup_testdata";
const register = new signp_data

describe('Sign Up', () => {
    let userdata;
    beforeEach(() => {
        cy.fixture("signup_data").then((data) => {
            userdata = data
        })
        register.navigate_to_signup()
    })

    it("Test 1: Signup using valid data", () => {
        let name = userdata.valid_data.name
        let email = userdata.valid_data.email
        let password = userdata.valid_data.password
        let confirm_password = userdata.valid_data.confirm_password

        register.signup(name, email, password, confirm_password)
        register.verify_signup_with_valid_data()
    })

    it("Test 2:Verify signup with already exits email", () => {
        let name = userdata.used_email.name
        let email = userdata.used_email.email
        let password = userdata.used_email.password
        let confirm_password = userdata.used_email.confirm_password

        register.signup(name, email, password, confirm_password)
        register.verify_signup_with_already_exist_email()
    })

    it("Test 3:Verify signup with confirm password", () => {
        let name = userdata.confirm_password.name
        let email = userdata.confirm_password.email
        let password = userdata.confirm_password.password
        let confirm_password = userdata.confirm_password.confirm_password
        register.signup(name, email, password, confirm_password)
        register.verfiy_signup_with_confirm_password()

    })

    it('Test 4:Verify signup with password length', () => {
        let name = userdata.password_length.name
        let email = userdata.password_length.email
        let password = userdata.password_length.password
        let confirm_password = userdata.password_length.confirm_password
        register.signup(name, email, password, confirm_password)
        register.verify_signup_with_password_length()
    })

    it('Test 5: Verify signup without testdata', () => {
        let name = userdata.without_data.name
        let email = userdata.without_data.email
        let password = userdata.without_data.password
        let confirm_password = userdata.without_data.confirm_password

        register.signup(name, email, password, confirm_password)
        register.verify_signup_without_data()
    })

})