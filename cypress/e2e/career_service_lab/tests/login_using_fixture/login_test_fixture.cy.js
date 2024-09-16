import { login_testdata_using_fixture } from "../../pages/login_using_fixture/login_data_fixture"

const testdata = new login_testdata_using_fixture

describe('Login using Fixture with single data', () => {

    let userdata;
    beforeEach(() => {
        cy.fixture(`login_data.json`).then((data) => {
            userdata = data
        })
        testdata.navigate_to_login()
    })

    it('Test 1:Login with valid email and valid password', () => {

        testdata.login(userdata.valid_data.email, userdata.valid_data.password)
        testdata.verify_login_with_valid_credentials()
        testdata.logout()
    })

    it('Test 2: Login with invalid email and valid password', () => {
        testdata.login(userdata.invalid_email.email, userdata.invalid_email.password)
        testdata.verify_login_with_invalid_credentials()
    })

    it('Test 3: Login with valid email and invalid password', () => {
        testdata.login(userdata.invalid_password.email, userdata.invalid_password.password)
        testdata.verify_login_with_invalid_credentials()
    })

    it('Test 4: Login without email and password', () => {
        testdata.login(userdata.without_data.email, userdata.without_data.password)
        testdata.verify_login_without_credentials()
    })
})

