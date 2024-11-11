import { register_page } from "../../pages/register/register"
const signup = new register_page()

describe('Register Page', () => {
    beforeEach(() => {
        signup.base_url()
    })


    it('Test 1: Registeration with valid data', () => {
        signup.register(`Ram`, `ram16@email.com`, `Password@123`, `Password@123`)
        signup.verify_registeration_successful()
        // signup.verify_registration_with_used_data()
    })

    it('Test 2: Registeration with already used email', () => {
        signup.register(`Ram`, `ram4@email.com`, `Password@123`, `Password@123`)
        signup.verify_registration_with_already_used_email()
    })
})