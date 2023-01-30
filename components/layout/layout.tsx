import * as React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { getYear } from "utils/dates";
import Slider from "./slider/Slider";

export default (props: any) => {
  return <div className="layout" id="outer-container">
    <Header logoText="_baycode.eu" secondaryLogoText="security" />
    <Slider pageWrapId={"page-wrap"} outerContainerId={"outer-container"}/>
    { props.hero && <section id="hero-section" className="hero-section">
        <div className="heroContainer">
          {props.hero}
          <div className="caro-mask"></div>
        </div>
      </section>}
    <div className={`page`} id="page-wrap">
      <div className="pageContents">
        {props.children}
      </div>
    </div>
    <Footer currentYear={getYear(new Date)} />
  </div>
}