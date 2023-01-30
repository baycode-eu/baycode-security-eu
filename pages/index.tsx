import Head from 'next/head'
import { Inter } from '@next/font/google'
import LandingPageView from 'components/pages/landing-page/LandingPageView'
import { Posts } from '../api/wordpress';
import ogimage from "public/site_black.png";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Baycode - your business, our expertise - custom software, penetration tests</title>
        <meta name="description" content="Our mission is to help organizations to grow their business through expert software engineering services and secure their systems to protect their data from cyber threats. We specialize in creating custom software solutions that meet your unique needs and ensure your systems are robust, reliable, and secure." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.svg" />
        <meta property="og:title" content="Baycode - your business, our expertise - custom software, penetration tests" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogimage.src} />
        <meta property="og:url" content="https://baycode.eu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="Our mission is to help organizations to grow their business through expert software engineering services and secure their systems to protect their data from cyber threats. We specialize in creating custom software solutions that meet your unique needs and ensure your systems are robust, reliable, and secure." />
        <meta property="og:site_name" content="Baycode" />
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