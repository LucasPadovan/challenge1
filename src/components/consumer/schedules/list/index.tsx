import React from 'react'
import { useSchedulesContext } from '../../../contexts/SchedulesContext'
import { ISchedule } from '../constants'

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
    <div>
      {schedulesByDate.map((schedule: ISchedule) => {
        return <div key={schedule.id}>{schedule.activityName}</div>
      })}
    </div>
  )
}

export default SchedulesList
