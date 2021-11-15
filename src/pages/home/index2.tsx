import React from "react";
import Layout from "../../layout";

import { StyledHome2 } from "./styles";
const index2 = () => {
    return (
        <Layout isFooterPresent={true}>
            <StyledHome2>
                <h1>Hi, my name is </h1>
                <h2>Obodo David.</h2>
                <h2>I build things for the web.</h2>
                <h4>
                    I’m a software engineer specializing in building (and occasionally designing) exceptional digital
                    experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                </h4>
            </StyledHome2>
        </Layout>
    );
};

export default index2;
