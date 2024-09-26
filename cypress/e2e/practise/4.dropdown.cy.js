describe('DropDowns Handlers', () => {
    // Dropdown button with list of values
    it('dropdown with select tag', () => {
        cy.visit(`https://www.zoho.com/commerce/free-demo.html`)
        cy.get(`#zcf_address_country`)
            .select(`Nepal`)
            .should('have.value', 'Nepal')
        cy.wait(4000)
    })

    // dropdown button with list of value with text bar
    it('dropdown without select tag', () => {
        cy.visit(`https://www.dummyticket.com/dummy-ticket-for-visa-application/`)
        cy.get(`#select2-billing_country-container`).click()
        cy.get(`.select2-search__field`).type(`Nepal`).type('{enter}') /* After typing the value hit enter*/
        cy.get(`#select2-billing_country-container`)
            .should(`have.text`, `Nepal`)
    })

    // Dropdown button with the static value suggestion
    it('Static Auto Suggestion Dropdown', () => {
        cy.visit(`https://www.wikipedia.org/`)
        cy.get(`input[id='searchInput']`).type(`Kathmandu`)
        cy.get(`.suggestion-title`).contains(`Kathmandu Valley`).click()
    })

    // Dropdown button with dynamic value suggestion
    it('Dynamic Auto Suggestion Dropdown', () => {
        cy.visit(`http://google.com`)
        cy.get(`textarea[class='gLFyf']`).type(`Laptop`)
        cy.get(`div.wM6W7d>span`).should(`have.length`, '13')

        // Method - 1
        cy.get(`div.wM6W7d>span`).contains('laptop wallpaper').click()
        cy.wait(4000)

        // Method - 2
        // Comparing each suggested value with the desired value and then click

        cy.get(`div.wM6W7d>span`).each(($el, index, $list) => {
            if ($el.text() === `laptop wallpaper`) {
                cy.wrap($el).click()
            }
        })
        // Validation after the latop wallpaper is being clicked
        cy.get(`textarea[class='gLFyf']`).should('have.value', 'laptop wallpaper')

    })
})
