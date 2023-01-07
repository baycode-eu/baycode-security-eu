import * as React from "react"
// import {useDispatch} from "react-redux";

import styles from "./footer.module.scss"
// import {openContactModal} from "../../../store/actions/ModalActions";

export default (props) => {
  // const dispatch = useDispatch()
  return <div className={styles.footer}>
    {/* <a onClick={() => dispatch(openContactModal())}> */}
      Baycode © {props.currentYear}
    {/* </a> */}
  </div>;
}