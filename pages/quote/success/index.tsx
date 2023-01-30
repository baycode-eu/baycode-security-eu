import Head from "next/head";
import React from "react"
import ogimage from "public/site_black.png";
import SuccessView from "components/pages/success/SuccessView";

const Success = (props) => {
    return (
      <>
        <Head>
          <title>Baycode - Success</title>
          <meta property="og:title" content="Baycode - Success" />
          <meta name="description" content="Get a quote today and take the first step towards achieving your goals." />
          <meta property="og:description" content="Get a quote today and take the first step towards achieving your goals." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="favicon.svg" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={ogimage.src} />
          <meta property="og:url" content="https://baycode.eu/quote/success" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Baycode" />
          <meta name="twitter:image:alt" content="Baycode Logo" />
        </Head>
        <main>
          {<SuccessView/>}
        </main>
      </>
    )
  }
export default Success;