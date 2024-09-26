import { LoginPage } from "./login"

const login = new LoginPage()

beforeEach(function () {
    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
})

describe('All Login Test', () => {

    // beforeEach(function () {
    //     cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
    // })

    it('Test 1: OrangrHRM Login with Valid Credential', () => {

        login.enterUsername('Admin')
        login.enterPassword('admin123')
        login.enterLogin()
        cy.get('.oxd-main-menu-search > .oxd-icon-button')

    })

    it('Test 2: OrangrHRM Login Invalid Credential', () => {

        login.enterUsername('Admin123')
        login.enterPassword('admin123')
        login.enterLogin()
        cy.get('.oxd-alert-content > .oxd-text')
    })
});

it('Test 3: OrangrHRM Login Valid Credential', () => {

    login.enterUsername('Admin')
    login.enterPassword('admin123')
    login.enterLogin()
    cy.get('.oxd-main-menu-search > .oxd-icon-button')
})