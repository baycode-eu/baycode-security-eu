import * as React from "react";
import Layout from "components/layout/layout";
import Hero from "components/landing/Hero";
import styles from "./landing-page-template.module.scss";
import Image from "next/image";
import GetQuoteDevelopment from "components/landing/quote/GetQuoteDevelopment";


export default (props) => {
  const {
    welcomeBaycode,
    welcomeBaycodeImage,
    welcomePenetrationTest,
    welcomePenetrationTestImage,
    welcomeDevelopedApplicationsSecurity,
    welcomeDevelopedApplicationsSecurityImage,
    hero,
    getQuote,
    stack,
    welcomeSoftwareEngineering,
    welcomeSoftwareEngineeringImage,
    blogCarousel,
    stackRef
  } = props


  return <Layout>
    <div className="landing-page-template">
      <section id="hero-section" className="hero-section">
        <div className="heroContainer">
          {hero}
          <div className="caro-mask"></div>
        </div>
      </section>
      <section className="get-a-quote-development">
        <GetQuoteDevelopment
          textQuoteDevelopment={<>ddd</>}
          getQuote={<>ddd</>}
          getDevelopment={<>ddd</>}
        />
      </section>
      <section className="blog-carousel">
        {blogCarousel}
      </section>
      <section id="landing-tiles" className="landing-tiles">
        <div className={styles.textSection}>
          <div className={styles.left}>
            {welcomeBaycode}
          </div>
          <div className={styles.right}>
            <Image alt={"none"} className={styles.imageSection} 
              src={welcomeBaycodeImage}/>
          </div>
        </div>
        <div className={styles.textSection}>
          <div className={styles.left}>
            <Image alt={"none"} className={styles.imageSection} 
              src={welcomePenetrationTestImage}/>
          </div>
          <div className={styles.right}>
            {welcomePenetrationTest}
          </div>
        </div>
      </section>
      <section className="get-a-quote">
        {getQuote}
      </section>
      <section id="landing-tiles-2">
        <div className={styles.textSection}>
          <div className={styles.left}>
            {welcomeSoftwareEngineering}
          </div>
          <div className={styles.right}>
            <Image alt={"none"} className={styles.imageSection} 
              src={welcomeSoftwareEngineeringImage}/>
          </div>
        </div>
        <div className={styles.textSection}>
          <div className={styles.left}>
            <Image alt={"none"} className={styles.imageSection} src={welcomeDevelopedApplicationsSecurityImage}></Image>
          </div>
          <div className={styles.right}>
            {welcomeDevelopedApplicationsSecurity}
          </div>
        </div>
      </section>
      <section className="get-a-quote">
        {getQuote}
      </section>
      <section ref={stackRef} className="stack-container">
        {stack}
      </section>
      <section className="blog-carousel-under-get-a-quote">
        {blogCarousel}
      </section>
    </div>
  </Layout>
}