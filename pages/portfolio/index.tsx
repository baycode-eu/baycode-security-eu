import Head from "next/head";
import React from "react"
import ogimage from "public/site_black.png";
import PortfolioView from "components/pages/portfolio/PortfolioView";

const Quote = (props) => {
    return (
      <>
        <Head>
          <title>Baycode - Browse portfolio</title>
          <meta property="og:title" content="Baycode - Browse portfolio" />
          <meta name="description" content="Browse portfolio - preview the work done by Baycode" />
          <meta property="og:description" content="Browse portfolio - preview the work done by Baycode" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="favicon.svg" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={"https://baycode.eu" + ogimage.src} />
          <meta property="og:site_name" content="Baycode" />
          <meta property="og:url" content="https://baycode.eu/portfolio" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Baycode Logo" />
          <meta property="twitter:image" content={"https://baycode.eu" + ogimage.src}/>
          <meta property="twitter:title" content="Baycode - Browse portfolio" />
          <meta property="twitter:description" content="Browse portfolio - preview the work done by Baycode." />
        </Head>
        <main>
          {<PortfolioView/>}
        </main>
      </>
    )
  }
export default Quote;