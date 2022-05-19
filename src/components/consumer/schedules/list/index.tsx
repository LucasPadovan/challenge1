import React from 'react'
import { IGroupedSchedule } from '../../../../utils/schedules'
import { useSchedulesContext } from '../../../contexts/SchedulesContext'
import DailySchedule from '../daily'

import styles from './SchedulesList.module.scss'

const SchedulesList = () => {
  const schedulesContext = useSchedulesContext()
  const schedulesByDate = schedulesContext.state.scheduleByDate
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <div>Generating your schedule...</div>
  }

  return (
    <div className={styles.calendarListContainer}>
      <div className={styles.calendarList}>
        {schedulesByDate.map(({ key, schedules }: IGroupedSchedule) => {
          return (
            <div key={key}>
              <DailySchedule day={key} schedulesForThisDay={schedules} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SchedulesList
