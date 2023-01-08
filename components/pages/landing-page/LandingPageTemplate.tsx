import * as React from "react";
import Layout from "components/layout/layout";
import styles from "./landing-page-template.module.scss";

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
    welcomeSoftwareEngineering,
    welcomeSoftwareEngineeringImage,
    blogCarousel,
    welcomeSoarSiemImage,
    welcomeSoarSiem
  } = props

  // TODO WORKSHOPS

  return <Layout hero={hero}>
    <div className="landing-page-template">
      <section className="blog-carousel">
        {blogCarousel} blog
      </section>
      <section id="landing-tiles" className={styles.landingTiles}>
        <div className={styles.textSection}>
          <div className={styles.left}>
            {welcomeBaycode}
          </div>
          <div className={styles.right}>
            <div>
              <img className={styles.imageSection} 
                src={welcomeBaycodeImage.src}/>
            </div>
          </div>
        </div>
        <div className={styles.textSection}>
          <div className={styles.left}>
            <div>
              <img alt={"none"} className={styles.imageSection} 
                src={welcomePenetrationTestImage.src}/>
            </div>
          </div>
          <div className={styles.right}>
            {welcomePenetrationTest}
          </div>
        </div>
      </section>
      <section className="get-a-quote">
        {getQuote}
      </section>
      <section id="landing-tiles-2" className="landing-tiles-2">
        <div className={styles.textSection}>
          <div className={styles.left}>
            {welcomeSoftwareEngineering}
          </div>
          <div className={styles.right}>
            <div>
              <img alt={"none"} className={styles.imageSection} 
                 src={welcomeSoftwareEngineeringImage.src}/>
            </div>
          </div>
        </div>
        <div className={styles.textSection}>
          <div className={styles.left}>
            <div>
            <img alt={"none"} className={styles.imageSection} src={welcomeDevelopedApplicationsSecurityImage.src}></img>
            </div>
          </div>
          <div className={styles.right}>
            {welcomeDevelopedApplicationsSecurity}
          </div>
        </div>
      </section>
      <section className="get-a-quote">
        {getQuote}
      </section>
      <section>
        <div className={styles.textSection}>
          <div className={styles.left}>
            {welcomeSoarSiem}
          </div>
          <div className={styles.right}>
            <div>
              <img alt={"none"} className={styles.imageSection} src={welcomeSoarSiemImage.src}></img>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-carousel">
        {blogCarousel}
      </section>
    </div>
  </Layout>
}