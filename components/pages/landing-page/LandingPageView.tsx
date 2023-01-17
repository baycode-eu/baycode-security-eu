import BlogCarousel from "components/carousel/BlogCarousel";
import Hero from "components/landing/Hero";
import GetQuote from "components/landing/quote/GetQuote";
import { Button } from "components/ui/atoms/button/Button";
import C from "components/ui/atoms/ColorText";
import Card from "components/ui/molecules/common/Card";
import builder from "public/builder.png";
import hacker from "public/hacker-3.png";
import hackersuit from "public/hackersuit.png";
import locked from "public/locked.png";
import lockedKey from "public/lockedkey.png";
import review from "public/review.png";
import LandingPageTemplate from "./LandingPageTemplate";

const LandingPageView = (props: any) => {
  return <LandingPageTemplate
    hero={<Hero
      title={"Your business,"}
      subtitle={"our expertise"}
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
      onQuote={props.redirectToQuote}
    />}
    blogCarousel={<BlogCarousel articles={props.articles}/>}
    welcomeBaycodeImage={hacker}  
    welcomeSoftwareEngineeringImage={builder}
    welcomeDevelopedApplicationsSecurityImage={review}
    welcomePenetrationTestImage={locked}
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
    getWorkshops={
      <GetQuote
        getQuote={
          <a href={"/workshops"}>
            <Button primary>
              Browse workshops
            </Button>
          </a>
        }
      />
    }
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

    welcomeBaycode={
      <Card
        title={<>How we can <C>help you</C></>}>
          <><p>Our mission is to help businesses and organizations to secure and grow their systems, as well as protect their data from cyber threats. We offer a range of services from providing software solutions, to identifying vulnerabilities, and improving security posture of a business.</p><br/>
          <p>We have a deep understanding of the latest cybersecurity technologies and techniques, as well as extensive experience in software development.</p><br/>
          <p>Commitment to staying up-to-date with the latest industry trends and best practices, in order to be at your service is our priority. </p><br/>
          <p>Our expertise helps you succeed with your needs, whether it be a one-time penetration test, development of advanced startup greenfield application, API, brochure-ware, or ongoing support.</p></>
      </Card>
    }

    welcomePenetrationTest={
      <Card title={<>Penetration <C>Tests</C> </>}>
        <><p>Our team of experts uses the latest tools and techniques to identify vulnerabilities in your network, systems, and applications. Our goal is to help you understand the risks and threats facing your organization and provide actionable recommendations to improve your security posture.</p><br/>
        <p>Our services include external and internal network testing, web and mobile application testing, social engineering, and wireless network testing. We offer customizable packages to meet your specific needs.</p><br/>
        <p>Take the first step towards improving your organization's cyber security by scheduling a test with us today.</p></>
      </Card>
    }

    welcomeSoftwareEngineering={
      <Card
        title={<>Custom <C>Software</C></>}
        >
        <><p>We specialize in agile software development, using methods like Scrum and Kanban to deliver high-quality software on time and within budget. Our team works in short sprints, focusing on delivering valuable software increments and gathering customer feedback for quick iteration. </p><br/>
        <p>We offer API development for system integration and cloud-based solutions, including those built on Microsoft Azure, with a focus on security and compliance. </p><br/>
        <p>Trust us to deliver the best software for your business, from custom applications to frontend and mobile development to API backends.</p></>
      </Card>  
    }

    welcomeDevelopedApplicationsSecurity={
      <Card
        title={<>Code <C>Review</C></>}
      > <><p>Ensure the security of your software with our app security testing and code review services. We understand the importance of testing for potential vulnerabilities and the role it plays in protecting your business, customers, and the sensitive data they entrust you with.</p><br/>
          <p>By identifying and addressing potential threats early on, we can help you deliver a more secure and reliable final product, while maintaining the trust and confidence in your products and services.</p><br/>
          <p>Contact us to learn more about our app security testing services and how they can help protect your business from cyber threats.</p><br/>
      </></Card>
    }

    welcomeSoarSiem={
      <Card
        title={<>Automated <C>monitoring</C></>}
       ><>
          <p>Baycode offers cutting-edge cybersecurity services that utilize Security Orchestration, Automation and Response (SOAR) technology to provide automated threat hunting and real-time monitoring. </p><br/>
          <p>SOAR is a powerful tool that utilizes Artificial Intelligence and Machine Learning to proactively identify and respond to potential threats within a network. By leveraging security feed data and host-based agents, our team can quickly and effectively detect and respond to emerging threats, providing increased visibility and security for your organization.</p><br/>
          <p>Trust us to let the technology work for you.</p><br/>
        </>
      </Card>
    }

    welcomeWorkshops={
      <Card
        title={<>Training and <C>Workshops</C></>}
       ><>
          <p>Our expert team offers training and workshops to help individuals and organizations stay safe online, counting per person.</p><br/> 
          <p>Our courses range from beginner-level courses that cover the basics of cyber-security and how to protect against common threats, to more in-depth course for experienced professionals, covering advanced topics such as penetration testing and software development. </p><br/>
          <p>We can tailor a workshop to fit the specific needs of your organization.</p><br/>
        </>
      </Card>
    }
/>}
  
export default LandingPageView