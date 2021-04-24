import { AppProps } from 'next/app';

import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function MyApp({ Component, pageProps }) {
  return(
    <div suppressHydrationWarning> 
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  )
}

export default MyApp
