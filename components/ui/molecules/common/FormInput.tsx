import * as React from "react"
// import Input from "../../atoms/common/Input";

export default (props) => {
  return <div className="form-input">
    <div className={`form-input-title ${props.error && 'error'}`}>
      {props.required &&<span className="asterisk">*</span>} <span>{props.title}</span>
    </div>
    {props.textarea ? <textarea className={`form-input-textarea`} {...props}/> : <input className={`form-input-input`} {...props}/>}
    <div className="error error-data">
      {props.error}
    </div>
  </div>
}