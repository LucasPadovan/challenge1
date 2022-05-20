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
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('customWait', time => {
  const isDev =
    Cypress.env().environment === 'dev' ||
    Cypress.env().environment === 'localhost'
  const timeMultiplier = isDev ? 2 : 1

  cy.wait(time * timeMultiplier)
})

Cypress.Commands.add('waitNavigation', (route, time = 6000) => {
  const isDev =
    Cypress.env().environment === 'dev' ||
    Cypress.env().environment === 'localhost'
  const timeMultiplier = isDev ? 2 : 1

  // We cannot wait for the page using intercept due to nextjs router Link not triggering a new request, timeout as a fallback
  cy.location('pathname', { timeout: time * timeMultiplier }).should(
    'include',
    route
  )
})

Cypress.Commands.add('navigateTo', route => {
  cy.get(`[data-cy="${route}"] a`).first().click()
})

Cypress.Commands.add(
  'fillForm',
  ({ activityName, date, startTime, endTime, numMaxGuests }) => {
    cy.get('input[name="activityName"]').type(activityName)
    cy.get('input[name="date"]').focus()
    cy.get(`.react-datepicker__day.react-datepicker__day--0${date}`)
      .first()
      .click()
    cy.get('input[name="startTime"]').focus()
    cy.get('.react-datepicker__time-list-item').eq(startTime).click()
    cy.get('input[name="endTime"]').focus()
    cy.get('.react-datepicker__time-list-item').eq(endTime).click()
    cy.get('input[name="numMaxGuests"]').type(`${numMaxGuests}`)

    cy.get('form button').click()

    cy.wait(1000)

    cy.get('[data-cy="notification"]').should('exist')
  }
)

Cypress.Commands.add('closeModal', () => {
  cy.get('[data-cy="modal-close"]').click()
})

Cypress.Commands.add('modifyActivity', () => {
  cy.get('[data-cy="daily-entry-edit"]').click()
})

Cypress.Commands.add('enableActivity', () => {
  cy.get('[data-cy="daily-entry-enable"]').click()
})

Cypress.Commands.add('cancelActivity', () => {
  cy.get('[data-cy="daily-entry-cancel"]').click()
})

Cypress.Commands.add('deleteActivity', () => {
  cy.get('[data-cy="daily-entry-delete"]').click()
})
