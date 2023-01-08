import * as React from "react";

import styles from "./card.module.scss"

interface Props {
  title?: string
  children?: any
}

const Card = (props: Props) => {
  const {children, title} = props;

  return <div className={[styles.card, ""].join(" ")}>
    <><h2 className={styles.title}>
      {title}
    </h2>
    <div className={styles.contents}>
      {children}
    </div>
    </>
    {/* <div className="caro-mask"></div> */}
  </div>
}

export default Card