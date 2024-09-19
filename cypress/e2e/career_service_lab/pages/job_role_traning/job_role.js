export class job_role_training {
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
    training_start_time_xpath = `(//input[@placeholder='Select start time'])[1]`
    training_start_time_select_xpath = `//li[@class='react-datepicker__time-list-item '][97]`
    training_end_time_xpath = `(//input[@placeholder='Select start time'])[2]`
    training_end_time_select_xpath = `//li[@class='react-datepicker__time-list-item '][109]`
    deadline_to_apply_xpath = `(//input[@placeholder='DD-MM-YY'])[3]`
    training_mode_dropdown_xpath = `(//div[@class=' css-11wosbv'])[1]`
    assessment_date_xpath = `(//input[@placeholder='DD-MM-YY'])[4]`
    assessment_url_xpath = `//input[@placeholder='Assessment url']`
    deadline_date_xpath = `(//input[@placeholder='DD-MM-YY'])[5]`
    total_score_xpath = `//input[@placeholder='Total Score']`
    access_type_dropdown_xpath = `(//div[@class=' css-1d8n9bt'])[3]`
    tag_textbox = `#tags-modal-input`
    create_new_job_button = `button[type = "submit"]`

    navigate_to_login_page() {
        cy.visit(this.login_url)
    }

    navigate_to_job_role_traning_page() {
        cy.get(this.menu_hamburger_icon, { timeout: 6000 }).click()
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

    create_job_role_training() {
        cy.get(this.create_traning_button).click() /* Open Job role traning form */

        /** Title */
        cy.get(this.traning_title_textbox).type("Demo")

        /** Description */
        cy.get(this.training_description_textbox).type("This is a demo")

        /* Start Date */
        cy.xpath(this.start_date_xpath).click()
        cy.get(`.react-datepicker`).within(() => {
            cy.get('.react-datepicker__year-select ').select("2024");
            cy.get('.react-datepicker__month-select').select('9')
            const date = 'October 1st';
            cy.xpath(`//div[contains(@aria-label, '${date}')]`).click();
        })

        /** End Date */
        cy.xpath(this.end_date_xpath).click()
        cy.get(`.react-datepicker-popper`).within(() => {
            cy.get(`.react-datepicker__year-select`).select('2024')
            cy.get(`.react-datepicker__month-select`).select('9')
            const date = 'October 20th';
            cy.xpath(`//div[contains(@aria-label, '${date}')]`).click();
        })

        /** Start time */
        cy.xpath(this.training_start_time_xpath).click()
        cy.xpath(this.training_start_time_select_xpath).click()

        /** End Time */
        cy.xpath(this.training_end_time_xpath).click()
        cy.xpath(this.training_end_time_select_xpath).click()

        /* Deadline To Apply */
        cy.xpath(this.deadline_to_apply_xpath).click()
        /* Selecting the Date */
        cy.get(`.react-datepicker-popper`).within(() => {
            cy.get(`.react-datepicker__year-select`).select('2024')
            cy.get(`.react-datepicker__month-select`).select('8')
            const date = 'September 25th'
            cy.xpath(`//div[contains(@aria-label,'${date}')]`).click()
            /* Selecting the Time */
            cy.xpath(`//li[@class='react-datepicker__time-list-item '][80]`).click()
        })

        /* Traning mode */
        cy.xpath(this.training_mode_dropdown_xpath).click()
        cy.get(`div[class=' css-dec5yr-option']:nth-child(1)`).click()

        /*Assessment Date */
        cy.xpath(this.assessment_date_xpath).click()
        cy.get(`.react-datepicker__month-container`).within(() => {
            cy.get(`.react-datepicker__year-select`).select('2024')
            cy.get(`.react-datepicker__month-select`).select('9')
            const date = 'October 10th'
            cy.xpath(`//div[contains(@aria-label,'${date}')]`).click()
        })

        /*Assessment Date for invalid data validation */
        // cy.xpath(this.assessment_date_xpath).click()
        // cy.get(`.react-datepicker__month-container`).within(() => {
        //     cy.get(`.react-datepicker__year-select`).select('2024')
        //     cy.get(`.react-datepicker__month-select`).select('10')
        //     const date = 'November 15th'
        //     cy.xpath(`//div[contains(@aria-label,'${date}')]`).click()
        // })

        /* Assessment Url */
        cy.xpath(this.assessment_url_xpath).type(`https://www.abcd.com.np`)

        /*Assessment Deadline Date */
        cy.xpath(this.deadline_date_xpath).click()
        cy.get(`.react-datepicker__month-container`).within(() => {
            cy.get(`.react-datepicker__year-select`).select('2024')
            cy.get(`.react-datepicker__month-select`).select('9')
            const data = "October 15th"
            cy.xpath(`//div[contains(@aria-label,'${data}')]`).click()
        })

        /* Assessment Deadline Date For Invalid Validation */
        // cy.xpath(this.deadline_date_xpath).click()
        // cy.get(`.react-datepicker__month-container`).within(() => {
        //     cy.get(`.react-datepicker__year-select`).select('2024')
        //     cy.get(`.react-datepicker__month-select`).select('11')
        //     const data = "December 1st"
        //     cy.xpath(`//div[contains(@aria-label,'${data}')]`).click()
        // })

        /*Total Score */
        cy.xpath(this.total_score_xpath).type('90')

        /*Access Type */
        cy.xpath(this.access_type_dropdown_xpath).click()
        cy.get(` div[class=' css-dec5yr-option']:nth-child(1)`).click()

        /* Tag */
        cy.get(this.tag_textbox).type('QA');
        cy.intercept('GET', '/api/tags?search=*').as('tagLists');
        cy.wait('@tagLists')
        cy.get(this.tag_textbox).type('{enter}');

        /*Submit New Job Form*/
        cy.get(this.create_new_job_button).click()
    }


    verify_creating_job_role_with_valid_data() {
        cy.get(`div[class='Toastify__toast-body']`).should('have.contain', '[Demo] Job role training created successfully.')
    }

    verify_creating_job_role_traning_with_invalid_data() {
        cy.get(`.Toastify__toast-body`).should('have.contain', 'Please review the information filled.')
    }

}