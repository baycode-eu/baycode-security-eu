import Layout from "components/layout/layout";
import React from "react"
import QuoteForm from "./forms/QuoteForm";
import styles from "./quote.module.scss"
import C from "components/ui/atoms/ColorText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'
import FadeIn from "components/animations/FadeIn";
import { Button } from "components/ui/atoms/button/Button";

const QuoteView = ({formik}) => {
    return <Layout pageAlternative>
        <FadeIn>
            <div className={[styles.quoteView, ].join(' ')}>
                <div className={styles.quote}>
                    <div className={[styles.contactUs, styles.section].join(" ")}>
                        <h3 className={styles.contactUsHeadline}>Contact <C>us</C></h3>
                        <div className={styles.email}>
                           Contact Form
			            </div>
                        <div>
                            <p>Feel free to use the secure contact form to reach us instantly.</p><br/>
                            <h3>FAQ </h3><br/>
                            <h3>Information Needed</h3><br/>
                            <p>Please provide your email address. If you prefer an alternative channel, include the contact information in the Full Name field with a dummy email for a prompt response. I made this field required so you do not forget to fill in the information I will use to contact you back.</p><br/>
                            <p>Thanks for reaching out! :) </p><br/>
                            <p><b>Now that you have all this information, feel free to try the contact form!</b></p>
                        </div>
                        <div style={{marginTop: "32px"}}>
                            <a style={{marginRight: "32px"}} href="https://github.com/krystianbajno">
                                <Button smol primary>
                                    Visit GitHub
                                </Button>
                            </a>
                            <a href="https://www.linkedin.com/in/krystianbajno">
                                <Button smol primary>
                                    Visit LinkedIn
                                </Button>
                            </a>
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
