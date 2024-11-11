import { job_role_training } from "../../pages/job_role_traning/job_role"
const training = new job_role_training

describe('Job Role Training', () => {
    beforeEach(() => {
        cy.viewport(1366, 768)
        training.navigate_to_login_page()
        training.login('subash.gole+newsuperadmin@codingmountain.com', '@secret@')
        training.navigate_to_job_role_traning_page()
        training.verify_job_role_page_title()
    })


    it('Test 1: Verify creating training with valid data ', () => {
        training.create_job_role_training()
        training.verify_creating_job_role_with_valid_data()
    });

    xit('Test 2: Verify creating training with invalid data', () => {
        training.create_job_role_training()
        training.verify_creating_job_role_traning_with_invalid_data()
        cy.screenshot()
    });
});
