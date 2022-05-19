import { buildDateString, buildTimeString, testTimeEntry } from './time'

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

  describe('buildDateString', () => {
    it('should build a correct MM/DD/YYYY from a js date object', () => {
      const jsDateObject = new Date('2022/05/25')
      const expectedDateString = '05/25/2022'
      expect(buildDateString(jsDateObject)).toEqual(expectedDateString)
    })

    it('should return an empty string for empty dates', () => {
      const jsDateObject = null
      const expectedDateString = ''
      expect(buildDateString(jsDateObject)).toEqual(expectedDateString)
    })
  })

  describe('buildTimeString', () => {
    it('should build a correct HH:mm from a js date object', () => {
      const jsTimeObject = new Date('2022/05/25 16:25:00')
      const expectedTimeString = '16:25'
      expect(buildTimeString(jsTimeObject)).toEqual(expectedTimeString)
    })

    it('should build a correct HH:mm from a js date object', () => {
      const jsTimeObject = new Date('2022/05/25 16:05:00')
      const expectedTimeString = '16:05'
      expect(buildTimeString(jsTimeObject)).toEqual(expectedTimeString)
    })

    it('should build a correct HH:mm from a js date object at o`clock times', () => {
      const jsTimeObject = new Date('2022/05/25 16:00:00')
      const expectedTimeString = '16:00'
      expect(buildTimeString(jsTimeObject)).toEqual(expectedTimeString)
    })

    it('should return an empty string if the ', () => {
      const jsTimeObject = null
      const expectedTimeString = ''
      expect(buildTimeString(jsTimeObject)).toEqual(expectedTimeString)
    })
  })
})
