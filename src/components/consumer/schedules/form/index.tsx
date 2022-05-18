import React from 'react'
import { Formik, Form } from 'formik'

import * as Yup from 'yup'
import { ISchedule } from '../constants'
import InputField from '../../../shared/form/InputField'
import Button from '../../../shared/button'

import styles from './SchedulesForm.module.scss'
import { dateRegex, testTimeEntry, timeRegex } from '../../../../utils/time'
import { useSchedulesContext } from '../../../contexts/SchedulesContext'
import { useFrontendContext } from '../../../contexts/FrontendContext'

const ScheduleSchema = Yup.object({
  activityName: Yup.string()
    .max(150, 'Must be 150 characters or less')
    .required('Required'),
  date: Yup.string()
    .required('Required')
    .max(10, 'Must be 10 characters or less')
    .matches(dateRegex, 'Date format should be mm/dd/yyyy'),
  startTime: Yup.string()
    .required('Required')
    .matches(timeRegex, 'Time format should be HH:MM')
    // todo starting time should not be after ending time.
    .test('', 'Max time allowed is 23:59', value => testTimeEntry(value)),
  endTime: Yup.string()
    .required('Required')
    .matches(timeRegex, 'Time format should be HH:MM')
    // todo starting time should not be after ending time.
    .test('', 'Max time allowed is 23:59', value => testTimeEntry(value)),
  numMaxGuests: Yup.number().required('Required')
})

const SchedulesForm = ({ scheduleValues }: { scheduleValues?: ISchedule }) => {
  const schedulesContext = useSchedulesContext()
  const frontendContext = useFrontendContext()

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
        onSubmit={(values, { setSubmitting, resetForm }) => {
          frontendContext.methods.setIsLoading(true)

          setTimeout(() => {
            schedulesContext.methods.addSchedule(values)

            frontendContext.methods.setIsLoading(false)

            setSubmitting(false)
            resetForm()
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
