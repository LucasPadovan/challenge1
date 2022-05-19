import Head from 'next/head'
import React from 'react'
import { useFrontendContext } from '../../contexts/FrontendContext'
import { useSchedulesContext } from '../../contexts/SchedulesContext'
import Heading from '../../shared/heading'
import SchedulesList from '../schedules/list'

import styles from './MySchedules.module.scss'

const MySchedules = ({}: any) => {
  return (
    <>
      <Head>
        <title>My schedules</title>
        <meta name="description" content="Schedules I have created" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading
          title="My Schedules"
          description="You have scheduled activities for the following days"
        />

        <SchedulesList />
      </main>
    </>
  )
}

export default MySchedules
