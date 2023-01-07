import '../styles/globals.css'
import "styles/globals.scss"
import "styles/components/hero.scss"
import "styles/layout.scss"

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
