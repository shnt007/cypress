// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('dragAndDrop', (dragSelector, dropSelector) => {
    const dataTransfer = new DataTransfer();

    cy.get(dragSelector)
        .trigger('dragstart', { dataTransfer });

    cy.get(dropSelector)
        .trigger('drop', { dataTransfer });

    cy.get(dragSelector)
        .trigger('dragend', { dataTransfer });
});

// Cypress.Commands.add('getIframe', (iframe) => {
//     return cy.get(iframe)
//         .its('0.contentDocument.body')
//         .should('be.visible')
//         .then(cy.wrap)
// });

import '@4tw/cypress-drag-drop'
import 'cypress-file-upload';

//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress-xpath" />
/// <reference types="cypress-iframe" />