import CustomSoftwareView from "components/pages/custom-software/CustomSoftware";
import Head from "next/head";
import React from "react"
import ogimage from "public/site_black.png";

const CustomSoftware = (props) => {
    return (
      <>
        <Head>
          <title>Software Engineering services specification</title>
          <meta name="description" content="Baycode offers comprehensive software engineering services for businesses looking to improve their digital presence and increase efficiency. Our experienced team of developers and designers work together to provide custom solutions for web and mobile applications, e-commerce platforms, and more. Partner with us to take your business to the next level." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="favicon.svg" />
          <meta property="og:title" content="Software engineering services" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={ogimage.src} />
          <meta property="og:url" content="https://baycode.eu/custom-software" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:description" content="Baycode offers comprehensive software engineering services for businesses looking to improve their digital presence and increase efficiency. Our experienced team of developers and designers work together to provide custom solutions for web and mobile applications, e-commerce platforms, and more. Partner with us to take your business to the next level." />
          <meta property="og:site_name" content="Baycode" />
          <meta name="twitter:image:alt" content="Baycode Logo" />
        </Head>
        <main>
          <CustomSoftwareView/>
        </main>
      </>
    )
  }
export default CustomSoftware;