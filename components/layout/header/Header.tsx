import * as React from "react";
import styles from "./header.module.scss";
import {redirect} from "utils/navigation";
import Logo from "./logo/Logo";
import Slider from "../slider/Slider";

const Header = (props: any) => {
  return <div id="page-wrap" className={styles.header}>
    <div className={styles.headerContents}>
        <div className={styles.logo}>
          <Logo onPress={() => redirect('/')} 
            logoText={props.logoText} 
            secondaryLogoText={props.secondaryLogoText}
          />
        </div>
        <div className={[styles.menu, styles.hiddenMobile].join(" ")}>
          <a href={process.env.BLOG} className={styles.menuEntry}>
            Blog
          </a>
          <a href="/workshops" className={styles.menuEntry}>
            Workshops
          </a>
          <a href="/proactive-defense-threat-hunting-soar" className={styles.menuEntry}>
            Threat Hunting & SOAR
          </a>          
          <a href="/penetration-testing" className={styles.menuEntry}>
            Penetration Testing
          </a>
          <a href={process.env.SOLUTIONS} className={styles.menuEntry}>
            Custom Software
          </a>
          <a href={process.env.DOMAIN_UP} className={styles.menuEntry}>
            Home
          </a>
          <a href="/contact" className={[styles.contact, styles.menuEntry].join(" ")}>
            Contact
          </a>
        </div>
    </div>   
  </div>

}

export default Header;



