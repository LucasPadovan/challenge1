import { relative } from 'node:path/win32'
import React from 'react'
import Modal from 'react-modal'

import { useFrontendContext } from '../../contexts/FrontendContext'

import styles from './ModalContainer.module.scss'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minHeight: '200px',
    minWidth: '200px'
  }
}

const ModalContainer = () => {
  const frontendContext = useFrontendContext()

  React.useEffect(() => {
    if (!frontendContext.state.isModalOpen) {
      frontendContext.methods.setModalContent({})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frontendContext.state.isModalOpen])

  let modalTitle = null
  let content = null

  if (frontendContext.state.modalContent.header?.title) {
    modalTitle = (
      <div>
        {frontendContext.state.modalContent.header.icon}
        {frontendContext.state.modalContent.header.title}
      </div>
    )
  }

  if (frontendContext.state.modalContent.content) {
    content = frontendContext.state.modalContent.content
  }

  return (
    <Modal
      isOpen={frontendContext.state.isModalOpen}
      // setIsModalOpen={frontendContext.methods.setIsModalOpen}
      // modalTitle={modalTitle}
      className={frontendContext.state.modalContent.className}
      onRequestClose={frontendContext.state.modalContent.onClose}
      // shouldShowClose={
      //   frontendContext.state.modalContent.header?.shouldShowClose
      // }
      style={customStyles}
    >
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={() => {
            frontendContext.methods.setIsModalOpen(false)
          }}
        >
          X
        </button>
        {content}
      </div>
    </Modal>
  )
}

export default ModalContainer
