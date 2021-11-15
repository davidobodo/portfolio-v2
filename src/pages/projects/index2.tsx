import React from "react";
import Layout from "../../layout";

import { StyledProject2 } from "./styles";

import ProjectBox from "../../components/projectBox/ProjectBox";
const index2 = () => {
    function randomIntFromInterval(min: number, max: number) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <Layout isFooterPresent={true}>
            <StyledProject2>
                <div className="cards-wrapper">
                    <div className="column">
                        {[1, 2, 3, 4, 5, 6].map((item) => {
                            let height;

                            if (item % 2 === 0) {
                                height = randomIntFromInterval(400, 600);
                            } else {
                                height = randomIntFromInterval(200, 300);
                            }
                            return <ProjectBox key={item} height={height} />;
                        })}
                    </div>
                    <div className="column">
                        {[1, 2, 3, 4, 5, 6].map((item) => {
                            let height;

                            if (item % 2 !== 0) {
                                height = randomIntFromInterval(400, 600);
                            } else {
                                height = randomIntFromInterval(200, 300);
                            }
                            return <ProjectBox key={item} height={height} />;
                        })}
                    </div>
                    <div className="column">
                        {[1, 2, 3, 4, 5, 6].map((item) => {
                            let height;

                            if (item % 2 === 0) {
                                height = randomIntFromInterval(400, 600);
                            } else {
                                height = randomIntFromInterval(200, 300);
                            }
                            return <ProjectBox key={item} height={height} />;
                        })}
                    </div>
                </div>
            </StyledProject2>
        </Layout>
    );
};

export default index2;
