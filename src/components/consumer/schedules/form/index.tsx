import React from 'react'
import { Formik, Form } from 'formik'

import * as Yup from 'yup'
import { ISchedule } from '../constants'
import InputField from '../../../shared/form/InputField'
import Button from '../../../shared/button'

import styles from './SchedulesForm.module.scss'

const ScheduleSchema = Yup.object({
  activityName: Yup.string()
    .max(150, 'Must be 150 characters or less')
    .required('Required'),
  date: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  startTime: Yup.string().required('Required'),
  endTime: Yup.string().required('Required'),
  numMaxGuests: Yup.number().required('Required')
})

const SchedulesForm = ({ scheduleValues }: { scheduleValues?: ISchedule }) => {
  const initialValues = scheduleValues ?? {
    activityName: '',
    date: '',
    startTime: '',
    endTime: '',
    numMaxGuests: 0
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ScheduleSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))

            setSubmitting(false)
          }, 400)
        }}
      >
        <Form className={styles.form}>
          <InputField
            label="Activity Name"
            name="activityName"
            type="text"
            placeholder="Hiking"
          />
          <InputField
            label="Date"
            name="date"
            type="text"
            placeholder="05/23/2022"
          />
          <InputField
            label="Start time"
            name="startTime"
            type="text"
            placeholder="12:00"
          />
          <InputField
            label="End time"
            name="endTime"
            type="text"
            placeholder="14:00"
          />
          <InputField
            label="Max number of guests"
            name="numMaxGuests"
            type="number"
            placeholder="2"
          />

          <Button type="submit" title="Schedule this activity" />
        </Form>
      </Formik>
    </>
  )
}

export default SchedulesForm
