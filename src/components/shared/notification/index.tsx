import React from 'react'
import { useNotificationsContext } from '../../contexts/NotificationsContext'

import styles from './Notification.module.scss'

const Notification = ({}: any) => {
  const notificationsContext = useNotificationsContext()

  React.useEffect(() => {
    setTimeout(() => {
      notificationsContext.methods.setGeneralNotification({})
    }, 30000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationsContext.state.generalNotification])

  if (!notificationsContext.state.generalNotification.message) {
    return null
  }

  const message = notificationsContext.state.generalNotification.message ?? ''
  const type = notificationsContext.state.generalNotification.type ?? 'info'
  const className = `${styles.notification} ${styles[type]}`

  return <div className={className}>{message}</div>
}

export default Notification
