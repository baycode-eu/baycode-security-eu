import LandingPageTemplate from "./LandingPageTemplate";
import hacker from "public/hacker.png";
import hackersuit from "public/hackersuit.png";
import locked from "public/locked.png";
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
      title={"Your security,"}
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
    welcomeSoarSiemImage={hackersuit}
    welcomeWorkshopsImage={hacker}
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
        textQuoteDevelopment={""}
        getQuote={
          <Button primary big>
            Browse workshops
          </Button>
        }
      />
    }

    welcomeBaycode={
      <Card
        title={<>How we can <C>help you</C></>}
        ><><p>Our mission is to help businesses and organizations secure and grow their systems, as well as protect their data from cyber threats. We offer a range of services to identify vulnerabilities, assess risk, and provide solutions for improving security and business.</p><br/>
          <p>We have a deep understanding of the latest cybersecurity technologies and techniques, as well as extensive experience in software development.</p><br/>
          <p>Commitment to staying up-to-date with the latest industry trends and best practices, in order to secure you is our priority. </p><br/>
          <p>Our expertise helps you succeed with your needs, whether it be a one-time penetration test, or ongoing support.</p></>
      </Card>
    }

    welcomePenetrationTest={
      <Card title={<>Penetration <C>Tests</C> </>}>
        <><p>We offer both internal and external penetration tests to help businesses and organizations identify vulnerabilities and assess their risk of cyber attack.</p><br/>
        <p>Internal penetration testing, also known as "white box testing", simulates an attack from within an organization's network. This type of testing is useful for identifying vulnerabilities that may be exploited by malicious insiders or attackers who have gained access to the network.</p><br/>
        <p>External penetration testing, also known as "black box testing", simulates an attack from outside an organization's network. This type of testing is useful for identifying vulnerabilities that may be exploited by external attackers who are attempting to gain access to the network from the internet.</p><br/>
        <p>Contact us today to learn more about our internal and external penetration testing services and how they can help protect your business from cyber threats.</p></>
      </Card>
    }

    welcomeSoftwareEngineering={
      <Card
        title={<>Custom <C>Software</C></>}
        >
        <><p>We believe in the power of agile software development methodologies to deliver high-quality software on time and on budget. Agile methodologies, such as Scrum and Kanban, are designed to be flexible, responsive, and customer-focused, allowing for rapid development and delivery of software products.</p><br/>
        <p>In an agile software development process, teams work in short sprints, focusing on delivering small increments of software that add value to the end user. This approach allows for quick feedback and iteration, resulting in a product that is more closely aligned with the needs and desires of the customer.</p><br/>
        <p>We deliver APIs that allow different systems and applications to communicate with each other. This is an essential part of modern software development and is often used to create integrations between different systems or to expose data and functionality to third parties.</p><br/>
        <p>Our expertise in cloud development and cloud security allows us to deliever secure, compliant cloud-based solutions, including those built on Microsoft Azure.</p><br/>
        <p>Whether you need a custom business application, a frontend for a web application, mobile application, or a backend to power an API, our team has the skills and expertise to help you succeed. Whatever you need, we get you there.</p><br/></>
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
          <p>Baycode Security offers cybersecurity automate cyber-monitoring services including implementing SOAR, which is a powerful tool that helps organizations automate and streamline their security processes.</p><br/>
          <p>SOAR automatically adjusts it's rules based on security feed data, interpretes the results, and proactively seeks for emerging threats.</p><br/>
          <p>We also offer threat hunting services, which involves proactively searching for, and identifying potential threats within an organization's network. </p><br/>
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
          <p>Press the button below to browse available workshops and dates, or order a custom workshop.</p><br/>
        </>
      </Card>
    }
/>}
  
export default LandingPageView