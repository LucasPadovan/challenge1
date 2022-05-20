describe('Schedules flow', () => {
  describe('desktop', () => {
    beforeEach(() => {
      cy.viewport(1600, 900)
    })

    it('should add a new schedule', () => {
      cy.visit('/')

      cy.navigateTo('New Activity')

      cy.fillForm({
        activityName: 'Test',
        date: 12,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.navigateTo('My Schedule')

      cy.get('[data-cy="daily-entry-Test"]').should('exist')
    })

    it('should add overlapping schedules and be able to access them', () => {
      cy.visit('/')

      cy.navigateTo('New Activity')

      cy.fillForm({
        activityName: 'Test',
        date: 12,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test2',
        date: 12,
        startTime: 23,
        endTime: 30,
        numMaxGuests: 1
      })

      cy.navigateTo('My Schedule')

      cy.get('[data-cy="daily-entry-Test"]').focus().click()
      cy.closeModal()

      cy.get('[data-cy="daily-entry-Test2"]').focus().click()
      cy.closeModal()
    })

    it('should add multiple schedules and be able to modify them', () => {
      cy.visit('/')

      cy.navigateTo('New Activity')

      cy.fillForm({
        activityName: 'Test2',
        date: 12,
        startTime: 23,
        endTime: 30,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test',
        date: 12,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.navigateTo('My Schedule')

      cy.get('[data-cy="daily-entry-Test"]').focus().click()

      cy.modifyActivity()

      cy.fillForm({
        activityName: 'Hiking',
        date: 12,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.get('[data-cy="daily-entry-TestHiking"]').should('exist')
    })

    it('should add multiple schedules and be able to cancel them', () => {
      cy.visit('/')

      cy.navigateTo('New Activity')

      cy.fillForm({
        activityName: 'Test2',
        date: 12,
        startTime: 23,
        endTime: 30,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test',
        date: 12,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.navigateTo('My Schedule')

      cy.get('[data-cy="daily-entry-Test"]').focus().click()

      cy.cancelActivity()

      cy.get('[data-cy="daily-entry-Test"]').focus().click()

      cy.get('[data-cy="daily-entry-enable"]').should('exist')

      cy.enableActivity()

      cy.get('[data-cy="daily-entry-Test"]').focus().click()

      cy.get('[data-cy="daily-entry-cancel"]').should('exist')
    })

    it('should add multiple schedules and be able to delete them', () => {
      cy.visit('/')

      cy.navigateTo('New Activity')

      cy.fillForm({
        activityName: 'Test2',
        date: 12,
        startTime: 23,
        endTime: 30,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test',
        date: 12,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.navigateTo('My Schedule')

      cy.get('[data-cy="daily-entry-Test"]').focus().click()

      cy.deleteActivity()

      cy.get('[data-cy="daily-entry-Test"]').should('not.exist')
      cy.get('[data-cy="daily-entry-Test2"]').should('exist')
    })

    it('should add multiple schedules without order see them ordered', () => {
      cy.visit('/')

      cy.navigateTo('New Activity')

      cy.fillForm({
        activityName: 'Test',
        date: 14,
        startTime: 23,
        endTime: 30,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test2',
        date: 13,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test3',
        date: 25,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test4',
        date: '02',
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.navigateTo('My Schedule')

      cy.wait(500)

      cy.get('[data-cy="list-day"]').should($list => {
        expect($list, '4 items').to.have.length(4)
        expect($list.eq(0), 'first item').to.contain('02')
        expect($list.eq(1), 'second item').to.contain('13')
        expect($list.eq(2), 'third item').to.contain('14')
        expect($list.eq(3), 'third item').to.contain('25')
      })
    })
  })

  describe('mobile', () => {
    beforeEach(() => {
      cy.viewport(480, 700)
    })

    it('should add a new schedule', () => {
      cy.visit('/')

      cy.navigateTo('New Activity')

      cy.fillForm({
        activityName: 'Test',
        date: 12,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.navigateTo('My Schedule')

      cy.get('[data-cy="daily-entry-Test"]').should('exist')
    })

    it('should add overlapping schedules and be able to access them', () => {
      cy.visit('/')

      cy.navigateTo('New Activity')

      cy.fillForm({
        activityName: 'Test',
        date: 12,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test2',
        date: 12,
        startTime: 23,
        endTime: 30,
        numMaxGuests: 1
      })

      cy.navigateTo('My Schedule')

      cy.get('[data-cy="daily-entry-Test"]').focus().click()
      cy.closeModal()

      cy.get('[data-cy="daily-entry-Test2"]').focus().click()
      cy.closeModal()
    })

    it('should add multiple schedules and be able to modify them', () => {
      cy.visit('/')

      cy.navigateTo('New Activity')

      cy.fillForm({
        activityName: 'Test2',
        date: 12,
        startTime: 23,
        endTime: 30,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test',
        date: 12,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.navigateTo('My Schedule')

      cy.get('[data-cy="daily-entry-Test"]').focus().click()

      cy.modifyActivity()

      cy.fillForm({
        activityName: 'Hiking',
        date: 12,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.get('[data-cy="daily-entry-TestHiking"]').should('exist')
    })

    it('should add multiple schedules and be able to cancel them', () => {
      cy.visit('/')

      cy.navigateTo('New Activity')

      cy.fillForm({
        activityName: 'Test2',
        date: 12,
        startTime: 23,
        endTime: 30,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test',
        date: 12,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.navigateTo('My Schedule')

      cy.get('[data-cy="daily-entry-Test"]').focus().click()

      cy.cancelActivity()

      cy.get('[data-cy="daily-entry-Test"]').focus().click()

      cy.get('[data-cy="daily-entry-enable"]').should('exist')

      cy.enableActivity()

      cy.get('[data-cy="daily-entry-Test"]').focus().click()

      cy.get('[data-cy="daily-entry-cancel"]').should('exist')
    })

    it('should add multiple schedules and be able to delete them', () => {
      cy.visit('/')

      cy.navigateTo('New Activity')

      cy.fillForm({
        activityName: 'Test2',
        date: 12,
        startTime: 23,
        endTime: 30,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test',
        date: 12,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.navigateTo('My Schedule')

      cy.get('[data-cy="daily-entry-Test"]').focus().click()

      cy.deleteActivity()

      cy.get('[data-cy="daily-entry-Test"]').should('not.exist')
      cy.get('[data-cy="daily-entry-Test2"]').should('exist')
    })

    it('should add multiple schedules without order see them ordered', () => {
      cy.visit('/')

      cy.navigateTo('New Activity')

      cy.fillForm({
        activityName: 'Test',
        date: 14,
        startTime: 23,
        endTime: 30,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test2',
        date: 13,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test3',
        date: 25,
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.fillForm({
        activityName: 'Test4',
        date: '02',
        startTime: 22,
        endTime: 28,
        numMaxGuests: 1
      })

      cy.navigateTo('My Schedule')

      cy.wait(500)

      cy.get('[data-cy="list-day"]').should($list => {
        expect($list, '4 items').to.have.length(4)
        expect($list.eq(0), 'first item').to.contain('02')
        expect($list.eq(1), 'second item').to.contain('13')
        expect($list.eq(2), 'third item').to.contain('14')
        expect($list.eq(3), 'third item').to.contain('25')
      })
    })
  })
})
