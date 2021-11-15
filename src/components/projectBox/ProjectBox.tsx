import React, { FC } from "react";
import styled from "styled-components";

interface Props {
    height: number;
}
const StyledProjectBox = styled.div<Props>`
    // min-height: 60rem;
    background-color: red;
    border-radius: 1rem;
    padding: 2rem;
    height: ${({ height }) => height + "px"};
    margin-bottom: 2rem;
`;
const ProjectBox: FC<Props> = ({ height }) => {
    return <StyledProjectBox height={height}>fadjlkasdfj</StyledProjectBox>;
};

export default ProjectBox;
