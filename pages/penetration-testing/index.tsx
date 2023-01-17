import PenetrationTestingView from "components/pages/penetration-testing/PenetrationTestingView";
import Head from "next/head";
import React from "react"
import ogimage from "public/site_black.png";

const PenetrationTesting = (props) => {
    return (
      <>
        <Head>
          <title>Penetration testing services specification</title>
          <meta name="description" content="Baycode offers comprehensive penetration testing services to identify vulnerabilities and weaknesses in your external and internal infrastructure. Our team of experts use industry-leading techniques to simulate real-world attacks and provide actionable recommendations for improving security." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="favicon.svg" />
          <meta property="og:title" content="Penetration testing services specification" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={ogimage.src} />
          <meta property="og:url" content="https://baycode.eu/penetration-testing" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:description" content="Baycode offers comprehensive penetration testing services to identify vulnerabilities and weaknesses in your external and internal infrastructure. Our team of experts use industry-leading techniques to simulate real-world attacks and provide actionable recommendations for improving security." />
          <meta property="og:site_name" content="Baycode" />
          <meta name="twitter:image:alt" content="Baycode Logo" />
        </Head>
        <main>
          <PenetrationTestingView/>
        </main>
      </>
    )
  }
export default PenetrationTesting;