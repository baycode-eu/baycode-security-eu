import Head from 'next/head'
import { Inter } from '@next/font/google'
import LandingPageView from 'components/pages/landing-page/LandingPageView'
const inter = Inter({ subsets: ['latin'] })
import { Posts } from '../api/wordpress';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Baycode - your business, our expertise - penetration tests, custom software</title>
        <meta name="description" content="Our mission is to help businesses and organizations to secure and grow their systems, as well as protect their data from cyber threats. Our team of experts use industry-leading techniques to simulate real-world attacks and provide actionable recommendations for improving security as well as software to tailor your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.svg" />
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