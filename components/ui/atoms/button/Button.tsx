import * as React from "react";

import styles from "./button.module.scss";

interface Props {
  children: string,
  class?: any,
  primary?: boolean
  scroll?: boolean,
  onPress?: (e) => void,
  loading?: boolean
  disabled?: boolean
}

export const Button = (props: Props) => {
  const available = !props.disabled && !props.loading
  const onClick = available ? props.onPress : () => {}

  return <button
    className={`${styles.button} ${props.primary ? styles.primary : ''} ${props.loading ? styles.loading : ''} ${props.scroll ? styles.scroll : ''} ${props.disabled ? styles.disabled : ''} ${props.class ? props.class : ''} `}
    onClick={onClick}
  >
    {props.children}
  </button>
}