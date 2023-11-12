import * as React from "react";

import styles from "./card.module.scss"

interface Props {
  title?: string
  children?: any
}

const Card = (props: Props) => {
  const {children, title} = props;

  return <div className={[styles.card, ""].join(" ")}>
    <>
    <div className={styles.title}>
      {title}
    </div>
    <div className={styles.contents}>
      {children}
    </div>
    </>
    {/* <div className="caro-mask"></div> */}
  </div>
}

export default Card