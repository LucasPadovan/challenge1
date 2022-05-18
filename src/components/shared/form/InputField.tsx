import React from 'react'
import { useField } from 'formik'

import styles from './Input.module.scss'

const InputField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props)
  const hasError = meta.touched && meta.error

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={props.id || props.name}>{label}</label>

      <input className={styles.input} {...field} {...props} />

      {hasError ? <div className={styles.errorField}>{meta.error}</div> : null}
    </div>
  )
}

export default InputField
