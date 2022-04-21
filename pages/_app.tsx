import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Navigation from '../components/navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider
        theme={{
          colorScheme: 'dark'
        }}
        withGlobalStyles
      >
        <Navigation />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}

export default MyApp
