xdescribe('Intercept using Dummyapi', () => {
    it('Simple API intercept / SPY API request', () => {
        cy.visit(`https://dummyapi.io/explorer`)
        cy.intercept({
            path: `/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10`
        }).as('dummy')
        cy.get('.flex > :nth-child(5)').click()
        cy.wait(`@dummy`).then(intercept => {
            expect(intercept.response.body.limit).eq(10)
        })
    });

    it('Simple API intercept / SPY API request', () => {
        cy.visit(`https://dummyapi.io/explorer`)
        cy.intercept('GET', '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',
            { limit: 20, Name: 'Shnt' })
            .as('dummy')
        cy.get('.flex > :nth-child(5)').click()
        cy.wait(`@dummy`).then(intercept => {
            expect(intercept.response.body.limit).eq(20)
            expect(intercept.response.body.Name).eq('Shnt')
        })
    });
});

describe('Intercept example', () => {
    it('Intercept ', () => {
        cy.visit(`https://jsonplaceholder.typicode.com/`);
        cy.xpath(`(//a[@href='/posts'])[1]`).click();

        cy.intercept({
            method: 'GET',
            url: '*/posts'
        }).as('post');
        cy.wait(`@post`).then(intercept => {
            cy.log(JSON.stringify(intercept))
            // console.log(JSON.stringify(inter))
        })





    })

    it('Mock Test', () => {
        // cy.visit(`https://jsonplaceholder.typicode.com/`).as('post');
        // cy.wait('@post')
        // cy.intercept('GET', '/posts', { totalpost: 5 })
        // cy.xpath(`(//a[@href='/posts'])[1]`).click()
        // // cy.wait('@post')
    })
})