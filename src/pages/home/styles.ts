import styled from "styled-components";

export const StyledHome2 = styled.div`
    display: flex;
    // flex-direction: column;
    // align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.textColor};
    height: 100%;
    // padding-top: 25rem;

    .left-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

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

        h3 {
            text-transform: uppercase;
            margin-bottom: 2.4rem;
        }

        h4 {
            // width: 50%;
            margin-left: auto;
            margin-right: auto;
            font-size: 2rem;
            font-weight: 400;
            line-height: 2.8rem;
            // text-align: center;
            margin-bottom: 2.4rem;
        }

        button {
            padding: 1rem 40px;
            border-radius: 3rem;
            border: 0px;
            background-color: ${({ theme }) => theme.colors.textColor};
            cursor: pointer;
        }
    }

    .right-section {
        flex: 1;
        flex-shrink: 0;

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            align-items: flex-end;

            li {
                font-size: 24px;
                margin-bottom: 2.4rem;
                font-style: italic;

                label {
                    margin-right: 1.6rem;
                }
            }
        }
    }
`;
