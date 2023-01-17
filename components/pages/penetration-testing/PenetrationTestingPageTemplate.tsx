import FadeIn from "components/animations/FadeIn";
import Layout from "components/layout/layout"
import styles from "./penetration-testing-template.module.scss"

const PenetrationTestingTemplate = (props) => {
    return <Layout>
        <div className={styles.penetrationTestingTemplate}>
            <FadeIn toLeft>
                <div className={styles.webApplicationTesting}>
                    {props.webPenetrationTest}
                </div>
            </FadeIn>
            <FadeIn>
                <div className={styles.penetrationTestingAssessment}>
                    <div className={styles.penetrationTestingInternalAssessment}>
                        {props.internalInfrastructurePenetrationTestingAssessment}
                    </div>
                    <div className={styles.penetrationTestingExternalAssessment}>
                        {props.externalInfrastructurePenetrationTestingAssessment}
                    </div>
                </div>
            </FadeIn>
            {/* <FadeIn toLeft>
                <div className={styles.mobilePenetrationTest}>
                    {props.mobilePenetrationTest}
                </div>
            </FadeIn> */}
            <FadeIn toLeft>
                <div className={styles.process}>
                    {props.overview}
                </div>
            </FadeIn>

            <div className={styles.cta}>
                {props.cta}
            </div>
        </div>
    </Layout>
}

export default PenetrationTestingTemplate;