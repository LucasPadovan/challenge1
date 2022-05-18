import React from 'react'

import styles from './Heading.module.scss'

const Heading = ({
  title,
  description
}: {
  title: string
  description?: string
}) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>

      {description && <p className={styles.description}>{description}</p>}
    </>
  )
}

export default Heading
