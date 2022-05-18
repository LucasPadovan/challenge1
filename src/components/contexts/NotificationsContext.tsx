import React from 'react'

export interface INotification {
  message?: string
  type?: 'alert' | 'error' | 'success' | 'info'
}

export interface INotificationsContextMethods {
  setGeneralNotification: (notification: INotification) => void
}
export interface INotificationsContextState {
  generalNotification: INotification
}

export interface INotificationsContextProviderProps {
  methods: INotificationsContextMethods
  state: INotificationsContextState
}

const NotificationsContext =
  React.createContext<INotificationsContextProviderProps | null>(null)

export const useNotificationsContext = () => {
  const value = React.useContext(NotificationsContext)

  if (!value) {
    throw new Error(
      'useNotificationsContext must be used within NotificationsContext'
    )
  }

  return value
}

const NotificationsContextProvider = (props: {
  children: React.ReactElement
}) => {
  const [generalNotification, setGeneralNotification] = React.useState<
    INotification | {}
  >({})

  const exportedValues: INotificationsContextProviderProps = {
    methods: {
      setGeneralNotification
    },
    state: {
      generalNotification
    }
  }

  return (
    <NotificationsContext.Provider value={exportedValues}>
      {props.children}
    </NotificationsContext.Provider>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Context: NotificationsContext,
  Consumer: NotificationsContext.Consumer,
  Provider: NotificationsContextProvider
}
