import React from 'react'
import { useNotificationsContext } from '../../contexts/NotificationsContext'

import styles from './Notification.module.scss'

const Notification = ({}: any) => {
  const notificationsContext = useNotificationsContext()

  React.useEffect(() => {
    setTimeout(() => {
      notificationsContext.methods.setGeneralNotification({})
    }, 40000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationsContext.state.generalNotification])

  if (!notificationsContext.state.generalNotification.message) {
    return null
  }

  const message = notificationsContext.state.generalNotification.message ?? ''
  const type = notificationsContext.state.generalNotification.type ?? 'info'
  const className = `${styles.notification} ${styles[type]}`

  return (
    <div className={className} data-cy="notification">
      {message}
    </div>
  )
}

export default Notification
