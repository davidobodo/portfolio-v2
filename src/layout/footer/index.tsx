import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    // height: 70px;
    background-color: #000000;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 765px) {
        position: static;
    }

    i {
        color: #ffffff;
        font-size: 40px;
        margin-right: 40px;
        cursor: pointer;
    }
`;

const StyledExperiment = styled.div`
    footer {
        text-align: center;
        ul#Contact {
            display: flex;
            justify-content: center;
            margin-top: 10px;
            li {
                width: 60px;
                height: 60px;
                list-style: none;
                margin: 0 50px;
                padding-left: 0;
                transform: rotate(-30deg) skew(25deg);

                a {
                    display: flex;
                    border-bottom: none;
                    width: 100%;
                    height: 100%;
                    position: relative;
                    color: #ffffff;
                    span {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        font-size: 2rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: all 0.5s;
                    }
                }
            }

            li:nth-child(1) {
                span {
                    background: #3b5998;
                }
            }

            li:nth-child(2) {
                span {
                    background: #0073b0;
                }
            }

            li:nth-child(3) {
                span {
                    background: #000000;
                }
            }

            li:hover a {
                span:nth-child(5) {
                    transform: translate(40px, -40px);
                    opacity: 1;
                    color: #ffffff;
                }
            }

            li:hover a {
                span:nth-child(4) {
                    transform: translate(30px, -30px);
                    opacity: 0.8;
                }
            }
            li:hover a {
                span:nth-child(3) {
                    transform: translate(20px, -20px);
                    opacity: 0.6;
                }
            }
            li:hover a {
                span:nth-child(2) {
                    transform: translate(10px, -10px);
                    opacity: 0.4;
                }
            }
            li:hover a {
                span:nth-child(1) {
                    transform: translate(0, 0);
                    opacity: 0.2;
                }
            }
        }
    }
`;

const Footer = () => {
    return (
        <>
            {/* <FooterContainer>
                <a href="https://github.com/obododavid" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github-square"></i>
                </a>
                <a href="https://twitter.com/phitGeek" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/obodo-david-998786174/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </FooterContainer> */}

            <StyledExperiment>
                <footer id="footer">
                    <ul id="Contact">
                        <li>
                            <a href="https://web.facebook.com/david.obodo">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>
                                    <i className="fab fa-facebook"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/obodo-david-998786174/">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>
                                    <i className="fab fa-linkedin"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/obododavid">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>
                                    <i className="fab fa-github"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <p>Gmail : obododavid5@gmail.com</p>
                </footer>
            </StyledExperiment>
        </>
    );
};

export default Footer;
