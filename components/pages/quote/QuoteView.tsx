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
                            <p>Or use the contact form to notify me instantly</p><br/>
                            <h3>What information do I to respond back?</h3><br/>
                            <p>Please provide your email address for communication. If you prefer an alternative method (XMPP etc.), enter it in the Full Name field along with a placeholder dummie email address. This field is mandatory to ensure you don't forget to fill it, and receive a response. Thank you!</p><br/>
                            <h3>How does it work?</h3><br/>
                            <p>Your message will be random symmetric key AES-256 bit encrypted, and sent via a secure serverless Next.js cloud function to a Telegram bot, which will store the encrypted message and a public key encrypted symmetric key in a specific chat room and notify me. I'll retrieve, and decrypt your message using a custom client.</p><br/>
                            <h3>Is my <b>encrypted</b> contact information stored anywhere else than in a chat room?</h3><br/>
                            <p>It is not, and I do not send it to no one else than Telegram chat room without your permission. Thank you for reaching out! :)</p>
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