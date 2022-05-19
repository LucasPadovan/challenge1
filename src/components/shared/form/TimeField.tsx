import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useField, useFormikContext } from 'formik'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './Input.module.scss'
import { buildTimeString } from '../../../utils/time'

const TimeField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props)
  const { setFieldValue } = useFormikContext()
  const hasError = meta.touched && meta.error

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={props.id || props.name}>{label}</label>

      <DatePicker
        {...field}
        {...props}
        autoComplete="off"
        placeholderText={props.placeholder}
        // selected={field.value || ''} //Causes rendering loop
        onChange={val => {
          if (val !== field.value) {
            const time = buildTimeString(val)
            setFieldValue(field.name, time)
          }
        }}
        showTimeSelect
        showTimeSelectOnly
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="LLL"
      />

      {hasError ? <div className={styles.errorField}>{meta.error}</div> : null}
    </div>
  )
}

export default TimeField
