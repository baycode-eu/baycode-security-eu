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
          {/* <a href="/workshops" className={styles.menuEntry}>
            Workshops
          </a>       */}
          <a href="/#penetration-tests" className={styles.menuEntry}>
            Penetration Tests
          </a>
          <a href='/#software-engineering-section' className={styles.menuEntry}>
            Custom Software
          </a>
          <a href="/quote" className={[styles.contact, styles.menuEntry].join(" ")}>
            <span className={styles.hiddenBreak}><Button smol primary>Get a Quote</Button></span>
          </a>
        </div>
    </div>   
  </div>
}

export default Header;



