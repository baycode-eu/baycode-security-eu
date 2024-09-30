import Head from 'next/head'
import LandingPageView from 'components/pages/landing-page/LandingPageView'
import { Posts } from '../api/rss';
import ogimage from "public/whoami.png";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>baycode.eu - Offensive Security, Penetration Tests, Custom Software, OSINT, CTI, DFIR</title>
        <meta name="description" content="." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.svg" />
        <meta property="og:title" content="Baycode - Offensive Security, Penetration Tests, Custom Software, OSINT, CTI, DFIR" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={"https://baycode.eu" + ogimage.src} />
        <meta property="og:url" content="https://baycode.eu" />
        <meta property="og:description" content="Baycode - Offensive Security, Penetration Tests, Custom Software, OSINT, CTI, DFIR" />
        <meta property="og:site_name" content="Baycode" />
        <meta name="twitter:image:alt" content="Baycode Logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={"https://baycode.eu" + ogimage.src}/>
        <meta property="twitter:title" content="Baycode - Offensive Security, Penetration Tests, Custom Software, OSINT, CTI, DFIR" />
        <meta property="twitter:description" content="Baycode - Offensive Security, Penetration Tests, Custom Software, CTI, OSINT, DFIR" />
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
    console.log(e)
  }

  return {
    props: {
      articles
    }
  }
}