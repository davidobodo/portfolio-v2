import React from "react";
import Layout from "../../layout";
import { ContactContainer } from "./style";

const ALL_CONTACTS = [
    {
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/david-obodo-998786174/",
        label: "https://www.linkedin.com/in/david-obodo-998786174/"
    },
    {
        icon: "fab fa-github-square",
        link: "https://github.com/obododavid",
        label: "https://github.com/obododavid"
    },
    {
        icon: "fas fa-envelope",
        link: "mailto:contact@obododavid.com",
        label: "contact@obododavid.com"
    },
    {
        icon: "fab fa-twitter-square",
        link: "https://twitter.com/phitGeek",
        label: "https://twitter.com/phitGeek"
    }
];

const Contact = () => {
    return (
        <Layout isFooterPresent={false}>
            <ContactContainer>
                <h1 className="contact__header">contact.</h1>
                <p className="contact__subheader">You can contact me through my mail or any of the platforms below:</p>
                <ul className="contact__links-wrapper">
                    {ALL_CONTACTS.map((contact, i) => {
                        const { icon, link, label } = contact;
                        return (
                            <li key={i}>
                                <i className={icon}></i>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </ContactContainer>
        </Layout>
    );
};

export default Contact;
