import { groupSchedulesByDate, sortSchedulesByDate } from './schedules'

import { schedules1 } from '../__fixtures__/schedules'
import { groupedSchedules1 } from '../__fixtures__/groupedSchedules'
import { orderedGroupedSchedules1 } from '../__fixtures__/orderedGroupedSchedules'

describe('Schedules tests', () => {
  describe('groupSchedulesByDate', () => {
    it('Should group the schedules by date', () => {
      expect(groupSchedulesByDate(schedules1)).toEqual(groupedSchedules1)
    })
  })

  describe('sortSchedulesByDate', () => {
    it('Should order the groups the schedules by date', () => {
      expect(sortSchedulesByDate(schedules1)).toEqual(orderedGroupedSchedules1)
    })
  })
})
