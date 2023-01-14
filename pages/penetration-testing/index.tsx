import PenetrationTestingView from "components/pages/penetration-testing/PenetrationTestingView";
import Head from "next/head";
import React from "react"

const PenetrationTesting = (props) => {
    return (
      <>
        <Head>
          <title>Baycode - Penetration Testing Services Specification</title>
          <meta name="description" content="Baycode offers comprehensive penetration testing services to identify vulnerabilities and weaknesses in your external and internal infrastructure. Our team of experts use industry-leading techniques to simulate real-world attacks and provide actionable recommendations for improving security." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="favicon.svg" />
        </Head>
        <main>
          <PenetrationTestingView/>
        </main>
      </>
    )
  }
export default PenetrationTesting;