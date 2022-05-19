export interface ISchedule {
  activityName: string
  date: string
  startTime: string
  endTime: string
  numMaxGuests: number
  id?: string
  status?: 'cancelled' | 'filled'
}
