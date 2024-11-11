import { tests } from "../../herokuapp/pages/test";
const test = new tests

describe('The Internet Herokuapp', () => {
    beforeEach(() => {
        cy.viewport(1366, 768)
        test.navigate_to_homepage()
    })

    it('Test 1: A/B testing Title Validation ', () => {
        test.ab_testing_title_validation()
    });

    it('Test 2: Add/Remove Elements Validation', () => {
        test.add_remove_element_validation()
    })

    it('Test 3: Basic Auth Validation', () => {
        test.basic_auth_validation()
    });

    it('Test 4: Image Broken Validation ', () => {
        test.broken_image_validation()
    })

    it('Test 5: Checkboxes validations', () => {
        test.checkboxes_validation()
    })

    it('Test 6: Context Menu Rightclick Validation', () => {
        test.context_menu_validation()
    });

    it('Test 7: Dissapering Element Validation on Every Refresh', () => {
        test.dissapering_element_validation()
    });

    it('Test 8: Drag and Drop Validation', () => {
        test.drag_and_drop_validation()
    });

    it('Test 9: Dropdown Validation', () => {
        test.dropdown_validation()
    })

    it('Test 10: Dynamic Content Validation', () => {
        test.dynamic_content_validation()
    });

    it('Test 11: Dynamic Controls Validation', () => {
        test.dynamic_controls_validation()
    });

    it('Test 12: Dynamic Loading Validation', () => {
        test.dynamic_loading_validation()
    });

    it('Test 13: Entry Ad Validation', () => {
        test.entry_ad_validation()
    });

    it(`Test 14: Exit Intent Validation`, () => {
        test.exit_intent_validation()
    })

    it('`Test 15: File Download Validation', () => {
        test.file_download_validation()
    });

    it('Test 16: File Upload Validation', () => {
        test.file_upload_valiadation()
    });

    xit('Test 17: Floating Menu Validation', () => {
        test.floating_menu_validation()
    });

    it('Test 18: Forget Password Validation', () => {
        test.forget_password_validation()
    });

    it('Test 19: Form Authentication Validation', () => {
        test.form_authentication_validation()
    });

    it('Test 20: Nested Frames Validation', () => {
        test.nested_frames_validation()
    });

    it('Test 21: Iframe Validaton', () => {
        test.iframe_validation()
    });

    it('Test 22: Geolocation Validation', () => {
        test.geolocation_validation()
    });

    xit('Test 23: Horizontal Slider Validation', () => {
        test.horizontal_slider_validation()
    });

    it('Test 24: Hovers Validation', () => {
        test.hovers_validation()
    });

    it('Test 25: Infinite Scroll', () => {
        test.infinite_scroll()
    });

    it(`Test 26: Inputs Validation`, () => {
        test.inputs_validation()
    })

    it('Test 27: Javascripts Alert Validation', () => {
        test.alert_validation()
    });

    it('Test 28: Multiple Window Handling', () => {
        test.window_validation()
    });

    it(`Test 29: Notification Message Handling`, () => {
        test.notification_message()
    })

    it(`Test 30: Status Codes Validation`, () => {
        test.status_code_validaiton()
    })
});
