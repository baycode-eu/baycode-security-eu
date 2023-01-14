import * as React from "react"
import styles from "./get-quote.module.scss";

export default ({textQuoteDevelopment, getQuote}: {textQuoteDevelopment: any, getQuote?:any }) => {
  return <>
  <div className={styles.quoteDevelopmentButtons}>
    <div className={styles.quote}>{getQuote}</div>
  </div>
  {textQuoteDevelopment && <div className={styles.textQuote}>{textQuoteDevelopment}</div>}
  </>
}
