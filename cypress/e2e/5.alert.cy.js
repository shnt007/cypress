describe('Alert Handeling', () => {

    // 1. ALert with some text and OK button
    it.skip('Simple Alert with Text and Ok button', () => {
        cy.visit(`https://the-internet.herokuapp.com/javascript_alerts`)
        cy.get(`button[onclick='jsAlert()']`).click()
        cy.on('window:alert', (t) => {
            /* Validating the alert with text contain in alert */
            expect(t).to.contain(`I am a JS Alert`)
        })

        // Validating the success message after alert is closed 
        cy.get(`#result`).should(`have.text`, `You successfully clicked an alert`)
    })

    //2. Alert with some text, Ok and cancel button
    it('Alert with Text and clicking Ok button', () => {
        cy.visit(`https://the-internet.herokuapp.com/javascript_alerts`)
        cy.get(`button[onclick='jsConfirm()']`).click()
        cy.on(`window:confirm`, (t) => {
            expect(t).to.contain(`I am a JS Confirm`)
        })
        cy.get(`#result`).should(`have.text`, `You clicked: Ok`)
    })

    it('Alert with Text and clicking Cancel button', () => {
        cy.visit(`https://the-internet.herokuapp.com/javascript_alerts`)
        cy.get(`button[onclick='jsConfirm()']`).click()
        cy.on(`window:confirm`, (t) => {
            expect(t).to.contain(`I am a JS Confirm`)
        })
        /* Closing the alert window using Cancel button */
        cy.on(`window:confirm`, () => false)
        cy.get(`#result`).should(`have.text`, `You clicked: Cancel`)
    })

    // 3. JavaScript Prompt Alert
    it('JS Prompt Alert with Textbox and Clicking OK', () => {
        cy.visit(`https://the-internet.herokuapp.com/javascript_alerts`)

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(`Welcome Raaz`)
        })
        cy.get(':nth-child(3) > button').click()
        cy.on(`window:prompt`, () => false)
        cy.get(`#result`).should(`have.text`, `You entered: Welcome Raaz`)
    })

    // Authenticated Alert 
    it.only('Authenticated alert with username and password textbox', () => {
        /* Method 1 */
        // cy.visit(`https://the-internet.herokuapp.com/basic_auth`, { auth: { username: 'admin', password: 'admin' } })

        /* Method 2 */
        cy.visit(`https://admin:admin@the-internet.herokuapp.com/basic_auth`)
        cy.get(`div[class="example"]>p`).should(`have.contain`, `Congratulations`)
    })
})