import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactGA from "react-ga";

import Header from "./header";
import Footer from "./footer";

import Backdrop from "../components/backdrop";
import Hamburger from "../components/hamburger";
import PagesLink from "../components/pagesLinks";

import IconFacebook from "../assets/icons/Facebook";
import IconGithub from "../assets/icons/Github";
import IconLinkedin from "../assets/icons/Linkedin";
import IconTwitter from "../assets/icons/Twitter";
import IconMail from "../assets/icons/Mail";

import { LayoutContainer, Body } from "./styles";

interface Props {
    children: any;
    isFooterPresent: boolean;
}

const ALL_CONTACTS = [
    {
        Icon: IconMail,
        link: "mailto:contact@obododavid.com",
        label: "contact@obododavid.com"
    },
    {
        Icon: IconGithub,
        link: "https://github.com/obododavid",
        label: "https://github.com/obododavid"
    },
    {
        Icon: IconTwitter,
        link: "https://twitter.com/phitGeek",
        label: "https://twitter.com/phitGeek"
    },
    {
        Icon: IconLinkedin,
        link: "https://www.linkedin.com/in/obodo-david-998786174/",
        label: "https://www.linkedin.com/in/obodo-david-998786174/"
    }
];

const Layout: React.FunctionComponent<Props> = ({ children, isFooterPresent }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleShowNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    useEffect(() => {
        ReactGA.initialize("UA-174186535-1");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <LayoutContainer>
            {/* <PagesLink isNavbarOpen={isNavbarOpen} />
            <Backdrop isNavbarOpen={isNavbarOpen} /> */}
            {/* <Hamburger handleShowNavbar={handleShowNavbar} isNavbarOpen={isNavbarOpen} /> */}
            {/* <Header /> */}
            <Body>{children}</Body>
            {/* {isFooterPresent && <Footer />} */}
        </LayoutContainer>
    );
};

export default Layout;

{
    /* <ul className="contact__links-wrapper">
{ALL_CONTACTS.map((contact, i) => {
    const { Icon, link, label } = contact;
    return (
        <li key={i}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Icon />
            </a>
        </li>
    );
})}
</ul> */
}
