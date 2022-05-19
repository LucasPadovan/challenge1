import React from 'react'
import { useFrontendContext } from '../../../contexts/FrontendContext'
import { useSchedulesContext } from '../../../contexts/SchedulesContext'
import Button from '../../../shared/button'
import { ISchedule } from '../constants'
import SchedulesForm from '../form'

import styles from './ScheduleInfo.module.scss'

const ScheduleInfo = ({ schedule }: { schedule: ISchedule }) => {
  const schedulesContext = useSchedulesContext()
  const frontendContext = useFrontendContext()
  const [isEditing, setIsEditing] = React.useState<boolean>(false)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this activity?')) {
      schedulesContext.methods.removeSchedule(schedule.id ?? '')
      frontendContext.methods.setIsModalOpen(false)

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    }
  }

  let content = (
    <div className={styles.scheduleInfoContainer}>
      <h1 className={styles.scheduleInfoRow}>{schedule.activityName}</h1>
      <p className={styles.scheduleInfoRow}>
        Date: <strong>{schedule.date}</strong>
      </p>
      <p className={styles.scheduleInfoRow}>
        From: <strong>{schedule.startTime}</strong> - To:{' '}
        <strong>{schedule.endTime}</strong>
      </p>
      <p className={styles.scheduleInfoRow}>
        Max assistants: <strong>{schedule.numMaxGuests}</strong>
      </p>

      <div className={styles.scheduleInfoRow}>
        <Button style="primary" onClick={handleEdit} title="Edit" />
        <Button style="secondary" onClick={handleDelete} title="Delete" />
      </div>
    </div>
  )

  if (isEditing) {
    content = <SchedulesForm scheduleValues={schedule} />
  }

  return content
}

export default ScheduleInfo
