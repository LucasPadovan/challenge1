import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../src/components/shared/navbar'
import Footer from '../src/components/shared/footer'
import Instructions from '../src/components/shared/instructions'
import FrontendContext from '../src/components/contexts/FrontendContext'
import SchedulesContext from '../src/components/contexts/SchedulesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
            <Component {...pageProps} />
          </div>
          <div className="grid-footer">
            <Footer />
          </div>
        </div>
      </SchedulesContext.Provider>
    </FrontendContext.Provider>
  )
}

export default MyApp
