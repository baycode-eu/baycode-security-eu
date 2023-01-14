import Card from "components/ui/molecules/common/Card";
import React from "react"
import PenetrationTestingTemplate from "./PenetrationTestingPageTemplate"
import C from "components/ui/atoms/ColorText";
import GetQuote from "components/landing/quote/GetQuote";
import { Button } from "components/ui/atoms/button/Button";

const PenetrationTestingView = () => {
    return <PenetrationTestingTemplate
        overview={
            <Card title={<>The <C>process</C> overview</>}>
                <div>
                    <h3>0. Process</h3>
                    <p>   Baycode team will work with you to understand your specific security needs and concerns. Baycode will learn about the key aspects of your infrastructure through a scoping call or sharing of technical diagrams. Based on that information, we will create a quote that outlines the scope of the test, the methods that will be used, and the cost of our services. Our team at Baycode will conduct the assessment, which may include a combination of automated and manual testing methods. After we analyze the data and findings, we will present a report to you. The report will include a summary of our findings, detailed information about each vulnerability, and recommendations for remediation. We will also schedule a report presentation meeting where we can present the report and answer any questions you may have. Our goal is to provide you with a clear, concise, and actionable information to improve your organization security posture.</p><br/>
                    <h3>1. Scoping</h3>
                    <p>   Baycode will gain knowledge about the critical elements of your internal infrastructure through a scoping call or by reviewing technical diagrams shared by you.</p><br/>
                    <h3>2. Proposal</h3>
                    <p>   Baycode will provide you with a formal proposal including all terms and conditions and other crucial information in a secure manner.</p><br/>
                    <h3>3. Reconnaisance</h3>
                    <p>The reconnaissance phase is the initial step in a penetration testing engagement, during which the tester gathers information about the target organization, its systems and networks, and its employees. The goal of reconnaissance is to identify potential vulnerabilities and attack vectors that can be exploited later in the testing process.</p><br/>
                    <h3>4. Exploitation</h3>
                    <p>   The goal of exploitation is to gain unauthorized access to the targeted systems or networks, or to execute malicious actions such as data exfiltration.</p>
                    <p>The exploitation process typically begins by selecting a specific vulnerability or weakness and developing an exploit, which is a piece of code or a set of instructions that can take advantage of that vulnerability. The exploit is then executed against the targeted system or network, which may result in the compromise of that system.</p>
                    <p>Once a system has been compromised, the penetration tester will typically attempt to escalate their access privileges, move laterally within the network, and exfiltrate any sensitive data. The tester will also look for other vulnerabilities that can be exploited.</p><br/>
                    <h3>5. Reporting</h3>
                    <p>   The reporting phase is the final step in a penetration testing engagement, during which the tester compiles and presents all of the findings from the previous phases to the client. The goal of the reporting phase is to provide the client with a clear, concise, and actionable report that includes all of the information they need to understand the vulnerabilities and weaknesses in their systems and networks, and to take steps to remediate them.</p><br/>
                    <p>A penetration testing report will include the following information:</p>
                    <ul>
                        <li>- <b>Executive summary:</b> A high-level overview of the testing scope, findings, and recommendations.</li>
                        <li>- <b>Methodology:</b> A description of the testing methods used and the scope of the engagement.</li>
                        <li>- <b>Findings:</b> A detailed description of all vulnerabilities and weaknesses identified during the testing, including information about the risk level, exploitability, and potential impact of each issue.</li>
                        <li>- <b>Recommendations:</b> Specific steps the client can take to remediate the vulnerabilities and weaknesses identified during the testing.</li>
                        <li>- <b>Appendices:</b> Additional information such as screenshots, network diagrams, and raw data that support the findings and recommendations.</li>
                    </ul><br/>
                    <p>The report will be presented in a clear, concise and easy to understand format, and the tester will be available to answer any questions the client may have. Additionally, a report presentation meeting is usually scheduled where the consultant will present the report and answer any questions the client may have.</p> 
                </div>
            </Card>
        }
        internalInfrastructurePenetrationTestingAssessment={
            <Card title={<>Internal Infrastructure <C>Penetration Testing</C></>}>
                <p>Penetration test of your internal infrastructure will evaluate your vital internal networks to uncover any security flaws and deficiencies. These networks may be used regularly to transmit sensitive information, access vital business services, and store highly confidential data.</p><br/>
                <p>Typically, the starting point of an internal network penetration test is a user with standard access privileges. Internal Penetration test can be followed by External Penetration Test</p><br/>
                <p>Baycode will assess the security posture of various aspects of your internal infrastructure, including:</p>
                <ul>
                    <li>- User Workstations</li>
                    <li>- Servers</li>
                    <li>- WiFi Networks</li>
                    <li>- Access Points</li>
                    <li>- Firewalls</li>
                    <li>- Domain Resources</li>
                    <li>- Database Servers</li>
                    <li>- Network Devices</li>
                    <li>- Employees (behaviors and procedures)</li>
                </ul><br/>
                <p>Because of the way this type of testing is done, it may be necessary to have a consultant physically present to conduct the evaluation. However, this also provides an opportunity to ask questions and gain a deeper understanding of the security status of the environment.</p>
            </Card>
        }
        externalInfrastructurePenetrationTestingAssessment={
            <Card title={<>External Infrastructure <C>Penetration Testing</C></>}>
                <p>Penetration testing of your external infrastructure will evaluate your public-facing networks and systems, such as your web servers, email servers, and other systems that are accessible from the internet. This type of testing will uncover any vulnerabilities or weaknesses that could be exploited by attackers.</p><br/>
                <p>Baycode will assess the security posture of various aspects of your external infrastructure, including:</p>
                <ul>
                    <li>- VPN Gateways</li>
                    <li>- Cloud Services, API's</li>
                    <li>- Network Devices</li>
                    <li>- DNS Servers</li>
                    <li>- Email Servers</li>
                    <li>- Web Servers</li>
                    <li>- Firewalls</li>
                    <li>- Routers</li>
                    <li>- Conducting phishing attacks</li>
                </ul><br/>
                <p>External infrastructure penetration testing is done remotely. This allows the penetration tester to access the systems and networks being tested from a remote location, typically using the same methods that an attacker would use. This can include techniques such as scanning for open ports and vulnerabilities, attempting to exploit known weaknesses, and attempting to gain unauthorized access to the systems and data. Because the testing is done remotely, it does not require a physical presence on site, which can be more cost-effective and efficient for the client.</p>
            </Card>
        }
        cta={
            <>
                <GetQuote
                    textQuoteDevelopment={<h2>Get a quote and improve your security posture now</h2>}
                    getQuote={<Button primary>Get a Quote</Button>}
                 />
            </>
        }
    />
}

export default PenetrationTestingView;