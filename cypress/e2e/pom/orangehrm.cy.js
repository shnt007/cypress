import { LoginPage } from "./login"

const login = new LoginPage()

beforeEach(function () {
    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
})

describe('All Login Test', () => {

    // beforeEach(function () {
    //     cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
    // })

    it('OrangrHRM Login with Valid Credential', () => {

        login.enterUsername('Admin')
        login.enterPassword('admin123')
        login.enterLogin()
        cy.get('.oxd-main-menu-search > .oxd-icon-button')

    })

    it('OrangrHRM Login Invalid Credential', () => {

        login.enterUsername('Admin123')
        login.enterPassword('admin123')
        login.enterLogin()
        cy.get('.oxd-main-menu-search > .oxd-icon-button')
    })
});

it('3.OrangrHRM Login Valid Credential', () => {

    login.enterUsername('Admin')
    login.enterPassword('admin123')
    login.enterLogin()
    cy.get('.oxd-main-menu-search > .oxd-icon-button')
})