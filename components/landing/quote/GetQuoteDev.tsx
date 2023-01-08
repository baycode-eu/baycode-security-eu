import * as React from "react"

export default ({textQuoteDevelopment, getQuote, getDevelopment}) => {
  return <><div className="text-quote-development">{textQuoteDevelopment}</div>
  <div className="quote-development-buttons">
    <div className="quote">{getQuote}</div>
    <div className="development">{getDevelopment}</div>
  </div></>
}
