import styled from "styled-components";

export interface StyledSpacerProps {
  width?: string,
  height?: string,
  flex?: string,
}

const StyledSpacer = styled.div<StyledSpacerProps>`
width: ${(props) => props.width || '1rem'};
height: ${(props) => props.height || '1rem'};
flex: ${(props) => props.flex};
`


export default StyledSpacer

