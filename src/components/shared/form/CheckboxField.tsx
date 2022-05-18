import React from 'react'
import { useField } from 'formik'

import styles from './Input.module.scss'

const CheckboxField = ({ children, ...props }: any) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  const hasError = meta.touched && meta.error

  return (
    <div className={styles.inputGroup}>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />

        {children}
      </label>

      {hasError ? <div className={styles.errorField}>{meta.error}</div> : null}
    </div>
  )
}

export default CheckboxField
