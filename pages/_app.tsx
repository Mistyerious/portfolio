import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Navigation from '../components/navigation'
import Head from "next/head";
import { NotificationsProvider } from '@mantine/notifications'

function MyApp({ Component, pageProps }: AppProps) {
    return (
    <>
        <Head>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <title>Misty's Portfolio | Home</title>
        </Head>

      <MantineProvider
        theme={{
          colorScheme: 'dark'
        }}
        withGlobalStyles
      >
        <Navigation />
        <NotificationsProvider>
            <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  )
}

export default MyApp
