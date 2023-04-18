import styled from "styled-components";

// TODO Mudar nome para Spacer 
// Tipando os props do StyledComponents 
export interface StyledWrapperProps {
  width?: string,
  height?: string,
  children?: any
}

const StyledWrapper = styled.div<StyledWrapperProps>`
background-color:lightslategray;
padding: 2rem;
width: ${(props) => props.width || '30rem'};
height: ${(props) => props.height || '30rem'};
`


export default StyledWrapper