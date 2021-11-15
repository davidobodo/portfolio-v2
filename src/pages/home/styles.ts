import styled from "styled-components";

export const StyledHome2 = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    height: calc(100vh - 7rem);
    color: ${({ theme }) => theme.colors.textColor};
    text-align: center;
    // padding-top: 25rem;

    h1 {
        margin-bottom: 2.4rem;
        font-size: 1.6rem;
        font-weight: 400;
    }

    h2 {
        margin-bottom: 2.4rem;
        font-size: 8rem;
        color: ${({ theme }) => theme.colors.textColor2};

        &:first-of-type {
            color: ${({ theme }) => theme.colors.textColor};
        }
    }

    h4 {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        font-size: 2rem;
        font-weight: 400;
        line-height: 2.8rem;
        // text-align: center;
    }
`;
