import React from 'react'
import { useSchedulesContext } from '../../../contexts/SchedulesContext'
import Button from '../../../shared/button'
import { ISchedule } from '../constants'
import SchedulesForm from '../form'

import styles from './ScheduleInfo.module.scss'

const ScheduleInfo = ({ schedule }: { schedule: ISchedule }) => {
  const schedulesContext = useSchedulesContext()
  const [isEditing, setIsEditing] = React.useState<boolean>(false)

  let content = (
    <div className={styles.scheduleInfoContainer}>
      <h1 className={styles.scheduleInfoRow}>{schedule.activityName}</h1>
      <p className={styles.scheduleInfoRow}>Date:{schedule.date}</p>
      <p className={styles.scheduleInfoRow}>
        From: {schedule.startTime} - To: {schedule.endTime}
      </p>
      <p className={styles.scheduleInfoRow}>
        Max assistants: {schedule.numMaxGuests}
      </p>

      <div className={styles.scheduleInfoRow}>
        <Button
          style="primary"
          onClick={() => {
            setIsEditing(true)
          }}
          title="Edit"
        />
        <Button
          style="secondary"
          onClick={() => {
            // schedulesContext.methods.deleteSchedule()
          }}
          title="Delete"
        />
      </div>
    </div>
  )

  if (isEditing) {
    content = <SchedulesForm scheduleValues={schedule} />
  }

  return content
}

export default ScheduleInfo
