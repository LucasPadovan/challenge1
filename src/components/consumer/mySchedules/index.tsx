import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { useSchedulesContext } from '../../contexts/SchedulesContext'
import Heading from '../../shared/heading'
import SchedulesList from '../schedules/list'

import styles from './MySchedules.module.scss'

const MySchedules = ({}: any) => {
  const schedulesContext = useSchedulesContext()
  const schedulesByDate = schedulesContext.state.scheduleByDate
  const isEmptySchedule =
    schedulesByDate.length === 1 && schedulesByDate?.[0]?.schedules.length === 0

  return (
    <>
      <Head>
        <title>My schedule</title>
        <meta name="description" content="Activities I have scheduled" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading
          title="My Schedule"
          description="You have scheduled activities for the following days"
        />
        {isEmptySchedule && (
          <p>
            Seems like you haven scheduled any activities yet. I invite you to
            add one (or more!) using the following link.
          </p>
        )}
        <Link href="/newActivity">
          <span className={styles.cta}>Add an activity</span>
        </Link>

        <SchedulesList />
      </main>
    </>
  )
}

export default MySchedules
