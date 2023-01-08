import * as React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { getYear } from "utils/dates";
import ScrollButton from "components/ui/molecules/scrollButton/ScrollButton";

export default (props) => {
  return <div className="layout">
    <Header logoText="_baycode.eu" secondaryLogoText="security" />
    <div className={`page`}>
      <div className="pageContents">
        {props.children}
      </div>
    </div>
    <ScrollButton/>
    <Footer currentYear={getYear(new Date)} />
  </div>
}