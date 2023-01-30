import Card from "components/ui/molecules/common/Card";
import React from "react"
import CustomSoftwareTemplate from "./CustomSoftwareTemplate"
import C from "components/ui/atoms/ColorText";
import GetQuote from "components/landing/quote/GetQuote";
import { Button } from "components/ui/atoms/button/Button";
import agile from "public/agile.png"
import styles from "./custom-software-template.module.scss"

const CustomSoftwareView = () => {
    return <CustomSoftwareTemplate
        limitlessPossibilities={
            <Card title={<>Tailored <C>Solutions</C></>}>
                <p>Our team of experts specializes in delivering custom software solutions that meet your unique needs. Whether you need a frontend for a web application, a backend to power your API, a mobile application, or cloud-based solutions, we have the skills and expertise to bring your vision to life. We use agile development methodologies to ensure rapid delivery and flexibility, and our solutions are designed to be user-friendly and secure.</p>
            </Card>
        }
        kanban={<Card title={<>Agile + <C>Scrum</C></>}>
            <p>We believe in the power of agile software development methodologies to deliver high-quality software on time and on budget. Agile methodologies, such as Scrum and Kanban, are designed to be flexible, responsive, and customer-focused, allowing for rapid development and delivery of software products. Our team works in short sprints, focusing on delivering small increments of software that add value to the end user. This approach allows for quick feedback and iteration, resulting in a product that is more closely aligned with the needs and desires of the customer.</p>
        </Card>}
        process={<Card title={<>The <C>process</C> overview</>}>
            <p>Our software engineering process is designed to deliver custom solutions that meet your unique needs. </p>
            <div className={styles.agileImage}>
                <img alt="Agile process" src={agile.src}/>
            </div> 
            <h3>0. Consultation and Requirements Gathering:</h3>
            <p>The process begins with a consultation, where we work with you to understand your requirements and goals.</p><br/>
            <h3>1. Analysis and Risk Assessment:</h3>
            <p>We conduct a thorough analysis of the project and assess any potential risks.</p><br/>
            <h3>2. Design and Planning</h3>
            <p>Based on the analysis, we design a solution that aligns with your requirements and goals. The solution proposal quote is sent to you.</p><br/>
            <h3>3. Implementation and Development</h3>
            <p>Our team of experts begins implementation using agile development methodologies for rapid delivery and flexibility. The sprint results are presented to you every two weeks.</p><br/>
            <h3>4. Testing and Quality Assurance:</h3>
            <p>We involve you in the testing phase to ensure that the final product meets your expectations.</p><br/>
            <h3>5. Support and Maintenance</h3>
            <p>We provide support and maintenance to ensure the smooth operation of the solution.</p><br/>
            <p>We understand the importance of communication and collaboration throughout the software development process. That's why we keep you updated every step of the way and involve you in the decision-making process, to ensure that the final product meets your needs and exceeds your expectations.</p>
        </Card>}
        cta={
            <><a href="/quote" >
                <GetQuote
                    textQuoteDevelopment={"Get a quote and take the first step towards achieving your goals"}
                    getQuote={<Button primary>Get a Quote</Button>}
                 /></a>
            </>
        }
    />
}

export default CustomSoftwareView;