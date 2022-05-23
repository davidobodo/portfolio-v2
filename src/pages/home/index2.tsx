import React from "react";
import Layout from "../../layout";

import { StyledHome2 } from "./styles";
const index2 = () => {
    return (
        <Layout isFooterPresent={true}>
            <StyledHome2>
                <div className="left-section">
                    <h1>Hi, my name is </h1>
                    <h2>Obodo David.</h2>
                    {/* <h2>I build things for the web.</h2> */}

                    <h3>Front - End Developer</h3>
                    {/* <h4>
                        I’m a software engineer specializing in building (and occasionally designing) exceptional
                        digital experiences.
                    </h4> */}

                    <button>Hire Me</button>
                </div>
                <div className="right-section">
                    <ul>
                        <li>
                            <label htmlFor="">Translate designs with Pixel Perfection</label>
                            <input type="checkbox" />
                        </li>
                        <li>
                            <label htmlFor="">Responsive Design</label>
                            <input type="checkbox" />
                        </li>
                        <li>
                            <label htmlFor="">Performance</label>
                            <input type="checkbox" />
                        </li>
                        <li>
                            <label htmlFor="">Accessibility</label>
                            <input type="checkbox" />
                        </li>
                        <li>
                            <label htmlFor="">SEO</label>
                            <input type="checkbox" />
                        </li>
                        <li>
                            <label htmlFor="">API Connections</label>
                            <input type="checkbox" />
                        </li>
                        <li>
                            <label htmlFor="">Caching</label>
                            <input type="checkbox" />
                        </li>
                        <li>
                            <label htmlFor="">Clean Code</label>
                            <input type="checkbox" />
                        </li>
                        <li>
                            <label htmlFor="">SOLID principles</label>
                            <input type="checkbox" />
                        </li>
                        <li>
                            <label htmlFor="">Effective Communication</label>
                            <input type="checkbox" />
                        </li>
                        <li>
                            <label htmlFor="">Best Practices</label>
                            <input type="checkbox" />
                        </li>
                    </ul>
                </div>
            </StyledHome2>
        </Layout>
    );
};

export default index2;
