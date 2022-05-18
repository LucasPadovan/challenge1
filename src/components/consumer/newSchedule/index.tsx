import Head from 'next/head'
import React from 'react'
import Heading from '../../shared/heading'
import SchedulesForm from '../schedules/form'

import styles from './NewSchedule.module.scss'

const NewSchedule = ({}: any) => (
  <>
    <Head>
      <title>New schedule</title>
      <meta
        name="description"
        content="Create a new schedule tied to your user"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Heading
        title="New Schedule form"
        description="Please fill all the fields in the form to create you schedule"
      />

      <SchedulesForm />
    </main>
  </>
)

export default NewSchedule
