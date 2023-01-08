import * as React from "react"
import styles from "./get-quote-development.module.scss";

export default ({textQuoteDevelopment, getQuote}) => {
  return <>
  <div className="quote-development-buttons">
    <div className={styles.quote}>{getQuote}</div>
  </div>
  <div className="text-quote">{textQuoteDevelopment}</div>
  </>
}
