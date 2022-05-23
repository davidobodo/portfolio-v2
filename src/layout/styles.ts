import styled from "styled-components";

export const LayoutContainer = styled.div`
    height: calc(100vh - 90px);
    // background-color: #1f2743;
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
    padding: 0 10vw;
    height: 100%;

    @media (max-width: 765px) {
        padding: 80px 20px 0px;
        height: auto;
    }
`;
