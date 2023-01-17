import FadeIn from "components/animations/FadeIn";
import Layout from "components/layout/layout"
import styles from "./custom-software-template.module.scss"

const CustomSoftwareTemplate = (props) => {
    return <Layout>
        <div className={styles.customSoftwareTemplate}>
            <FadeIn>
                <div className={styles.limitlessPossibilities}>
                    {props.limitlessPossibilities}
                </div>
            </FadeIn>
            <FadeIn toLeft>
                <div className={styles.kanban}>    
                    {props.kanban}
                </div>
            </FadeIn>
            <FadeIn>
                <div className={styles.process}>
                    {props.process}
                </div>
            </FadeIn>
            <div className={styles.cta}>
                {props.cta}
            </div>
        </div>
    </Layout>
}

export default CustomSoftwareTemplate;