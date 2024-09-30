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
        <><a style={{marginRight: "32px"}} href="https://github.com/krystianbajno">
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
        <a href="https://baycode.eu/files/Baycode%20Security%20-%20Demo%20Corp%20-%20Findings%20Report.pdf">
          <Button primary>
            Preview Demo Pentest Report
          </Button>
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
          <a href='/portfolio'>
            <Button primary>Browse portfolio</Button>
          </a>
          <a style={{marginLeft: "16px"}} href="/quote" >
            <Button primary>Contact</Button>
          </a>
          <a className={styles.hideMobile} style={{marginLeft: "16px"}} href="https://github.com/krystianbajno">
            <Button primary>
              Visit GitHub
            </Button>
          </a>
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
        <h3>Tailored Solutions</h3>
        <p>We offer a range of services, from external and internal penetration testing to scrutinizing web applications, social engineering/phishing, OSINT, CTI, and S-SDLC programmes as a proactive strategy crafted exclusively for your needs, so you can focus on what you do best.</p>
        <br/>
        <h3>Cooperation</h3>
        <p>We utilize cutting-edge tools and techniques to systematically identify vulnerabilities within your network, systems, and applications in order to reveal hidden risks and deliver tailored, practical recommendations to enhance your security posture.</p>
        <br/>
        <h3>Let's Boost Your Cyber Armor</h3>
        <p>Take the first step to enhance your organization's cyber defense by scheduling a call with us today.</p>
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