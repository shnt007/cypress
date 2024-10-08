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
    
}


}



