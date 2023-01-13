import * as React from "react";
import styles from "./header.module.scss";
import {redirect} from "utils/navigation";
import Logo from "./logo/Logo";
import { Button } from "components/ui/atoms/button/Button";

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
            News
          </a>
          <a href="/workshops" className={styles.menuEntry}>
            Workshops
          </a>
          <a href="/proactive-defense-soar" className={styles.menuEntry}>
            SOAR
          </a>          
          <a href="/penetration-testing" className={styles.menuEntry}>
            Penetration Tests
          </a>
          <a href="/custom-software" className={styles.menuEntry}>
            Custom Software
          </a>
          <a href="/contact" className={[styles.contact, styles.menuEntry].join(" ")}>
            <span className={styles.hiddenBreak}><Button smol primary>Get a Quote</Button></span>
            {/* <a className={styles.visibleBreak}>Get a Quote</a> */}
          </a>
        </div>
    </div>   
  </div>

}

export default Header;



