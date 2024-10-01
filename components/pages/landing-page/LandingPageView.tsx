import BlogCarousel from "components/carousel/BlogCarousel";
import Hero from "components/landing/Hero";
import GetQuote from "components/landing/quote/GetQuote";
import { Button } from "components/ui/atoms/button/Button";
import C from "components/ui/atoms/ColorText";
import Card from "components/ui/molecules/common/Card";
import hacker from "public/hacker-3.png";
import hackersuit from "public/hackersuit.png";
import lockedKey from "public/lockedkey.png";
import review from "public/review.png";

import pnpt from "public/pnpt.png";
import securityplus from "public/securityplus.png";
import cysa from "public/cysa.png";

import animationData from "public/softwareengianim.json";
import cyberAnimData from "public/cyber.json";

import Lottie from "lottie-react";
import LandingPageTemplate from "./LandingPageTemplate";
import stackData from "public/stack.json"
import styles from "./landing-page-view.module.scss"

const LandingPageView = (props: any) => {
  return <>
    <div className={"white-section-parent"}>
      <div id="white-section-overlay"></div>  
  </div>
  <LandingPageTemplate
    hero={<Hero
      title={"Software Development,"}
      subtitle={"Offensive Security"}
      getQuote={<GetQuote
        textQuoteDevelopment={""}
        getQuote={
          <>
          <a href="https://baycode.eu/files/Baycode%20Security%20-%20Demo%20Corp%20-%20Findings%20Report.pdf">
            <Button primary>
              Preview Demo Pentest Report
            </Button>
          </a>
        </>}
      />}
      onQuote={props.redirectToQuote}
    />}
    getSocial={
      <>
          <a style={{marginRight: "32px"}} href="https://github.com/krystianbajno">
            <Button primary>
              Visit GitHub
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/krystianbajno">
            <Button primary>
              Visit LinkedIn
            </Button>
          </a>
      </>
    }
    blogCarousel={<BlogCarousel articles={props.articles}/>}
    welcomeBaycodeImage={hacker}  
    welcomeSoftwareEngineeringImage={<Lottie
      animationData={animationData}
      className="flex justify-center items-center"
      loop={true}
    />}
    welcomeDevelopedApplicationsSecurityImage={review}
    welcomePenetrationTestImage={<Lottie
      animationData={cyberAnimData}
      className="flex justify-center items-center"
      loop={true}
    />}
    welcomeSoarSiemImage={lockedKey}
    welcomeWorkshopsImage={hackersuit}
    getQuote={<GetQuote
      textQuoteDevelopment={""}
      getQuote={
        <a href="/quote">
          <Button primary>
            Get a free quote
          </Button>
        </a>
      }
    />}
    getPentest={<GetQuote
      textQuoteDevelopment={""}
      getQuote={
        <a href="https://baycode.eu/quote">
          <Button primary>Schedule a call</Button>
        </a>
      }
    />}

    browseBlog={
      <GetQuote 
        getQuote={
          <a href={process.env.BLOG}>
            <Button primary>
              Browse news
            </Button>
          </a>
        }
      />
    }

    stackData={stackData}

    welcomeBaycode={
      <Card
        title={<h1># Services</h1>}
      >
          <>
          <div style={{marginBottom: "32px"}}>
            <p>We specialize in full-stack software development, external and internal penetration testing, and advanced red team operations.</p>
            <p style={{marginTop: "32px"}}>Our mission is to uncover threats, and provide tailored recommendations to enhance your cybersecurity posture.</p>
            <p style={{marginTop: "32px"}}>The solutions are tailored specifically for you needs, so you can focus only on what you do best.</p>
          </div>
          <div style={{display: "flex"}}>
            <div style={{marginRight: "16px", marginBottom: "16px"}} >
              <a href='/portfolio'>
                <Button primary>Browse portfolio</Button>
              </a>
            </div>
          
            <div style={{marginRight: "16px", marginBottom: "16px"}}  >
              <a href="/quote">
                <Button primary>Contact</Button>
              </a>
            </div>
            <div className={styles.hideMobile}>
              <a href="https://github.com/krystianbajno">
                <Button primary>
                  Visit GitHub
                </Button>
              </a>
            </div>
          </div>

          <div className={"badges"}>
              <img alt={"none"} 
                  src={pnpt.src} 
                  className="badge"
              />
          
              <img alt={"none"}
                  src={securityplus.src}
                  className="badge"
               />
        
              <img alt={"none"}
                  src={cysa.src}
                  className="badge"  
              />
          </div>
          </>
      </Card>
    }

    welcomePenetrationTest={
      <Card title={<h1># Security <C>Assessments</C></h1>}>
<>
<div className={styles.gridContainer}>
    <div className={styles.gridItem}>
        <h3>Penetration Tests</h3>
        <p>Our external and internal penetration tests assess your systems and networks for vulnerabilities that attackers could exploit. We simulate real-world scenarios to provide actionable insights on improving your defenses.</p>
    </div>

    <div className={styles.gridItem}>
        <h3>Adversary Emulation</h3>
        <p>We mimic sophisticated adversary tactics, techniques, and procedures (TTPs) to evaluate how well your security measures stand against advanced threats, ensuring robust preparedness.</p>
    </div>

    <div className={styles.gridItem}>
        <h3>Digital Forensics</h3>
        <p>In the event of a cyber attack, we investigate the breach, performing in-depth digital forensics to trace the source, analyze the attack methods, and gather evidence. We reverse engineer malware and work to provide post-incident analysis to prevent future incidents.</p>
    </div>

    <div className={styles.gridItem}>
        <h3>Cyber Threat Intelligence (CTI)</h3>
        <p>Our CTI service provides real-time insights into emerging threats and vulnerabilities, helping you stay one step ahead of potential attackers with actionable intelligence tailored to your environment.</p>
    </div>

    <div className={styles.gridItem}>
        <h3>Vulnerability Research</h3>
        <p>We conduct in-depth research to uncover and analyze vulnerabilities in your systems and applications, enabling you to proactively mitigate risks before they can be exploited by malicious actors.</p>
    </div>

    <div className={styles.gridItem}>
        <h3>Custom Software</h3>
        <p>We develop security tools and software tailored to your specific requirements, helping you stay ahead of cyber threats with solutions designed to fit your operational needs.</p>
    </div>

</div>
</>

      </Card>
    }

    welcomeSoftwareEngineering={
      <Card
        title={<h1># Custom Software</h1>}
      ><>
        <br/><h3>APIs that Speak Your Language</h3>
        <p>Need to architect and create a backend solution? We've got you covered. API development is my playground, no matter if in the serverless cloud and including cozy spots on Microsoft Azure, or microservices or monolith applications.</p>
        <br/><h3>Apps that look and work great</h3>
        <p>We love crafting mobile and frontend apps that not only look fantastic but also work seamlessly. A perfect blend of pixel perfect style and UX functionality for your digital needs.</p><br/>
        <h3>Project management</h3>
        <p>We specialize in agile development, where sprints meet big results. Think Scrum and Kanban.</p>
      </></Card>  
    }
/></>}
  
export default LandingPageView