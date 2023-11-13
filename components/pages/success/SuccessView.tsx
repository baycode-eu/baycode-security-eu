import Layout from "components/layout/layout";
import React from "react"
import styles from "./success.module.scss"
import FadeIn from "components/animations/FadeIn";
import { Button } from "components/ui/atoms/button/Button";

const SuccessView = (props) => {
    return <Layout pageAlternative>
        <FadeIn>
            <div className={[styles.successView, ].join(' ')}>
                <h1 className={styles.success}>Success</h1>
                <h3 className={styles.respond}>I will respond to you soon</h3>
                <a href="/">
                    <Button class={styles.goBackButton} primary>Continue</Button>
                </a>
            </div>
        </FadeIn>
    </Layout>
}

export default SuccessView;