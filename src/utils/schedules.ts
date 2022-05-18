import { ISchedule } from '../components/consumer/schedules/constants'

export const groupSchedulesByDate = (
  userSchedules: ISchedule[] | undefined
) => {
  let schedulesByDate: any = []

  userSchedules?.forEach(userSchedule => {
    if (schedulesByDate[userSchedule.date]) {
      schedulesByDate[userSchedule.date] = [
        ...schedulesByDate[userSchedule.date],
        userSchedule
      ]
    } else {
      schedulesByDate[userSchedule.date] = [userSchedule]
    }
  })

  return userSchedules
}

export const sortSchedulesByDate = (schedulesByDate: any) => {
  let sortedSchedulesByDate = []

  return schedulesByDate
}
