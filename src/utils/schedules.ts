import { ISchedule } from '../components/consumer/schedules/constants'

export const groupSchedulesByDate = (
  userSchedules: ISchedule[] | undefined
) => {
  let schedulesByDate: any = {}

  userSchedules?.forEach(userSchedule => {
    if (schedulesByDate[userSchedule.date]) {
      schedulesByDate[userSchedule.date].push(userSchedule)
    } else {
      schedulesByDate[userSchedule.date] = [userSchedule]
    }
  })

  return schedulesByDate
}

export const sortSchedulesByDate = (schedulesByDate: any) => {
  let sortedSchedulesByDate = []

  return schedulesByDate
}
