import React from 'react'
import { useFrontendContext } from '../../../contexts/FrontendContext'
import { ISchedule } from '../constants'
import ScheduleInfo from '../info'

import styles from './DailySchedule.module.scss'

const DailyEntry = ({ schedule }: { schedule: ISchedule }) => {
  const frontendContext = useFrontendContext()
  const startPosition = parseInt(schedule.startTime) * 60
  const height =
    (parseInt(schedule.endTime) - parseInt(schedule.startTime)) * 60

  const handleOpenMenu = () => {
    frontendContext.methods.setModalContent({
      content: <ScheduleInfo schedule={schedule} />
    })
    frontendContext.methods.setIsModalOpen(true)
  }

  let className = `${styles.dailyEntry}`

  if (schedule.status === 'cancelled') {
    className = `${className} ${styles.dailyEntryCancelled}`
  }

  return (
    <button
      className={className}
      style={{
        top: `${startPosition}px`,
        height: `${height}px`
      }}
      onClick={handleOpenMenu}
      data-cy={`daily-entry-${schedule.activityName}`}
    >
      {schedule.activityName}
    </button>
  )
}

export default DailyEntry
