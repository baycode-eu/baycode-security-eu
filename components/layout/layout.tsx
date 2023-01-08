import * as React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { getYear } from "utils/dates";

export default (props) => {
  return <div className="layout">
    <Header logoText="_baycode.eu" secondaryLogoText="security" />
    { props.hero && <section id="hero-section" className="hero-section">
        <div className="heroContainer">
          {props.hero}
          <div className="caro-mask"></div>
        </div>
      </section>}
    <div className={`page`}>
      <div className="pageContents">
        {props.children}
      </div>
    </div>
    {/* <ScrollButton/> */}
    <Footer currentYear={getYear(new Date)} />
  </div>
}