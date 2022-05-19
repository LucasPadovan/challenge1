import React from 'react'
import { ISchedule } from '../constants'
import DailyEntry from './DailyEntry'

import styles from './DailySchedule.module.scss'

const DailySchedule = ({ day, schedulesForThisDay }: any) => {
  const renderHourlyDivisors = () =>
    Array.apply(null, { length: 24 } as any).map((_e, hour) => (
      <div key={hour} className={styles.hourlyDivisor}>
        {hour}
      </div>
    ))

  const renderSchedulesForThisDay = () =>
    schedulesForThisDay.map((schedule: ISchedule) => (
      <DailyEntry key={schedule.id} schedule={schedule} />
    ))

  return (
    <div className={styles.schedulesDaily}>
      <h4 className={styles.schedulesDailyTitle}>{day}</h4>
      <div className={styles.hourlyDivisors}>
        {renderHourlyDivisors()}
        {renderSchedulesForThisDay()}
      </div>
    </div>
  )
}

export default DailySchedule
