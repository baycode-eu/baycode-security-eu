import * as React from "react";

import styles from "./button.module.scss";

interface Props {
  children: string,
  class?: any,
  scroll?: boolean,
  onPress?: (e) => void,
  loading?: boolean
  disabled?: boolean
}

export const Button = (props: Props) => {
  const available = !props.disabled && !props.loading
  const onClick = available ? props.onPress : () => {}

  return <button
    className={styles.button + `${props.loading ? 'loading' : ''} ${props.scroll ? 'scroll' : ''} ${props.disabled ? 'disabled' : ''} ${props.class ? props.class : ''} `}
    onClick={onClick}
  >
    {props.children}
  </button>
}