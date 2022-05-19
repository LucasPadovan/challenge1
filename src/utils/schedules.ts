import { ISchedule } from '../components/consumer/schedules/constants'

export interface IGroupedSchedule {
  key: string
  schedules: ISchedule[]
}

export const groupSchedulesByDate = (
  userSchedules: ISchedule[] | undefined
) => {
  let schedulesByDate: IGroupedSchedule[] = []

  userSchedules?.forEach(userSchedule => {
    let scheduleAtThisDate = schedulesByDate.find(
      scheduleByDate => scheduleByDate.key === userSchedule.date
    )

    if (scheduleAtThisDate) {
      scheduleAtThisDate.schedules.push(userSchedule)
    } else {
      scheduleAtThisDate = { key: userSchedule.date, schedules: [userSchedule] }
      schedulesByDate.push(scheduleAtThisDate)
    }
  })

  return schedulesByDate
}

export const sortSchedulesByDate = (userSchedules: ISchedule[] | undefined) => {
  const _groupedSchedules = groupSchedulesByDate(userSchedules)

  // This mutates the array
  _groupedSchedules.sort((firstScheduleGroup, secondScheduleGroup) => {
    const firstKey = new Date(firstScheduleGroup.key)
    const secondKey = new Date(secondScheduleGroup.key)
    // Compare the 2 dates
    if (firstKey < secondKey) return -1
    if (firstKey > secondKey) return 1
    return 0
  })

  return _groupedSchedules
}
