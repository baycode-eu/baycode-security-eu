import Layout from "components/layout/layout"
import styles from "./penetration-testing-template.module.scss"

const PenetrationTestingTemplate = (props) => {
    return <Layout>
        <div className={styles.penetrationTestingTemplate}>
            <div className={styles.penetrationTestingAssessment}>
                <div className={styles.penetrationTestingInternalAssessment}>
                    {props.internalInfrastructurePenetrationTestingAssessment}
                </div>
                <div className={styles.penetrationTestingExternalAssessment}>
                    {props.externalInfrastructurePenetrationTestingAssessment}
                </div>
            </div>
            <div className={styles.process}>
                {props.overview}
            </div>
            <div className={styles.cta}>
                {props.cta}
            </div>
        </div>
    </Layout>
}

export default PenetrationTestingTemplate;