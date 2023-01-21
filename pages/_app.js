import '../styles/globals.css'
import Navigation from 'components/layouts/navigation'
import Header from 'components/layouts/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return(
    <> 
      <Head>
        <title>Sin - Portofolio</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header/>
      <div className='background-content'>
        <div className='container-web-app container-fluid px-4'>
          <Component {...pageProps} />
        </div>
      </div>
      <Navigation/>
    </>
  )
}

export default MyApp
