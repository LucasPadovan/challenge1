import React from 'react'

import styles from './Button.module.scss'

const Button = ({
  type = 'button',
  title,
  style = 'primary',
  onClick,
  ...props
}: {
  title: string
  type?: 'button' | 'submit' | 'reset'
  style?: 'primary' | 'secondary'
  onClick?: () => void
}) => {
  const className = style === 'primary' ? styles.primary : styles.secondary

  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  )
}

export default Button
