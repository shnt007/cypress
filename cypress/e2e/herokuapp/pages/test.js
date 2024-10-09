export class tests {
    base_url = `https://the-internet.herokuapp.com/`

    //a/b testing poge
    ab_testing_link = `a[href='/abtest']`
    ab_testing_title = `div[class='example']>h3`

    //Add remove element page
    add_remove_element_link = `a[href='/add_remove_elements/']`
    add_btn = `button[onclick= 'addElement()']`
    delete_btn = `button[class="added-manually"]`

    // basic auth page
    basic_auth = `a[href='/basic_auth']`

    // broken image page
    broken_img = `a[href="/broken_images"]`

    // checkboxes page
    checkboxes_link = `a[href="/checkboxes"]`
    first_checkbox_xpath = ` //input[@type='checkbox'][1]`
    second_checkbox_xpath = `//input[@type='checkbox'][2]`

    // content menu page
    context_menu_link = `a[href='/context_menu']`
    box = `#hot-spot`

    // dissapering elements page
    dissapering_element_link = `a[href='/disappearing_elements']`
    gallery_element = `a[href='/gallery/']`

    // drag and drop page
    drag_n_drop_link = `a[href="/drag_and_drop"]`
    box_A = `#column-a`
    box_B = `#column-b`

    // dropdown page
    dropdown_link = `a[href="/dropdown"]`
    dropdown_bar = `select[id= 'dropdown']`

    // dynamic content page
    dynamic_content_link = `a[href="/dynamic_content"]`
    content_row = `div[class='large-10 columns large-centered'] >div[class='row']`

    // dynamic control page
    dynamic_control_link = `a[href = "/dynamic_controls"]`
    dynamic_checkbox = `input[type= 'checkbox']`
    btn_remove = `button[onclick="swapCheckbox()"]`
    msg_element = `p[id='message']`
    btn_add = `button[onclick="swapCheckbox()"]`
    dynaminc_textbar = `input[type= 'text']`
    btn_enable = `button[onclick="swapInput()"]`
    btn_disable = `button[onclick="swapInput()"]`

    // dynamic loading page
    dynamic_loading_link = `a[href= "/dynamic_loading"]`
    hidden_element_page = `a[href="/dynamic_loading/1"]`
    rendered_after = `a[href="/dynamic_loading/2"]`

    btn_start = `div[id='start']>button`
    hidden_text = `div[id='finish']`
    rendered_text = `div[id='finish']`

    // entry ad page 
    entry_ad_link = `a[href= "/entry_ad"]`
    modal_win = `div[class="modal-title"]`
    close_text = `div[class="modal-footer"]`
    click_here = `a[id="restart-ad"]`

    // exit intent page
    exit_intent_link = `a[href="/exit_intent"]`

    // file download page
    file_download_link = `a[href="/download"]`

    //  file upload page
    file_upload_link = `a[href="/upload"]`
    choose_file = `#file-upload`
    btn_upload = `#file-submit`

    //floating menu page
    floating_menu_link = `a[href='/floating_menu']`

    // forget password page
    forget_pass_link = `a[href='/forgot_password']`
    email_textbox = `#email`
    btn_retrive = `#form_submit`

    // form authentication page
    form_auth_link = `a[href='/login']`
    username_txtbox = `#username`
    password_txtbox = `#password`
    btn_login = `button[type="submit"]`
    btn_logout = `a[href="/logout"]`

    // nested frames page
    frames_link = `a[href="/frames"]`
    nested_frames_link = `a[href="/nested_frames"]`
    top_frames = `frame[src="/frame_top"]`
    left_frames = `frame[name="frame-left"]`
    middle_frames = `frame[name="frame-middle"]`
    right_frames = `frame[name="frame-right"]`
    bottom_frames = `frame[name="frame-bottom"]`

    // iframe page
    iframe_link = `a[href="/iframe"]`
    iframe_id = `#mce_0_ifr`

    // Geolocation page
    btn_where_am_i = `button[onclick="getLocation()"]`

    // hover page
    img1_details = `(//div[@class="figcaption"])[1]`
    img2_details = `(//div[@class="figcaption"])[2]`
    img3_details = `(//div[@class="figcaption"])[3]`
    hover_img1 = `(//div[@class='figure'])[1]`
    hover_img2 = `(//div[@class='figure'])[2]`
    hover_img3 = `(//div[@class='figure'])[3]`

    // infinite_scroll page
    paragraph_element = `.jscroll-added`

    // alert page
    btn_jsAlert = `button[onclick="jsAlert()"]`
    btn_jsConfirm = `button[onclick="jsConfirm()"]`
    btn_jsPromopt = `button[onclick="jsPrompt()"]`

    // New window handling page
    new_tab_link = `a[href="/windows/new"]`

    // notification message page
    click_here_link = `a[href="/notification_message"]`

    // redirection link
    status_code_200 = `a[href="status_codes/200"]`
    status_code_301 = `a[href="status_codes/301"]`
    status_code_404 = `a[href="status_codes/404"]`
    status_code_500 = `a[href="status_codes/500"]`

    navigate_to_homepage() {
        cy.visit(this.base_url)
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    }

    ab_testing_title_validation() {
        cy.get(this.ab_testing_link).click()
        cy.get(this.ab_testing_title).should(`have.contain`, `A/B Test Control`)
    }

    add_remove_element_validation() {
        cy.get(this.add_remove_element_link).click()
        cy.get(this.add_btn).click()
        cy.get(this.delete_btn).should(`be.visible`)
        cy.get(this.delete_btn).click()
        cy.get(this.delete_btn).should(`not.exist`)
    }

    basic_auth_validation() {
        // cy.get(this.basic_auth).click()
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.contains('Congratulations').should('be.visible');
    }

    broken_image_validation() {
        cy.get(this.broken_img).click()
        let isAnyImageBroken = false; // Flag to track if any image is broken

        // Target images within the "example" div
        cy.get('.example img').each(($img) => {
            // Wait for the image to load and check the naturalWidth
            cy.wrap($img).should('be.visible').and('have.attr', 'src').then(($img) => {
                // Wait for the 'load' event to ensure the image has fully loaded
                // Check if naturalWidth is 0
                if ($img[0].naturalWidth === 0) {
                    isAnyImageBroken = true; // Set the flag to true if the image is broken
                }
            });
        }).then(() => {
            // After checking all images, assert if any image was broken
            expect(isAnyImageBroken, "Image is broken").to.be.false; // If any image is broken, this assertion will fail
        });
    }

    checkboxes_validation() {
        cy.get(this.checkboxes_link).click()
        cy.xpath(this.first_checkbox_xpath).check().should(`be.checked`)
        cy.xpath(this.second_checkbox_xpath).uncheck().should(`be.not.checked`)
    }

    context_menu_validation() {
        cy.get(this.context_menu_link).click()
        cy.get(this.box).rightclick()
        cy.on(`window:alert`, (t) => {
            expect(t).to.contain(`You selected a context menu`)
        })
    }

    dissapering_element_validation() {
        cy.get(this.dissapering_element_link).click()
        cy.get(this.gallery_element)
            .should(`be.visible`)

        cy.reload()
        cy.get(this.gallery_element).should(`not.exist`)

    }

    drag_and_drop_validation() {

        cy.get(this.drag_n_drop_link).click()
        cy.dragAndDrop(this.box_A, this.box_B)
        // cy.get(this.box_A).drag(this.box_B)
        cy.get(this.box_A).should('contain.text', 'B');
        cy.get(this.box_B).should('contain.text', 'A');

        cy.wait(4000)
        cy.dragAndDrop(this.box_B, this.box_A)
        cy.get(this.box_A).should('contain.text', 'A');
        cy.get(this.box_B).should('contain.text', 'B');

    }

    dropdown_validation() {
        cy.get(this.dropdown_link).click()
        cy.get(this.dropdown_bar).select(1)
        cy.wait(4000)
        cy.get(this.dropdown_bar).select(2)

    }

    dynamic_content_validation() {
        cy.get(this.dynamic_content_link).click()
        cy.get(this.content_row).should(`have.length`, 3)
        // cy.get(':nth-child(7) > #content').should('have.length', 1);

        // Ensure content is dynamic and not empty
        cy.get(this.content_row).each(($row) => {
            cy.wrap($row).find('img').should('be.visible'); // Ensure image is visible
            cy.wrap($row).find('div.large-10').should('not.be.empty'); // Text is not empty
        });

        // Verify content changes after a page reload
        cy.get(this.content_row).first().find('div.large-10').invoke('text').then((initialText) => {
            cy.reload(); // Reload the page

            cy.get(this.content_row).first().find('div.large-10').invoke('text').should((newText) => {
                expect(newText).not.to.eq(initialText); // Content should be different
            });
        });
    }

    dynamic_controls_validation() {
        // Add/ remove checkbox
        cy.get(this.dynamic_control_link).click()
        cy.get(this.dynamic_checkbox).check().should(`be.checked`)
        cy.get(this.btn_remove).click()
        cy.get(this.dynamic_checkbox, { timeout: 5000 }).should(`not.exist`)
        cy.get(this.msg_element).should(`have.contain`, `It's gone!`)

        cy.get(this.btn_add).click()
        cy.get(this.dynamic_checkbox).check().should(`be.checked`)
        cy.get(this.msg_element).should(`have.contain`, `It's back!`)

        // Enable / disable textbar
        cy.get(this.dynaminc_textbar).should(`not.be.enabled`)
        cy.get(this.btn_enable).click()
        cy.get(this.dynaminc_textbar).type(`abcdc`)
        cy.get(this.msg_element).should(`have.contain`, `It's enable`)
        cy.get(this.btn_disable).click()
        cy.get(this.msg_element).should(`have.contain`, `It's disable`)


    }

    dynamic_loading_validation() {
        cy.get(this.dynamic_loading_link).click()
        cy.get(this.hidden_element_page).click()
        cy.get(this.btn_start).click()
        cy.get(this.hidden_text).should(`have.contain`, `Hello World`)

        cy.go('back')

        cy.get(this.rendered_after).click()
        cy.get(this.btn_start).click()
        cy.get(this.rendered_text, { timeout: 5000 }).should(`have.contain`, `Hello World`)
    }

    entry_ad_validation() {
        cy.get(this.entry_ad_link).click()
        cy.get(this.modal_win).should(`have.contain`, `This is a modal window`)
        cy.get(this.close_text).click()
        cy.get(this.click_here).click()
        cy.get(this.modal_win).should(`have.contain`, `This is a modal window`)
        cy.get(this.close_text).click()
    }

    exit_intent_validation() {
        cy.get(this.exit_intent_link).click()
        cy.get(`body`).trigger('mouseout', { clientY: 0 })
        cy.get(this.modal_win).should(`have.contain`, `This is a modal window`)
    }

    file_download_validation() {
        cy.get(this.file_download_link).click()
        cy.get(`a[href="download/42a12624-eab9-4ed6-a4b7-594ce82a7b61.jpeg"]`)
            .contains('42a12624-eab9-4ed6-a4b7-594ce82a7b61.jpeg').then((link) => {
                const fileUrl = link.prop('href');

                cy.request({
                    url: fileUrl,
                    encoding: 'binary',  // Use binary encoding for file downloads
                }).then((response) => {
                    expect(response.status).to.equal(200);

                });
            });


    }

    file_upload_valiadation() {
        cy.get(this.file_upload_link).click()
        cy.get(this.choose_file).selectFile(`D:\\cypress\\cypress\\downloads\\1.jpeg`)
        cy.get('#file-submit').click()
        cy.get(`div[class="example"]`).should(`have.contain`, `File Uploaded!`)
        cy.wait(3000)
        cy.go(`back`)
        cy.get('#file-submit').click()
        cy.get(`#drag-drop-upload`).selectFile(`D:\\cypress\\cypress\\downloads\\1.jpeg`, { action: 'drag-drop', })
        cy.get(`div[class="example"]`).should(`have.contain`, `File Uploaded!`)
    }

    floating_menu_validation() {
        cy.get(this.floating_menu_link).click()

    }

    forget_password_validation() {
        cy.get(this.forget_pass_link).click()
        cy.get(this.email_textbox).type(`abcd@email.com`)
        cy.get(this.btn_retrive).click()
    }

    form_authentication_validation() {
        cy.get(this.form_auth_link).click()
        cy.get(this.username_txtbox).type(`tomsmith`)
        cy.get(this.password_txtbox).type(`SuperSecretPassword!`)
        cy.get(this.btn_login).click()
        cy.get(`#flash-messages`).should(`have.contain`, `You logged into a secure area!`)
        cy.get(this.btn_logout).click()
    }

    nested_frames_validation() {
        cy.get(this.frames_link).click()
        cy.get(this.nested_frames_link).click()

        cy.get(this.top_frames).then($topFrame => {
            const topBody = $topFrame[0].contentDocument; // Access the document of the top frame
            cy.wrap(topBody).within(() => {

                // Access the left frame inside the top frame
                cy.get(this.left_frames).then($leftFrame => {
                    const leftBody = $leftFrame[0].contentDocument; // Access the document of the left frame
                    cy.wrap(leftBody.body).should('contain.text', 'LEFT');
                });

                // Access the middle frame inside the top frame
                cy.get(this.middle_frames).then($middleFrame => {
                    const middleBody = $middleFrame[0].contentDocument; // Access the document of the middle frame
                    cy.wrap(middleBody.body).should('contain.text', 'MIDDLE');
                });

                // Access the right frame inside the top frame
                cy.get(this.right_frames).then($rightFrame => {
                    const rightBody = $rightFrame[0].contentDocument; // Access the document of the right frame
                    cy.wrap(rightBody.body).should('contain.text', 'RIGHT');
                });

            });
        });

        // Access the bottom frame directly
        cy.get(this.bottom_frames).then($bottomFrame => {
            const bottomBody = $bottomFrame[0].contentDocument; // Access the document of the bottom frame
            cy.wrap(bottomBody.body).should('contain.text', 'BOTTOM');

        })
    }

    iframe_validation() {
        cy.get(this.frames_link).click()
        cy.get(this.iframe_link).click()

        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

        iframe.clear().type('hello {ctl+a}')
        cy.get(`button[title='Bold']`).click()
    }

    geolocation_validation() {
        cy.contains(`Geolocation`).click()
        cy.get(`#demo`).should(`contain.text`, `Click the button to get your current latitude and longitude`)
        cy.get(this.btn_where_am_i).click()
        cy.get(`#demo`).should(`contain.text`, `Latitude`)
        cy.get(`#demo`).should(`contain.text`, `Longitude`)
    }

    horizontal_slider_validation() {
        cy.contains('Horizontal Slider').click()
        // cy.get(`input[type="range"]`).as(`slider`).click()
        // cy.get(`@slider`).type(`{rightarrow}{rightarrow}{rightarrow}{rightarrow}`)
        // cy.get(`#range`).invoke(`text`).then((slidervalue) => {
        //     expect(parseFloat(slidervalue)).to.be.greaterThan(0)
        // })

        cy.get('input[type="range"]')
            .click() // Focus on the slider
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 500 }) // Simulate dragging to the right
            .trigger('mouseup');

        // Validate the slider value is greater than 0
        cy.get('#range').should('not.have.text', '0');
    }

    hovers_validation() {
        cy.contains('Hovers').click()
        cy.xpath(this.img1_details).should(`not.be.visible`)
        cy.xpath(this.hover_img1).realHover()
        cy.xpath(this.img1_details).should(`have.contain`, `name`)
        cy.wait(2000)

        cy.xpath(this.img2_details).should(`not.be.visible`)
        cy.xpath(this.hover_img2).realHover()
        cy.xpath(this.img2_details).should(`have.contain`, `name`)
        cy.wait(2000)
        cy.xpath(this.img3_details).should(`not.be.visible`)
        cy.xpath(this.hover_img3).realHover()
        cy.xpath(this.img3_details).should(`have.contain`, `name`)
    }

    infinite_scroll() {
        cy.contains(`Infinite Scroll`).click()
        for (let i = 0; i < 5; i++) {
            cy.scrollTo(`bottom`)
            cy.wait(1000)
            cy.get(this.paragraph_element).should(`exist`)
        }
    }

    inputs_validation() {
        cy.contains(`Inputs`).click()
        cy.get(`input[type="number"]`).type(`1234`).should(`have.value`, `1234`)
        cy.get(`input[type="number"]`).type('{uparrow}').should(`have.value`, '1235')
    }

    alert_validation() {
        cy.contains(`JavaScript Alerts`).click()

        // Simple Alert with text and OK button
        cy.get(this.btn_jsAlert).click()
        cy.on(`Window:alert`, (t) => {
            expect(t).to.contain('I am a JS Alert')
        })
        cy.get(`#result`).should(`have.contain`, `You successfully clicked an alert`)
        cy.go("back")

        // Confirmation ALert with text, OK and Cancel button
        cy.go("forward")
        cy.get(this.btn_jsConfirm).click()
        cy.on('Window:confirm', (t) => {
            expect(t).to.contain('I am a JS Confirm')
        })
        cy.get(`#result`).should(`have.contain`, `You clicked: Ok`)
        cy.go("back")

        // Prompt Alert having textbox for input
        cy.go("forward")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Welcome')
        })
        cy.get(this.btn_jsPromopt).click()
        cy.get(`#result`).should(`have.contain`, `You entered`)

    }

    window_validation() {
        cy.contains(`Multiple Windows`).click()
        cy.get(this.new_tab_link).invoke('removeAttr', 'target').click()
        cy.get(`h3`).should(`have.contain`, 'New Window')
    }

    notification_message() {
        cy.contains(`Notification Messages`).click()
        cy.get(`#flash`).should(`have.contain`, ` Action`)
        cy.get(this.click_here_link).click()
        cy.get(`#flash`).should(`have.contain`, ` Action`)
    }

    redirect_link() {
        cy.contains(`Redirect Link`).click()
        cy.get(`.example`).should(`have.contain`, `Redirection`)
        cy.get(`#redirect`).click()
        cy.get(`.example`).should(`have.contain`, `Status Code`)

    }

    status_code_validaiton() {
        cy.contains(`Status Codes`).click()
        cy.get(`.example`).should(`have.contain`, `Status Codes`)

        cy.get(this.status_code_200).click()
        cy.get(`.example`).should(`have.contain`, `200 status code`)
        cy.contains(`here`).click()

        cy.get(this.status_code_301).click()
        cy.get(`.example`).should(`have.contain`, `301 status code`)
        cy.contains(`here`).click()

        cy.get(this.status_code_500).click()
        cy.get(`.example`).should(`have.contain`, `500 status code`)
    }

}