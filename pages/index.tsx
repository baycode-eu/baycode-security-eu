import Head from 'next/head'
import LandingPageView from 'components/pages/landing-page/LandingPageView'
import { Posts } from '../api/rss';
import ogimage from "public/site_black.png";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Baycode - Development, App Security - custom software, penetration tests</title>
        <meta name="description" content="My name is Krystian Bajno, I'm a software developer and cyber security specialist (appsec, netsec). This little space on the web is where technology meets personality, and I'm thrilled to have you here. My domain covers full-stack software engineering as well as penetration tests and implementing S-SDLC programmes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.svg" />
        <meta property="og:title" content="Baycode - Development, App Security - custom software, penetration tests" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogimage.src} />
        <meta property="og:url" content="https://baycode.eu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="My name is Krystian Bajno, I'm a software developer and cyber security specialist (appsec, netsec). This little space on the web is where technology meets personality, and I'm thrilled to have you here. My domain covers full-stack software engineering as well as penetration tests and implementing S-SDLC programmes." />
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
  } catch (e) {}

  return {
    props: {
      articles
    }
  }
}