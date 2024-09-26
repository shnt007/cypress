import { job_role_learner } from "../../pages/learner_job_role/job_role_learner"
const job_role = new job_role_learner

describe('Job Role Learner', () => {

    beforeEach(() => {
        job_role.navigate_to_login()
        job_role.login(`subash.gole+learner1@codingmountain.com`, `@secret@`)
    })

    it('Verify Row and Colume', () => {

        job_role.verify_no_of_row_and_column()
    });
});
