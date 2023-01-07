import * as React from "react";
import styles from "./logo.module.scss";

export default ({onPress, logoText, secondaryLogoText}) => (
  <div className={styles.logo} onClick={onPress}>
    <div className={styles.logoText}>{logoText}</div>
    <div className={styles.secondaryLogoText}>{secondaryLogoText}</div>
  </div>
)