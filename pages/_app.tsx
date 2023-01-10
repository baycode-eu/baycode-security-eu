import '../styles/globals.css'
import "styles/globals.scss"
import "styles/components/hero.scss"
import "styles/layout.scss"
import "styles/components/carousel/blog-carousel.scss"
import "styles/components/carousel/carousel-article.scss"
import "swiper/css";
import "swiper/css/pagination";
import "styles/components/sidebar.scss"

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
