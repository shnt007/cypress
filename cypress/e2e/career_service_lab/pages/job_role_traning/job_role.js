export class job_role_traning {
    //login page elements
    login_url = `https://stage.careerservicelab.com/login`
    email_textbox = `#email`
    password_textbox = `#password`
    login_button = `button[type='submit']`

    //menu bar elements
    dashboard_title_field = `.border-b > .justify-between > .text-2xl`
    menu_hamburger_icon = `#hamburger`
    job_role_link = `a[href="/admin/job-trainings?type=ongoing"]`
    x_button_on_menu = `svg[class='text-2xl text-neutrals-50'] `

    // job_role_training page elements
    job_role_training_title_field = `.justify-between > .text-2xl`
    create_traning_button = `a[href="/admin/job-trainings/add"]`

    //Add a new job role training page elements
    traning_title_textbox = `#name`
    training_description_textbox = `.ql-editor`
    start_date_xpath = `(//input[@placeholder='DD-MM-YY'])[1]`
    end_date_xpath = `(//input[@placeholder='DD-MM-YY'])[2]`
    traning_start_time_xpath = `(//input[@placeholder='Select start time'])[1]`
    traning_end_time_xpath = `(//input[@placeholder='Select start time'])[2]`
    deadline_to_apply_xpath = `(//input[@placeholder='DD-MM-YY'])[3]`
    training_mode_dropdown_xpath = `(//div[@class=' css-11wosbv'])[1]`
    assessment_date_xpath = `(//input[@placeholder='DD-MM-YY'])[4]`
    assessment_url_xpath = `//input[@placeholder='Assessment url']`
    deadline_date_xpath = `(//input[@placeholder='DD-MM-YY'])[5]`
    total_score_xpath = `//input[@placeholder='Total Score']`
    access_type_dropdown_xpath = `//div[@id='react-select-4-placeholder']`
    tag_textbox = `#tags-modal-input`
    create_new_job_button = `button[type = "submit"]`

    navigate_to_login_page() {
        cy.visit(this.login_url)
    }

    navigate_to_job_role_traning_page() {
        cy.get(this.menu_hamburger_icon).click()
        cy.get(this.job_role_link).click()
        cy.get(this.x_button_on_menu).click()
    }

    login(email, password) {
        cy.get(this.email_textbox).type(email)
        cy.get(this.password_textbox).type(password)
        cy.get(this.login_button).click()
    }

    verify_job_role_page_title() {
        cy.get(this.job_role_training_title_field, { timeout: 5000 }).should('have.contain', 'Job Role Trainings')
    }

    verify_creating_job_role_training_with_valid_data() {
        cy.get(this.create_traning_button).click()
        cy.get(this.traning_title_textbox).type()
        cy.get(this.training_description_textbox).type()
        cy.xpath(this.start_date_xpath)
        cy.xpath(this.end_date_xpath)
        cy.xpath(this.traning_start_time_xpath)
        cy.xpath(this.traning_end_time_xpath)
        cy.xpath(this.deadline_to_apply_xpath)
        cy.xpath(this.training_mode_dropdown_xpath).select('Online') /* we can use value or text or index */
        cy.xpath(this.assessment_date_xpath)
        cy.xpath(this.assessment_url_xpath).type()
        cy.xpath(this.deadline_date_xpath)
        cy.xpath(this.total_score_xpath).type()
        cy.xpath(this.access_type_dropdown_xpath).select('Default')
        cy.get(this.tag_textbox).type()
        cy.get(this.create_new_job_button).click()

    }
}