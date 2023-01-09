import * as React from "react";
import Layout from "components/layout/layout";
import styles from "./landing-page-template.module.scss";
import FadeIn from "../../animations/FadeIn"
export default (props: any) => {
  const {
    welcomeBaycode,
    welcomeBaycodeImage,
    welcomePenetrationTest,
    welcomePenetrationTestImage,
    welcomeDevelopedApplicationsSecurity,
    welcomeDevelopedApplicationsSecurityImage,
    hero,
    getQuote,
    getWorkshops,
    welcomeSoftwareEngineering,
    welcomeSoftwareEngineeringImage,
    blogCarousel,
    welcomeSoarSiemImage,
    welcomeSoarSiem,
    welcomeWorkshops,
    welcomeWorkshopsImage
  } = props

  return <Layout hero={hero}>
    <div className="landing-page-template">

        {/* <section className="blog-carousel" style={{marginTop: "32px"}}>
          {blogCarousel}
        </section> */}
 
      <section id="landing-tiles" className={styles.landingTiles}>
        
          <div className={styles.textSection}>
       
            <div className={styles.left}>
              {welcomeBaycode}
            </div>
      
            <div className={styles.right}>
              <div>
                <img className={styles.imageSection}
                  src={welcomeBaycodeImage.src} />
              </div>
            </div>
           
          </div>
     
       
          <div className={styles.textSection}>
        
            <div className={styles.left}>
              <div>
                <img alt={"none"} className={styles.imageSection}
                  src={welcomePenetrationTestImage.src} />
              </div>
            </div>
            <div className={styles.right}>
              {welcomePenetrationTest}
            </div>
            
          </div>
     
      </section>
      {/* <FadeIn> */}
        <section className={styles["get-a-quote"]}>
          {getQuote}
        </section>
      {/* </FadeIn> */}
      <section id="landing-tiles-2" className="landing-tiles-2">
      
          <div className={styles.textSection}>
            <div className={styles.left}>
              {welcomeSoftwareEngineering}
            </div>
            <div className={styles.right}>
              <div>
                <img alt={"none"} className={styles.imageSection}
                  src={welcomeSoftwareEngineeringImage.src} />
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

        <section className={styles["get-a-quote"]}>
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
        
        
          <div className={styles.textSection}>
  
            <div className={styles.left}>
              <div>
                <img alt={"none"} className={styles.imageSection} src={welcomeWorkshopsImage.src}></img>
              </div>
            </div>
            <div className={styles.right}>
              {welcomeWorkshops}
            </div>
    
          </div>
      
      </section>
      <section className={styles["get-a-quote"]}>
        {getWorkshops}
      </section>
      <section className={styles.blogCarousel}>
        {blogCarousel}
      </section>
    </div>
  </Layout>
}