import React from 'react'
import { default as UUID } from 'node-uuid'
const USER_ID_KEY = 'userId'

export interface IFrontendContextMethods {
  setModalContent: (content: IModalContent) => void
  setIsModalOpen: (value: boolean) => void
  setIsLoading: (value: boolean) => void
  setUserId: (userId: string) => void
}
export interface IFrontendContextState {
  modalContent: IModalContent
  isModalOpen: boolean
  isLoading: boolean
  userId: string
}

export interface IFrontendContextProviderProps {
  methods: IFrontendContextMethods
  state: IFrontendContextState
}

interface IModalContent {
  header?: {
    icon?: React.ReactElement
    title?: string
    shouldShowClose?: boolean
  }
  content?: React.ReactElement
  className?: string
  onClose?: () => void
}

const FrontendContext =
  React.createContext<IFrontendContextProviderProps | null>(null)

export const useFrontendContext = () => {
  const value = React.useContext(FrontendContext)

  if (!value) {
    throw new Error('useFrontendContext must be used within FrontendContext')
  }

  return value
}

const FrontendContextProvider = (props: { children: React.ReactElement }) => {
  const [modalContent, setModalContent] = React.useState<IModalContent>({})
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [userId, setUserId] = React.useState<string>('')

  React.useEffect(() => {
    let userId = localStorage.getItem(USER_ID_KEY)

    if (!userId) {
      // May be better lazy imported
      userId = UUID.v4()
      localStorage.setItem(USER_ID_KEY, userId)
    }

    setUserId(userId)
  }, [])

  const exportedValues: IFrontendContextProviderProps = {
    methods: {
      setModalContent,
      setIsModalOpen,
      setIsLoading,
      setUserId
    },
    state: {
      modalContent,
      isModalOpen,
      isLoading,
      userId
    }
  }

  return (
    <FrontendContext.Provider value={exportedValues}>
      {props.children}
    </FrontendContext.Provider>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Context: FrontendContext,
  Consumer: FrontendContext.Consumer,
  Provider: FrontendContextProvider
}
