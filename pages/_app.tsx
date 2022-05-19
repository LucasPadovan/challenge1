import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../src/components/shared/navbar'
import Footer from '../src/components/shared/footer'
import Instructions from '../src/components/shared/instructions'
import FrontendContext from '../src/components/contexts/FrontendContext'
import SchedulesContext from '../src/components/contexts/SchedulesContext'
import NotificationsContext from '../src/components/contexts/NotificationsContext'
import Notification from '../src/components/shared/notification'
import ModalContainer from '../src/components/shared/modal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationsContext.Provider>
      <FrontendContext.Provider>
        <SchedulesContext.Provider>
          <div className="grid-container">
            <div className="grid-nav">
              <NavBar />
            </div>
            <div className="grid-left">
              <Instructions />
            </div>
            <div className="grid-right">
              <Notification />
              <ModalContainer />
              <Component {...pageProps} />
            </div>
            <div className="grid-footer">
              <Footer />
            </div>
          </div>
        </SchedulesContext.Provider>
      </FrontendContext.Provider>
    </NotificationsContext.Provider>
  )
}

export default MyApp
