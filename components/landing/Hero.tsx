import { Button } from "components/ui/atoms/button/Button"
import * as React from "react"
import styles from "./hero.module.scss"
import GetQuote from "./quote/GetQuote"

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
      <li>🔍 Penetration Tests</li>
      <li>💻 Custom Software</li>
      <li>📱 App Security Testing</li>
      <li>🛡️ Threat Hunting & SOAR</li>
      <li>🎓 Workshops</li>
      <li>💼 Consultancy</li>
    </ul>
    <div className={styles.quote}>
      <GetQuote
        textQuoteDevelopment={""}
        getQuote={
          <Button primary>
            Get a free quote
          </Button>
        }
      />
    </div>
  </div>
)