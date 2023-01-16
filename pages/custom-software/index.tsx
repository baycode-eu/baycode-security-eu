import PenetrationTestingView from "components/pages/penetration-testing/PenetrationTestingView";
import Head from "next/head";
import React from "react"

const CustomSoftware = (props) => {
    return (
      <>
        <Head>
          <title>Baycode - Software Engineering Services Specification</title>
          <meta name="description" content="Baycode offers comprehensive software engineering services for businesses looking to improve their digital presence and increase efficiency. Our experienced team of developers and designers work together to provide custom solutions for web and mobile applications, e-commerce platforms, and more. Partner with us to take your business to the next level." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="favicon.svg" />
        </Head>
        <main>
          <SoftwareEngineeringView/>
        </main>
      </>
    )
  }
export default PenetrationTesting;