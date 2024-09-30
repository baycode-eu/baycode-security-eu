import * as React from "react";
import Layout from "components/layout/layout";
import styles from "./landing-page-template.module.scss";
import FadeIn from "../../animations/FadeIn"
import Stack from "components/tools/Stack";
import whoami from "public/whoami.png";
import { Button } from "components/ui/atoms/button/Button";

export default (props: any) => {
  const {
    welcomeBaycode,
    welcomePenetrationTest,
    // welcomePenetrationTestImage,
    hero,
    getPentest,
    getSocial,
    welcomeSoftwareEngineering,
    welcomeSoftwareEngineeringImage,
    blogCarousel,
    browseBlog,
    stackData
  } = props

  return <Layout hero={hero}>
    <div className="landing-page-template">
      <FadeIn toLeft>
        <section id="landing-tiles" className={styles.landingTiles}>
          <div className={styles.textSection}>
            <div className={styles.left}>
              {welcomeBaycode}
            </div>
            <div className={styles.right}>
              <div>
              <img style={{ borderRadius: "86px" }} className={styles.imageSection}
                  src={whoami.src} />
              </div>
            </div>
          </div>
            <div id="software-engineering-section" className={styles.textSection}>
              <div className={styles.left}>
                <div>
                  {welcomeSoftwareEngineeringImage}
                </div>
              </div>
              <div className={styles.right}>
                {welcomeSoftwareEngineering}
              </div>
            </div>
      
        </section>
      </FadeIn>
      <FadeIn>
      <section id="landing-tiles" className={"landing-pad"}>
        <div>
          <Stack stack={stackData}></Stack>
        </div>
        <div>
          <h3>And more. Checkout my GitHub and LinkedIn page.</h3>
          <section className={styles["get-a-quote"]}>
            {getSocial}
          </section>
        </div>
      </section>
      </FadeIn>
      <FadeIn>
        <section id="penetration-tests" className="landing-tiles-2">
          <div className={styles.textSection}>
            <div className={styles.left}>
              <div>
              {welcomePenetrationTest}
              <div style={{display: "flex", justifyContent:"center", marginTop: "32px", alignItems:"center"}}>
                <a href="/quote" >
                  <Button primary>
                    Preview Demo Pentest Report
                  </Button>
                </a>
               </div>
              
              </div>
           
            </div>
            {/* <div className={styles.right}>
              <div style={{maxWidth: "650px" }}>
                {welcomePenetrationTestImage} 
              </div>
            </div> */}
          </div>
        </section>
      </FadeIn>
      <div className={styles.cta}>
        <h3>Let's Boost Your Cyber Armor</h3>
        <p>Let us strengthen your security posture and protect your valuable assets.</p>
    </div>
      <section style={{marginTop: "56px"}} className={styles["get-a-quote"]}>
        {getPentest} 
      </section>
      
      <section className={styles.blogCarousel}>
        <div className="carousel">
          {blogCarousel}
        </div>
        <div className={styles["get-a-blog"]}>
          {browseBlog}
        </div>
      </section>
    </div>
  </Layout>
}