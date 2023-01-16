import LandingPageTemplate from "./LandingPageTemplate";
import hacker from "public/hacker-3.png";
import hackersuit from "public/hackersuit.png";
import locked from "public/locked.png";
import lockedKey from "public/lockedkey.png";
import builder from "public/builder.png";
import review from "public/review.png";
import Card from "components/ui/molecules/common/Card";
import Hero from "components/landing/Hero";
import C from "components/ui/atoms/ColorText";
import GetQuote from "components/landing/quote/GetQuote";
import { Button } from "components/ui/atoms/button/Button";
import BlogCarousel from "components/carousel/BlogCarousel";

const LandingPageView = (props: any) => {
  return <LandingPageTemplate
    hero={<Hero
      title={"Your business,"}
      subtitle={"our expertise"}
      getQuote={<GetQuote
        textQuoteDevelopment={""}
        getQuote={
          <Button primary>
            Get a free quote
          </Button>
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
        <Button primary>
          Get a free quote
        </Button>
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
        <><p>We offer both internal and external penetration tests to help businesses and organizations identify vulnerabilities and assess their risk of cyber attack.</p><br/>
        <p>Internal penetration testing simulates an attack from within an organization's network. This type of testing is useful for identifying vulnerabilities that may be exploited by malicious insiders or attackers who have gained access to the network.</p><br/>
        <p>External penetration testing simulates an attack from outside an organization's network. This type of testing is useful for identifying vulnerabilities that may be exploited by external attackers who are attempting to gain access to the network from the internet.</p><br/>
        <p>Contact us to learn more about our internal and external penetration testing services and how they can help protect your business from cyber threats.</p></>
      </Card>
    }

    welcomeSoftwareEngineering={
      <Card
        title={<>Custom <C>Software</C></>}
        >
        <><p>We believe in the power of agile software development methodologies to deliver high-quality software on time and on budget. Agile methodologies, such as Scrum and Kanban, are designed to be flexible, responsive, and customer-focused, allowing for rapid development and delivery of software products. Our team works in short sprints, focusing on delivering small increments of software that add value to the end user. This approach allows for quick feedback and iteration, resulting in a product that is more closely aligned with the needs and desires of the customer.</p><br/>
        <p>We deliver APIs that allow different systems and applications to communicate with each other. This is an essential part of modern software development and is often used to create integrations between different systems or to expose data and functionality to third parties. Additionally, our expertise in cloud development and cloud security allows us to deliver secure, compliant cloud-based solutions, including those built on Microsoft Azure.</p><br/>
        <p>We have the skills and expertise to help you succeed in any kind of software development project, whether it is a custom business application, a frontend for a web application, mobile application, or a backend to power an API. We are committed to delivering high-quality, secure and user-friendly software, whatever your needs are, we have the team that will help you get there.</p></>
      </Card>  
    }

    welcomeDevelopedApplicationsSecurity={
      <Card
        title={<>Code <C>Review</C></>}
      > <><p>We understand the importance of testing the security of developed applications and the role that code review plays in this process. In today's digital landscape, it is crucial for businesses and organizations to ensure that their software is secure and protected from potential cyber threats.</p><br/>
          <p>By testing the security of your developed applications and conducting thorough code reviews, you can ensure that your software is robust and resistant to potential threats. This not only protects your business and your customers, but it also helps to maintain trust and confidence in your products and services.</p><br/>
          <p>When integrating these practices into your workflow, you can identify and address vulnerabilities early on, resulting in a more secure and reliable final product.</p><br/>
          <p>Contact us today to learn more about our app security testing services and how they can help protect your business from cyber threats.</p><br/>
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