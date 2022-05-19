import React from 'react'
import { ISchedule } from '../constants'

import styles from './DailySchedule.module.scss'

const DailyEntry = ({ schedule }: { schedule: ISchedule }) => {
  const startPosition = parseInt(schedule.startTime) * 60
  const height =
    (parseInt(schedule.endTime) - parseInt(schedule.startTime)) * 60

  const handleOpenMenu = () => {}

  return (
    <button
      className={styles.dailyEntry}
      style={{
        top: `${startPosition}px`,
        height: `${height}px`
      }}
      onClick={handleOpenMenu}
    >
      {schedule.activityName}
    </button>
  )
}

export default DailyEntry
