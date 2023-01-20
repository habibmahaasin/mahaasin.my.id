import '../styles/globals.css'
import Navigation from 'components/layouts/navigation'
import Header from 'components/layouts/header'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return(
    <> 
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
