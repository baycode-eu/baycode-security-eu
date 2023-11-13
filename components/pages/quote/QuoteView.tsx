import Layout from "components/layout/layout";
import React from "react"
import QuoteForm from "./forms/QuoteForm";
import styles from "./quote.module.scss"
import C from "components/ui/atoms/ColorText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'
import FadeIn from "components/animations/FadeIn";

const QuoteView = ({formik}) => {
    return <Layout pageAlternative>
        <FadeIn>
            <div className={[styles.quoteView, ].join(' ')}>
                <div className={styles.quote}>
                    <div className={[styles.contactUs, styles.section].join(" ")}>
                        <h3 className={styles.contactUsHeadline}>Contact <C>me</C></h3>
                        <div className={styles.email}>
                            <a href="mailto:info@baycode.eu"><FontAwesomeIcon width={32} icon={faEnvelope}/></a>
                            <a href="mailto:info@baycode.eu">info@baycode.eu</a>
                        </div>
                        <div>
                            <p>Feel free to use the contact form to reach me instantly.</p><br/>
                            <h3>What information do I need to respond back?</h3><br/>
                            <p>To facilitate communication, please provide your email address. If you have a preference for an alternative method such as XMPP, kindly include it in the Full Name field along with a placeholder dummy email address. This field is mandatory to ensure you don't overlook it and receive a prompt response. Your cooperation is appreciated!</p><br/>
                            <p>Please provide your email address for communication. If you prefer an alternative method (XMPP etc.), enter it in the Full Name field along with a placeholder dummie email address. This field is mandatory to ensure you don't forget to fill it, and receive a response. Thank you!</p><br/>
                            <h3>How does it work?</h3><br/>
                            <p>Your message is random-key encrypted using AES-256, and sent securely through a Vercel cloud function to a Telegram bot. The bot stores the encrypted message alongside with a public-key RSA encrypted symmetric key in a chat room, and notifies me. I retrieve and decrypt the symmetric key using my private key and decrypt the message using symmetric key. The communication is fully secure, the data encrypted, and I have no way to determine who you are if you do not provide me with valid contact information.</p><br/>
                            <h3>Is my <b>encrypted</b> contact information stored anywhere else than in a chat room?</h3><br/>
                            <p>It is not, and I do not send it to no one else than private Telegram chat room without your permission. Your data is on Telegram servers, and remains fully encrypted with the symmetric key. Thank you for reaching out! :)</p><br/>
                            <h3>If the data is unreadable, then what happens when the private key is lost?</h3><br/>
                            <p>That would make all previous messages unreadable, just like a crypto wallet unaccessible. The data is mangled ones and zeroes with no way of recovering it, and Telegram is just an interchangeable communications channel.</p><br/>
                            <h3>How does this website work?</h3><br/>
                            <p>The website is serverless too, like the cloud function. It dies once in a while and reboots itself from Vercel cloud storage when someone opens it. No permanent hosting, and no visitors logging information by me.</p>
                        </div>
                    </div>
                    <div className={[styles.form, styles.section].join(" ")}>
                        <h3 className={styles.getInTouch}>Get <C>in touch</C></h3>
                        <QuoteForm formik={formik}></QuoteForm>
                    </div>
                </div>
            </div>
        </FadeIn>
    </Layout>
}

export default QuoteView;