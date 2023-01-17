import Head from 'next/head'
import { Inter } from '@next/font/google'
import LandingPageView from 'components/pages/landing-page/LandingPageView'
const inter = Inter({ subsets: ['latin'] })
import { Posts } from '../api/wordpress';
import ogimage from "public/site_black.png";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Baycode - your business, our expertise - penetration tests, custom software</title>
        <meta name="description" content="Our mission is to help businesses and organizations to secure and grow their systems, as well as protect their data from cyber threats. Our team of experts uses industry-leading techniques to simulate real-world attacks and provide actionable recommendations for improving security as well as software to tailor your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.svg" />
        <meta property="og:title" content="Baycode - your business, our expertise - penetration tests, custom software" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogimage.src} />
        <meta property="og:url" content="https://baycode.eu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="Our mission is to help businesses and organizations to secure and grow their systems, as well as protect their data from cyber threats. Our team of experts uses industry-leading techniques to simulate real-world attacks and provide actionable recommendations for improving security as well as software to tailor your needs." />
        <meta property="og:site_name" content="baycode.eu" />
        <meta name="twitter:image:alt" content="Baycode Logo" />
      </Head>
      <main>
        <LandingPageView
          articles={props.articles}
        />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  let articles = []
  try {
    articles = await Posts.getPosts()
  } catch (e) {    
  }
  return {
    props: {
      articles
    }
  }
}