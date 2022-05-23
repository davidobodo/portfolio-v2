import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo";

const HeaderContainer = styled.div`
    width: 100%;
    height: 90px;
    // background-color: #faf9f9;
    color: #fff;
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

    .logo-wrapper {
        svg {
            width: 8rem;
            height: 4rem;
        }
    }

    ul {
        display: flex;
        align-items: center;
        height: 100%;
        list-style: none;

        li {
            a {
                text-decoration: none;
                margin-right: 2rem;
                font-size: 1.6rem;
                padding: 12px 20px;
                color: ${({ theme }) => theme.colors.textColor};

                &:hover {
                    background-color: red;
                    border-radius: 1rem;
                }
            }
        }

        button {
            color: #fff;
            font-size: 1.6rem;
            background-color: transparent;
            border: 0px;
            padding: 12px 20px;
            color: ${({ theme }) => theme.colors.textColor};

            &:hover {
                background-color: red;
                border-radius: 1rem;
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Link className="logo-wrapper" to="/">
                <Logo color="rgb(204, 214, 246)" />
            </Link>
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
                <button>Resume</button>
            </ul>
        </HeaderContainer>
    );
};

export default Header;
