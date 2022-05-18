import React from 'react'

export interface ISchedulesContextMethods {
  setModalContent: (content: IModalContent) => void
  setIsModalOpen: (value: boolean) => void
  setUserId: (userId: string) => void
}
export interface ISchedulesContextState {
  modalContent: IModalContent
  isModalOpen: boolean
  userId: string
}

export interface ISchedulesContextProviderProps {
  methods: ISchedulesContextMethods
  state: ISchedulesContextState
}

interface IModalContent {
  header?: {
    icon?: React.ReactElement
    title?: string
    shouldShowClose?: boolean
  }
  content?: React.ReactElement
  actions?: {
    primaryAction?: { cta: string; onClick: () => void }
    secondaryAction?: { cta: string; onClick: () => void }
  }
  className?: string
  onClose?: () => void
}

const SchedulesContext =
  React.createContext<ISchedulesContextProviderProps | null>(null)

export const useSchedulesContext = () => {
  const value = React.useContext(SchedulesContext)

  if (!value) {
    throw new Error('useSchedulesContext must be used within SchedulesContext')
  }

  return value
}

const SchedulesContextProvider = (props: { children: React.ReactElement }) => {
  const [modalContent, setModalContent] = React.useState<IModalContent>({})
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const [userId, setUserId] = React.useState<string>('')

  React.useEffect(() => {}, [])

  const exportedValues: ISchedulesContextProviderProps = {
    methods: {
      setModalContent,
      setIsModalOpen,
      setUserId
    },
    state: {
      modalContent,
      isModalOpen,
      userId
    }
  }

  return (
    <SchedulesContext.Provider value={exportedValues}>
      {props.children}
    </SchedulesContext.Provider>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Context: SchedulesContext,
  Consumer: SchedulesContext.Consumer,
  Provider: SchedulesContextProvider
}
