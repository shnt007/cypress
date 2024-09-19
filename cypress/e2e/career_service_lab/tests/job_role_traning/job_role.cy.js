import { job_role_traning } from "../../pages/job_role_traning/job_role"
const traning = new job_role_traning

describe('Job Role Training', () => {
    beforeEach(() => {

        traning.navigate_to_login_page()
        traning.login('subash.gole+labadmin1@codingmountain.com', '@secret@')
        traning.navigate_to_job_role_traning_page()
        traning.verify_job_role_page_title()
    })


    it('Test 1: Verify creating traning with valid data ', () => {
        traning.verify_creating_job_role_training_with_valid_data()
    });

});
