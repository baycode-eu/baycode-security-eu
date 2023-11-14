import React from "react"
import PortfolioTemplate from "./PortfolioTemplate";
import portfolioJson from "public/projects.json";
import certificatesJson from "public/certificates.json";

const PenetrationTestingView = () => {
    return <PortfolioTemplate certificatesJson={certificatesJson} portfolioJson={portfolioJson}></PortfolioTemplate>

}

export default PenetrationTestingView;