import { job_role_learner } from "../../pages/learner_job_role/job_role_learner"
const job_role = new job_role_learner

describe('Job Role Learner', () => {

    beforeEach(() => {
        job_role.navigate_to_login()
        job_role.login(`subash.gole+newsuperadmin@codingmountain.com`, `@secret@`)
        cy.wait(6000)
    })

    it.only('Verify Row and Colume', () => {
        job_role.verify_no_of_row_and_column()
    });

    it('finding demo', () => {
        job_role.verify_demo_from_the_table()
    });
});
