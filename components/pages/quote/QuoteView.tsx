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
                        <p>Feel free to use the secure contact form to reach me out instantly.</p><br/>
                        <h3>Information Needed:</h3><br/>
                        <p>Please provide your email address. If using an alternative like XMPP, include the contact in the Full Name field with a dummy email for a prompt response. I made this field required so you do not forget to fill in the information I will use to contact you back.</p><br/>
                        <h3>How it Works:</h3><br/>
                        <p>Your message is AES-256 CBC encrypted using a randomly generated symmetric key, and sent securely through Vercel serverless cloud function to a Telegram bot. The bot stores the encrypted message along with RSA encrypted symmetric key and notifies me. I receive the message as soon as you click the submit button. I decrypt the key using my offline private key, and next decrypt the message using the symmetric key. Why do I share the specifics of working with you? To be fully transparent with you from the beginning. Exposing the algorithm does not hurt the encryption. As long as the private key is not known, the system is secure.</p><br/>
                        <h3>Data Storage:</h3><br/>
                        <p>Your encrypted contact info is only in a private Telegram chat room. It's not sent elsewhere without your permission.</p><br/>
                        <h3>Key Loss Impact:</h3><br/>
                        <p>If the private key is lost, previous messages become unreadable, like an inaccessible crypto wallet. In such occurance, I regenerate a new RSA pair and update the cloud function to bring back the form being operational.</p><br/>
                        <h3>Security Measures:</h3><br/>
                        <p>A breach of the cloud account or Telegram account won't expose data. Attackers get only public key or mangled data, the private key is being stored safely offline. There is no confidential information stored on this website, nor accessible from cloud provider.</p><br/>
                        <h3>Website Functionality:</h3><br/>
                        <p>The serverless website, like the cloud function, reboots from Vercel storage when accessed. No permanent hosting or visitor logging.</p><br/>
                        <p>Thanks for reaching out! :) </p><br/>
                        <p><b>Now that you have all this information, feel free to try the contact form!</b></p>
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