import { testTimeEntry } from './time'

describe('Time tests', () => {
  describe('testTimeEntry', () => {
    const validEntries = ['12:33', '01:27', '00:00', '23:59']
    const invalidEntries = ['33:59', '24:00', '23:60']

    validEntries.forEach(entry => {
      it(`should return true for entries like ${entry}`, () => {
        expect(testTimeEntry(entry)).toEqual(true)
      })
    })

    invalidEntries.forEach(entry => {
      it(`should return false for entries like ${entry}`, () => {
        expect(testTimeEntry(entry)).toEqual(false)
      })
    })
  })
})
