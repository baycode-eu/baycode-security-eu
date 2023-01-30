import Head from "next/head";
import React from "react"
import ogimage from "public/site_black.png";
import QuoteView from "components/pages/quote/QuoteView";
import { useFormik } from "formik";
import * as yup from "yup"

const Quote = (props) => {
    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        captcha: ''
      },
      onSubmit: async (values, {setSubmitting, setErrors}) => {
        setSubmitting(true)
        console.log(values)
        const response = await fetch(
          process.env.QUOTE_ENDPOINT_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }
        )
        console.log(response)
        console.log("XD")
        setSubmitting(false)   
        window.location.assign("/quote/success") 
      },
      validationSchema: yup.object().shape({
        name: yup.string().required("Required"),
        email: yup.string().email("Invalid Email").required("Required"),
        phone: yup.string().notRequired(),
        subject: yup.string().required("Required"),
        message: yup.string().required("Required")
      })
    })

    return (
      <>
        <Head>
          <title>Baycode - Get a quote</title>
          <meta property="og:title" content="Baycode - Get a quote" />
          <meta name="description" content="Get a quote today and take the first step towards achieving your goals." />
          <meta property="og:description" content="Get a quote today and take the first step towards achieving your goals." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="favicon.svg" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={ogimage.src} />
          <meta property="og:url" content="https://baycode.eu/quote" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Baycode" />
          <meta name="twitter:image:alt" content="Baycode Logo" />
        </Head>
        <main>
          {<QuoteView formik={formik}/>}
        </main>
      </>
    )
  }
export default Quote;