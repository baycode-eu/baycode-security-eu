import { Button } from "components/ui/atoms/button/Button"
import FormInput from "components/ui/molecules/common/FormInput"
import React from "react"
import styles from "./quote-form.module.scss"
import ReCAPTCHA from "react-google-recaptcha";

const QuoteForm = ({formik}) => {
    // const captchaPublicKey = process.env.CAPTCHA_PUBLIC_KEY
    return <form onSubmit={formik.handleSubmit} className={styles.quoteForm}>
        <div className={styles.row}>
            <FormInput
                title="Full Name"
                id="name"
                type="text"
                name="name"
                onChange={formik.handleChange} 
                value={formik.values.name}
                error={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
            />
            <FormInput 
                title="Email address"
                id="email"
                type="email"
                required
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
            />
        </div>
        <div className={styles.row}>
            <FormInput 
                title="Phone number"
                id="phone"
                type="text"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.touched.phone && formik.errors.phone ? formik.errors.phone : ''}
            />
            <FormInput
                title="Subject"
                required
                id="subject"
                type="text"
                name="subject"
                onChange={formik.handleChange}
                value={formik.values.subject}
                error={formik.touched.subject && formik.errors.subject ? formik.errors.subject : ''}
            />
        </div>
        <div className={styles.row}>
            <FormInput
                title="Message"
                id="message"
                required
                textarea="true"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                error={formik.touched.message && formik.errors.message ? formik.errors.message : ''}
            />
        </div>
        <div className={styles.row} style={{marginBottom: "16px"}}>
            <FormInput
                style={{textAlign:"left"}}
                title="Data processing agreement"
                id="agree"
                name="agree"
                required
                value={formik.values.agree}
                onChange={formik.handleChange}
                type="checkbox"
                label={<>I acknowledge that my data will be processed in accordance with the following <a style={{color: "#3a7afa"}} href="/files/Baycode%20Privacy%20Policy.pdf" alt="Privacy Policy"  target="_blank" rel="noopener noreferrer" >privacy policy</a>.</>}
                error={formik.touched.agree && formik.errors.agree ? formik.errors.agree : ''}
            />
        </div>
        <div className={styles.row}>
            <ReCAPTCHA
                sitekey={"6LeaZjskAAAAAA1Wn-PIo6rL6ZoJl1naoG4iyH5q"}
                onChange={v => formik.setFieldValue('captcha', v)}
            />
        </div>
        <div className={styles.formButtons}>
            <Button primary smol loading={formik.isSubmitting} type="submit">Submit</Button>
        </div>
    </form>
}

export default QuoteForm