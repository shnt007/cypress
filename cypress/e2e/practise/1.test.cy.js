describe('CSS Locator', () => {
    it(' Search ', () => {
        cy.visit("http://google.com.np")
        cy.get('#APjFqb').type('facebook.com')
        cy.get("div[class='lJ9FBc'] input[name='btnK']").click()
        cy.xpath(`//a[@href="https://www.facebook.com/"]`).click()
    })
});
