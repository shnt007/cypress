before(function () {
    cy.fixture('example.json').as('test_data')
})
it('Fixture testing', function () {
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })
    cy.log(this.test_data.name)
});