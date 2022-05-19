import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useField, useFormikContext } from 'formik'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './Input.module.scss'
import { buildDateString } from '../../../utils/time'

const DateField = ({ label, ...props }: any) => {
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
        selected={(field.value && new Date(field.value)) || ''}
        onChange={val => {
          if (val !== field.value) {
            const date = buildDateString(val) ?? ''
            setFieldValue(field.name, date)
          }
        }}
      />

      {hasError ? <div className={styles.errorField}>{meta.error}</div> : null}
    </div>
  )
}

export default DateField
