import React from 'react'
import { groupSchedulesByDate } from '../../utils/schedules'
import { ISchedule } from '../consumer/schedules/constants'
import { useFrontendContext } from './FrontendContext'
import { useNotificationsContext } from './NotificationsContext'

const SCHEDULES_KEY = 'schedules'

export interface ISchedulesContextMethods {
  addSchedule: (schedule: ISchedule) => void
  removeSchedule: (scheduleId: string) => void
  updateSchedule: (schedule: ISchedule) => void
  setScheduleByDate: (schedules: any) => void
}
export interface ISchedulesContextState {
  userSchedules: ISchedule[] | undefined
  scheduleByDate: any
}

export interface ISchedulesContextProviderProps {
  methods: ISchedulesContextMethods
  state: ISchedulesContextState
}

const SchedulesContext =
  React.createContext<ISchedulesContextProviderProps | null>(null)

export const useSchedulesContext = () => {
  const value = React.useContext(SchedulesContext)

  if (!value) {
    throw new Error('useSchedulesContext must be used within SchedulesContext')
  }

  return value
}

const SchedulesContextProvider = (props: { children: React.ReactElement }) => {
  const frontendContext = useFrontendContext()
  const notificationsContext = useNotificationsContext()
  const _userId = frontendContext.state.userId

  const [userSchedules, setUserSchedules] = React.useState<
    ISchedule[] | undefined
  >()
  const [scheduleByDate, setScheduleByDate] = React.useState<any>([])

  React.useEffect(() => {
    const schedules = localStorage.getItem(SCHEDULES_KEY)
    frontendContext.methods.setIsLoading(true)

    if (_userId && schedules) {
      const _userSchedules = JSON.parse(schedules)[_userId]
      setUserSchedules(_userSchedules ?? [])
      frontendContext.methods.setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_userId])

  React.useEffect(() => {
    // Mocks DB query
    if (userSchedules) {
      localStorage.setItem(
        SCHEDULES_KEY,
        JSON.stringify({ [_userId]: userSchedules })
      )
    }

    // Allows for a simpler object to keep the schedules and the sorting is done on a single place.
    setScheduleByDate(groupSchedulesByDate(userSchedules))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSchedules])

  const addSchedule = (newSchedule: ISchedule) => {
    const _newSchedule = {
      ...newSchedule,
      id: `${new Date().getTime()}`
    }

    const _userSchedules = [...(userSchedules ?? []), { ..._newSchedule }]

    setUserSchedules(_userSchedules)
    notificationsContext.methods.setGeneralNotification({
      type: 'success',
      message: 'Schedule added correctly. Click on `My Schedules` to see it.'
    })

    // TODO: error handler when we have a proper API
  }

  const removeSchedule = (scheduleId: string) => {
    setUserSchedules(userSchedules)
    notificationsContext.methods.setGeneralNotification({
      type: 'error',
      message: 'Schedule removed correctly.'
    })
  }

  const updateSchedule = (schedule: ISchedule) => {
    setUserSchedules(userSchedules)
    notificationsContext.methods.setGeneralNotification({
      type: 'info',
      message: 'Schedule updated correctly.'
    })
  }

  const exportedValues: ISchedulesContextProviderProps = {
    methods: {
      addSchedule,
      removeSchedule,
      updateSchedule,
      setScheduleByDate
    },
    state: {
      userSchedules,
      scheduleByDate
    }
  }

  return (
    <SchedulesContext.Provider value={exportedValues}>
      {props.children}
    </SchedulesContext.Provider>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Context: SchedulesContext,
  Consumer: SchedulesContext.Consumer,
  Provider: SchedulesContextProvider
}
