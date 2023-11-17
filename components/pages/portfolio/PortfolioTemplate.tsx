import FadeIn from "components/animations/FadeIn";
import Layout from "components/layout/layout"
import styles from "./portfolio-template.module.scss";
import useEncrypt from "components/hooks/useEncryptedText";

import React from 'react';

const CertificationList = ({ certifications }) => {
  return (
    <div className="certifications">
      {certifications.map((certification, index) => (
        <div className={"certification"} key={index}>
          <h2>{certification.title}</h2>
          <p style={{marginTop: "8px"}}><b>Description:</b> {certification.description}</p>
          <p style={{marginTop: "8px"}}><b>Link:</b> <a href={certification.link} target="_blank" rel="noopener noreferrer">
            {certification.link}
          </a></p>
        </div>
      ))}
    </div>
  );
};

const PortfolioTemplate = ({certificatesJson, portfolioJson}) => {
    return <Layout>
        <div className={styles.portfolioTemplate}>
            <div className={styles.pentest}>
                <h1 id="pentest">
                    <a href="http://localhost:3000/files/Baycode%20Security%20-%20Demo%20Corp%20-%20Findings%20Report.pdf">
                        {useEncrypt("Preview Demo Pentest Report", 5, true, () => {
                            if (document.documentElement.clientWidth >= 1000) {
                              document.getElementById("pentest").classList.add("pentest-anim")
                            } else {
                              document.getElementById("pentest").classList.add("pentest-anim-mobile")
                            }
                            
                         }, "Str0ng2023")}
                    </a>
                </h1>
            </div>
            <div className="certificates">

            </div>
            <h1 className={styles.head}>Certifications</h1>
            <CertificationList certifications={certificatesJson}></CertificationList>

            <h1 className={styles.head}>Projects</h1>
            <div className="grid-container">
                {portfolioJson.map((item) => (
                    <div key={item.id} className="grid-item">
                        <h2>{item.title}</h2>
                        <p className="company"><strong>Company:</strong> {item.company}</p>

                        <p className="description"><strong>Description:</strong> {item.description}</p>
                        <ul>
                            <strong>Activities:</strong>
                            {item.activities.map((activity, index) => (
                            <li className="activity" key={index}>{activity}</li>
                            ))}
                        </ul>
                        <ul>
                        <strong ><p className="technologies">Technologies:</p></strong>
                            {item.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className={styles.cta}>
                {/* {props.cta} */}
            </div>
        </div>
    </Layout>
}

export default PortfolioTemplate;