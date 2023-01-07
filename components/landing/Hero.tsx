import * as React from "react"
import styles from "./hero.module.scss"

export default (props) => (
  <div className={styles.hero}>
    <h1 className={styles.title}>
      _baycode.eu
    </h1>
    <ul className={styles.subtitle}>
      <li>threats found
        <div className={`${styles.threatsout}`}>threats out</div>
      </li>
    </ul>
    <ul className={styles.domain}>
      <li>🔍 Penetration Tests</li>
      <li>💻 Software Development</li>
      <li>📱 App Security Testing</li>
      <li>🚀 SOAR</li>
      <li>🕵️‍♂️ Threat Hunting</li>
      <li>☁️ Cloud Security</li>
    </ul>
  </div>
)