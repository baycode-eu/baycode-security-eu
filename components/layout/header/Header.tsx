import * as React from "react";
import styles from "./header.module.scss";
import {redirect} from "utils/navigation";
import Logo from "./logo/Logo";

const Header = (props) => {
  return <div className={styles.header}>
    <div className={styles.headerContents}>
        <div className={styles.logo}>
          <Logo onPress={() => redirect('/')} 
            logoText={props.logoText} 
            secondaryLogoText={props.secondaryLogoText}
          />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuEntry}>
            Blog
          </div>
          <div className={styles.menuEntry} style={{}}>
            Workshops
          </div>
          <div className={styles.menuEntry}>
            Threat Hunting & SOAR
          </div>          
          <div className={styles.menuEntry}>
            Penetration Testing
          </div>
          <div className={styles.menuEntry}>
            Custom Software
          </div>
          <div className={[styles.contact, styles.menuEntry].join(" ")}>
            Contact
          </div>
      </div>
    </div>
  </div>
}

export default Header;



