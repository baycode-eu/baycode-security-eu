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
                        <h3 className={styles.contactUsHeadline}>Contact <C>us</C></h3>
                        <div className={styles.email}>
                            <a href="mailto:info@baycode.eu"><FontAwesomeIcon width={32} icon={faEnvelope}/></a>
                            <a href="mailto:info@baycode.eu">info@baycode.eu</a>
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