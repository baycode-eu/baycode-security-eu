import * as React from "react"
import styles from "./get-quote.module.scss";

export default ({textQuoteDevelopment, getQuote}: {textQuoteDevelopment: any, getQuote:any }) => {
  return <>
  <div className="quote-development-buttons">
    <div className={styles.quote}>{getQuote}</div>
  </div>
  <div className="text-quote">{textQuoteDevelopment}</div>
  </>
}
