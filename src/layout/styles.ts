import styled from "styled-components";

export const LayoutContainer = styled.div`
    height: 100vh;
    background-color: #1f2743;
    color: #fff;

    .contact__links-wrapper {
        position: fixed;
        // background-color: #fff;
        z-index: 10;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);

        i {
            font-size: 5rem;
            color: red;
        }
    }
`;

export const Body = styled.div`
    min-height: calc(100vh - 140px);
    padding: 0 10vw;

    @media (max-width: 765px) {
        padding: 80px 20px 0px;
        height: auto;
    }
`;
