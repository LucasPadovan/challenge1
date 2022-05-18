import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../src/components/shared/navbar'
import Footer from '../src/components/shared/footer'
import Instructions from '../src/components/shared/instructions'

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  )
}

export default MyApp
