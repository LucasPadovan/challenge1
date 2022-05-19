import React from 'react'
import { Formik, Form } from 'formik'

import * as Yup from 'yup'
import { ISchedule } from '../constants'
import InputField from '../../../shared/form/InputField'
import Button from '../../../shared/button'

import styles from './SchedulesForm.module.scss'
import {
  dateRegex,
  testStartEndTime,
  testTimeEntry,
  timeRegex
} from '../../../../utils/time'
import { useSchedulesContext } from '../../../contexts/SchedulesContext'
import { useFrontendContext } from '../../../contexts/FrontendContext'
import DateField from '../../../shared/form/DateField'
import TimeField from '../../../shared/form/TimeField'

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
    .test('', 'Max time allowed is 23:59', value => testTimeEntry(value))
    .test(
      '',
      'Start time cannot be higher or equal than End time',
      (_value, context) => testStartEndTime(context)
    ),
  endTime: Yup.string()
    .required('Required')
    .matches(timeRegex, 'Time format should be HH:MM')
    .test('', 'Max time allowed is 23:59', value => testTimeEntry(value))
    .test(
      '',
      'End time cannot be lower or equal than Start time',
      (_value, context) => testStartEndTime(context)
    ),
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

  const title = scheduleValues
    ? 'Update this activity'
    : 'Schedule this activity'

  const handleSubmit = (
    values: ISchedule,
    { setSubmitting, resetForm }: any
  ) => {
    frontendContext.methods.setIsLoading(true)

    setTimeout(() => {
      if (scheduleValues) {
        schedulesContext.methods.updateSchedule(values)
        frontendContext.methods.setIsModalOpen(false)

        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 100)
      } else {
        schedulesContext.methods.addSchedule(values)
      }

      frontendContext.methods.setIsLoading(false)

      setSubmitting(false)
      resetForm()
    }, 400)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ScheduleSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <InputField
            label="Activity Name"
            name="activityName"
            type="text"
            placeholder="Hiking"
          />
          <DateField
            label="Date"
            name="date"
            type="text"
            placeholder="MM/DD/YYYY"
          />
          <TimeField
            label="Start time"
            name="startTime"
            type="text"
            placeholder="12:00"
          />
          <TimeField
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

          <Button type="submit" title={title} />
        </Form>
      </Formik>
    </>
  )
}

export default SchedulesForm
