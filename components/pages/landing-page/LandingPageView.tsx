import LandingPageTemplate from "./LandingPageTemplate";
import dalle1 from "public/dalle1.png";
import hacker from "public/hacker2.png";
import hackersuit from "public/hackersuit.png";
import locked from "public/locked.png";
import builder from "public/builder.png";
import Hero from "components/landing/Hero";
import Card from "components/ui/molecules/common/Card";

const LandingPageView = (props) => {
  return <LandingPageTemplate
    welcomeBaycodeImage={hacker}  
    welcomeSoftwareEngineeringImage={builder}
    welcomeDevelopedApplicationsSecurityImage={dalle1}
    welcomePenetrationTestImage={locked}
    welcomeSoarSiemImage={hackersuit}

    hero={
      <Hero
        title={"experience"}
        subtitle={"peace of mind"}
      />
    }

    welcomeBaycode={
      <Card
        title={<>>_Who are <span style={{color: "#0080e3ff"}}>we</span></>}
        ><><p>Our mission is to help businesses and organizations secure and grow their systems, as well as protect their data from cyber threats. We offer a range of services to identify vulnerabilities, assess risk, and provide solutions for improving security.</p><br/>
          <p>Our team  has a deep understanding of the latest cybersecurity technologies and techniques, as well as extensive experience in software development.</p><br/>
          <p>We are committed to staying up-to-date with the latest industry trends and best practices. </p><br/>
          <p>Our expertise helps you succeed with your security and software development needs, whether it be a one-time penetration test or ongoing support.</p></>
      </Card>
    }

    welcomePenetrationTest={
      <Card title={<>Penetration <span style={{color: "#0080e3ff"}}>Tests</span> </>}>
        <><p>We offer both internal and external penetration tests to help businesses and organizations identify vulnerabilities and assess their risk of cyber attack.</p><br/>
        <p>Internal penetration testing, also known as "white box testing," simulates an attack from within an organization's network. This type of testing is useful for identifying vulnerabilities that may be exploited by malicious insiders or attackers who have gained access to the network.</p><br/>
        <p>External penetration testing, also known as "black box testing," simulates an attack from outside an organization's network. This type of testing is useful for identifying vulnerabilities that may be exploited by external attackers who are attempting to gain access to the network from the internet.</p><br/>
        <p>Contact us today to learn more about our internal and external penetration testing services and how they can help protect your business from cyber threats.</p></>
      </Card>
    }

    welcomeSoftwareEngineering={
      <Card
        title={<>Software<span style={{color: "#0080e3ff"}}> Engineering</span></>}
        >
        <><p>We believe in the power of agile software development methodologies to deliver high-quality software on time and on budget. Agile methodologies, such as Scrum and Kanban, are designed to be flexible, responsive, and customer-focused, allowing for rapid development and delivery of software products.</p><br/>
        <p>In an agile software development process, teams work in short sprints, focusing on delivering small increments of software that add value to the end user. This approach allows for quick feedback and iteration, resulting in a product that is more closely aligned with the needs and desires of the customer.</p><br/>
        <p>We deliver APIs that allow different systems and applications to communicate with each other. This is an essential part of modern software development and is often used to create integrations between different systems or to expose data and functionality to third parties.</p><br/>
        <p>Whether you need a custom business application, a frontend for a web application, mobile application, or a backend to power an API, our team has the skills and expertise to help you succeed. Contact us today to learn more about our software development services and how we can help bring your project to life.</p><br/></>
      </Card>  
    }

    welcomeDevelopedApplicationsSecurity={
      <Card
        title={"App Security Testing and Code Review"}
      > <><p>We understand the importance of testing the security of developed applications and the role that code review plays in this process. In today's digital landscape, it is crucial for businesses and organizations to ensure that their software is secure and protected from potential cyber threats.</p><br/>
          <p>By testing the security of your developed applications and conducting thorough code reviews, you can ensure that your software is robust and resistant to potential threats. This not only protects your business and your customers, but it also helps to maintain trust and confidence in your products and services.</p><br/>
          <p>When integrating these practices into your workflow, you can identify and address vulnerabilities early on, resulting in a more secure and reliable final product.</p><br/>
          <p>Contact us today to learn more about our app security testing services and how they can help protect your business from cyber threats.</p><br/>
      </></Card>
    }

    welcomeSoarSiem={
      <Card
        title={"Baycode Security: Your Trusted Cybersecurity Partner"}
       > <>
            <p>We offer a range of cybersecurity services designed to help businesses and organizations protect their systems and data from cyber threats. One of the services we offer is SOAR (Security, Orchestration, Automation, and Response), which helps organizations automate and streamline their security processes.</p><br/>
            <p>SOAR is a powerful tool that can help businesses and organizations improve their security posture and respond more effectively to cyber threats. By automating routine tasks and providing a centralized platform for managing security incidents, SOAR can save time and resources, allowing security teams to focus on more critical tasks.</p><br/>
            <p>In addition to SOAR, we also offer SIEM (Security Information and Event Management) and threat hunting services. SIEM is a security tool that helps organizations monitor their systems for security events and alert them to potential threats. Threat hunting, on the other hand, involves proactively searching for and identifying potential threats within an organization's network.</p><br/>
            <p>At Baycode Security, we also have expertise in cloud development and cloud security. We can help you design and develop cloud-based solutions that are secure and compliant with industry standards. Additionally, we are skilled in securing cloud environments, including those built on Microsoft Azure.</p><br/>
            <p>Contact us today to learn more about our SOAR, SIEM, threat hunting, cloud development, and cloud security services and how they can help protect your business from cyber threats.</p>
        </>
      </Card>
    }
/>}
  
export default LandingPageView