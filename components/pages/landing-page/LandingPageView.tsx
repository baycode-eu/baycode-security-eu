import LandingPageTemplate from "./LandingPageTemplate";
import dalle1 from "public/dalle1.png"
import Image from "next/image";
import Hero from "components/landing/Hero";

const LandingPageView = (props) => {
  return <LandingPageTemplate
    hero={
      <Hero/>
    }
    welcomeBaycode={
      <>
        <h2>Who are we</h2> 
        <p>Our mission is to help businesses and organizations secure and grow their systems, as well as protect their data from cyber threats.
        We offer a range of services to identify vulnerabilities, assess risk, and provide solutions for improving security.</p><br/>
        <p>Our team has a deep understanding of the latest cybersecurity technologies and techniques.</p><br/>
        <p>We are committed to staying up-to-date with the latest industry trends and best practices.
        Our expertise helps you succeed with your security needs, whether it be a one-time penetration test or ongoing support.</p>
      </>
    }
    welcomeBaycodeImage={dalle1}  
    welcomePenetrationTest={<>
      <h2>Penetration tests</h2>
      <p>At Baycode Security, we offer both internal and external penetration tests to help businesses and organizations identify vulnerabilities and assess their risk of cyber attack.</p><br/>
      <p>Internal penetration testing, also known as "white box testing," simulates an attack from within an organization's network. This type of testing is useful for identifying vulnerabilities that may be exploited by malicious insiders or attackers who have gained access to the network.</p><br/>
      <p>External penetration testing, also known as "black box testing," simulates an attack from outside an organization's network. This type of testing is useful for identifying vulnerabilities that may be exploited by external attackers who are attempting to gain access to the network from the internet.</p><br/>
      <p>Contact us today to learn more about our internal and external penetration testing services and how they can help protect your business from cyber threats.</p></>}
    welcomePenetrationTestImage={dalle1}
  />
}
  
export default LandingPageView