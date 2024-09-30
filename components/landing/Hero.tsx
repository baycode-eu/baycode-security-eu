import { Button } from "components/ui/atoms/button/Button"
import * as React from "react"
import styles from "./hero.module.scss"

export default (props: any) => (
  <div className={styles.hero}>
    <h1 className={styles.title}>
      _baycode.eu
    </h1>
    <ul className={styles.subtitle}>
      <li>{props.title}</li>
      <li className={`${styles.threatsout}`}>{props.subtitle}</li>
    </ul>
    <ul className={styles.domain}>
      <li>Penetration Tests</li>
      <li>Adversary Emulation</li>
      <li>Digital Forensics</li>
      <li>Cyber Threat Intelligence</li>
      <li>Vulnerability Research</li>
      <li>Custom Software</li>
      {/* <li>📱 App Security Testing</li> */}
      {/* <li>🛡️ SOAR</li> */}
      {/* <li>🎓 Workshops</li> */}
    </ul>
    <div className={styles.quote}>
      {props.getQuote}
    </div>
  </div>
)