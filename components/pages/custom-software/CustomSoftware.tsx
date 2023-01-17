import Card from "components/ui/molecules/common/Card";
import React from "react"
import CustomSoftwareTemplate from "./CustomSoftwareTemplate"
import C from "components/ui/atoms/ColorText";
import GetQuote from "components/landing/quote/GetQuote";
import { Button } from "components/ui/atoms/button/Button";

const CustomSoftwareView = () => {
    return <CustomSoftwareTemplate
        cta={
            <>
                <GetQuote
                    textQuoteDevelopment={"Get a quote and take the first step towards achieving your goals"}
                    getQuote={<Button primary>Get a Quote</Button>}
                 />
            </>
        }
    />
}

export default CustomSoftwareView;