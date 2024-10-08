export class job_role_learner {

    // Login Page Elements
    url = `https://qacollegetest.stage.careerservicelab.com/login`
    email_textbox = `#email`
    password_textbox = `#password`
    login_button = `button[type='submit']`

    //dashboard  page elements
    i_ll_complete_later_dialogue_button = `.mt-4 > .rounded`
    job_role_menu_button = `a[href = "/job-trainings?type=user-preference"]`
    all_ongoing_training_xpath = `(//span[@class='text-xs font-semibold whitespace-nowrap'])[3]`
    select_table = `table[class='w-full table-fixed']`
    table_data_xpath = `(//td[@class="first:pl-8 "])[2]`
    table_row_element = `tr[class*= 'table-row-institution']:nth-child(1)`


    navigate_to_login() {
        cy.viewport(1366, 768)
        cy.visit(this.url)
    }

    login(email, password) {
        cy.get(this.email_textbox).type(email)
        cy.get(this.password_textbox).type(password)
        cy.get(this.login_button).click()

        cy.get(this.i_ll_complete_later_dialogue_button, { timeout: 5000 }).click()
        cy.get(this.job_role_menu_button).click();
        cy.wait(6000)
        cy.xpath(this.all_ongoing_training_xpath).click()
    }

    verify_no_of_row_and_column() {
        cy.get(this.select_table)
        cy.get(`table[class= 'w-full table-fixed'] > tbody > tr`).should('have.length', '5')
        cy.wait(6000)
        cy.get(`table[class='w-full table-fixed'] > thead > tr >th`).should('have.length', '6')
    }

    verify_demo_from_the_table() {
        // cy.get(this.select_table)
        // cy.get(`table[class='w-full table-fixed'] > tbody > tr`).each(() => {
        //     cy.get(`td[class="first:pl-8 "]`).contains('Demo').click()
        //     cy.xpath("//div[@class='flex items-center justify-between gap-3 px-8']/h1").should(`have.contains`, `Demo`)
        // })
        cy.get("table[class='w-full table-fixed'] > tbody > tr", { timeout: 10000 })
            .each(($row) => {
                if ($row.text().includes("Demo")) {
                    $row.find(`td[class="first:pl-8 "]`).trigger('click');
                }
            })
        // cy.xpath("//div[@class='flex items-center justify-between gap-3 px-8']/h1")
        cy.wait(4000)
        cy.get('.justify-between > .text-2xl')
            .invoke('text').then((msg) => {
                expect(msg.trim()).eql("Demo")
            })

    }
}

// cy.get('table[class="w-full table-fixed"] > tbody > tr').each(($tr) => {
//     cy.wrap($tr).within(() => {
//         // Use invoke to check the text content and debug if needed
//         cy.get('td[class*="first:pl-8"]').invoke('text').then((text) => {
//             if (text.includes('Demo')) {
//                 // Ensure the text is visible before clicking
//                 cy.contains('Demo', { timeout: 10000 }).should('be.visible').click();
//                 cy.wait(4000)

//             }
//         });
//     });
// });
// cy.xpath("//div[@class='flex items-center justify-between gap-3 px-8']/h1")



