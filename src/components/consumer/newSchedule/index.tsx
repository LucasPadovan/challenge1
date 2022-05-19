import Head from 'next/head'
import React from 'react'
import Heading from '../../shared/heading'
import SchedulesForm from '../schedules/form'

import styles from './NewSchedule.module.scss'

const NewSchedule = ({}: any) => (
  <>
    <Head>
      <title>Schedule new activity</title>
      <meta
        name="description"
        content="Create a new schedule tied to your user"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Heading
        title="Schedule new activity"
        description="Please fill all the fields in the form to schedule your activity"
      />

      <SchedulesForm />
    </main>
  </>
)

export default NewSchedule
