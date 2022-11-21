import '../styles/globals.css'
import '@tremor/react/dist/esm/tremor.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
  <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
  </SessionProvider>
  )
}

export default MyApp