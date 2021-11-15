import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #faf9f9;
    color: #000;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 8rem;
    position: sticky;
    top: 0px;
    z-index: 10;

    @media (max-width: 765px) {
        position: fixed;
        z-index: 1;
    }

    ul {
        display: flex;
        align-items: center;
        height: 100%;
        list-style: none;

        li {
            a {
                text-decoration: none;
                margin-right: 2.4rem;
                font-size: 1.6rem;
                color: #000;

                &:hover {
                    text-decoration: underline;
                }
            }

            &:last-child {
                a {
                    margin-right: 0px;
                }
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div>OD</div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </HeaderContainer>
    );
};

export default Header;
