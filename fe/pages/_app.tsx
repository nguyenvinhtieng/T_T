import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <SideBar />
    <div className="pageContent">
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}

export default MyApp
