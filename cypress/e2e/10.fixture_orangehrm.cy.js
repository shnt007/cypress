// Single data driven testing using fixture
describe.skip('1. Fixture data driven', () => {

    it('Test 1:Single data driven', () => {
        cy.fixture('orangehrm.json').then((data) => {
            cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
            cy.get(`input[placeholder = 'Username']`).type(data.username)
            cy.get(`input[placeholder='Password']`).type(data.password)
            cy.get(`button[type='submit']`).click()
            cy.wait(2000)
            cy.get('.oxd-topbar-header-title')
                .should(`have.text`, data.expected)
        })
    })
})


// Single data using Fixture for multiple block
describe.skip('2. Fixture data driven', () => {

    let userdata;
    beforeEach(() => {
        cy.fixture(`orangehrm`).then((data) => {
            userdata = data;
            cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
        })
    })
    it('Test 1: Single data using hook', () => {
        cy.get(`input[placeholder = 'Username']`).type(userdata.username)
        cy.get(`input[placeholder='Password']`).type(userdata.password)
        cy.get(`button[type='submit']`).click()
        cy.wait(2000)
        cy.get('.oxd-topbar-header-title')
            .should(`have.text`, userdata.expected)
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()


    })
    it('Test 2: Single data using hook', () => {
        // cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
        cy.get(`input[placeholder = 'Username']`).type(userdata.username)
        cy.get(`input[placeholder='Password']`).type(userdata.password)
        cy.get(`button[type='submit']`).click()
        cy.wait(2000)
        cy.get('.oxd-topbar-header-title')
            .should(`have.text`, userdata.expected)
    })
})


// Multiple data for login using fixture data driven
describe('3. Multiple data for login using fixture data driven', () => {
    it('Test 1: multiple data using hook', () => {
        cy.fixture('orangehrm2').then((data) => {
            cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)

            data.forEach((userdata) => {
                cy.get(`input[placeholder = 'Username']`).type(userdata.username)
                cy.get(`input[placeholder='Password']`).type(userdata.password)
                cy.get(`button[type='submit']`).click()

                if (userdata.username == "Admin" && userdata.password == "admin123") {
                    cy.get('.oxd-topbar-header-title')
                        .should(`have.text`, userdata.expected)

                    /**for login */
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else {
                    cy.wait(3000)
                    cy.get(`p[class="oxd-text oxd-text--p oxd-alert-content-text"]`)
                        .should(`have.text`, userdata.expected)
                }
            })
        })
    })
})
