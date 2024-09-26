export class job_role_learner {

    // Login Page Elements
    url = `https://qacollegetest.stage.careerservicelab.com/login`
    email_textbox = `#email`
    password_textbox = `#password`
    login_button = `button[type='submit']`

    //dashboard  page elements
    i_ll_complete_later_dialogue_button = `.mt-4 > .rounded`
    job_role_menu_button = `a[href = "/job-trainings?type=user-preference"]`
    all_upcoming_training_option_xpath = `(//span[@class='text-xs font-semibold whitespace-nowrap'])[2]`
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
        cy.get(this.job_role_menu_button).click()
        cy.wait(5000)
        cy.xpath(this.all_upcoming_training_option_xpath, { timeout: 6000 }).click()
    }

    
    verify_no_of_row_and_column() {
        cy.get(this.select_table)
        cy.get(`table[class= 'w-full table-fixed'] > tbody > tr`).should('have.length', '5')
        cy.get(`table[class='w-full table-fixed'] > thead > tr >th`).should('have.length', '6')
    }
}