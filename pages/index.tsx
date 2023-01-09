import Head from 'next/head'
import { Inter } from '@next/font/google'
import LandingPageView from 'components/pages/landing-page/LandingPageView'
const inter = Inter({ subsets: ['latin'] })
import { Posts } from '../API/wordpress';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Baycode Security - your security, our expertise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.svg" />
      </Head>
      <main>
        <LandingPageView
          posts={props.posts}
        />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  let posts = []
  try {
    posts = await Posts.getPosts()
  } catch (e) {
    
  }
  return {
    props: {
      posts
    }
  }
}