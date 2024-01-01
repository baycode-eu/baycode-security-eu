import * as React from "react"
import styles from "./footer.module.scss"

export default (props: any) => {
  return <div>
    <div className={styles.footer}>
      <div className={styles.footerSection} >
          Krystian Bajno
      </div>

      <div className={styles.footerSection}>
          Baycode © {props.currentYear}
      </div>

      <div className={styles.footerSection}>
        <a href="/files/Baycode%20Privacy%20Policy.pdf" alt="Privacy Policy"  target="_blank" rel="noopener noreferrer" >Privacy Policy</a>  
      </div>
    </div>
  </div>
}