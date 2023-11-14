import * as React from "react"
// import {useDispatch} from "react-redux";

import styles from "./footer.module.scss"
// import {openContactModal} from "../../../store/actions/ModalActions";

export default (props: any) => {
  // const dispatch = useDispatch()
  return <div>
    <div className={styles.footer}>
      <div className={styles.footerSection} >
          VATEU: 7182155538
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