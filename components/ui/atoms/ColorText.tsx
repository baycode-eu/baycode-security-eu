import React from 'react'

import styles from "./color-text.module.scss"

export default (props: any) => {
  return <span className={styles.span}>{props.children}</span>
} 