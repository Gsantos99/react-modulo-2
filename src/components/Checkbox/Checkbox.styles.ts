import styled from 'styled-components';



export type CheckboxProps = {
  text?: String;
  onChange?: () => void;
  onClick?: () => void;
  checked?: boolean;
}


export const CheckboxContainer = styled.div<CheckboxProps>`
   width: 120px;
   height: 35px;
   padding-left: 5px;
   margin: 20px 4px;
   border-radius: 5px;
   
   background-color: ${props => props.checked ? '#97C160' : '#E5E5E5'};
   
   display: flex;
   align-items: center;

   img {
      display: ${props => props.checked ? 'flex' : 'none'};
   }

`;

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})<CheckboxProps>`
overflow: hidden;
   white-space: nowrap;
   width: 1px;
   height: 1px;
   margin: -1px;
   padding: 0
`;

export const Text = styled.label<CheckboxProps>`
   color: ${props => props.checked ? '#FFF' : '#555'};
   text-decoration: ${props => props.checked ? 'line-through': 'none'}
`;

export const StyledCheckbox = styled.label<CheckboxProps>`
 width: 23px;
   height: 23px;
   margin-right: 6px;
   border-radius: 50%;
   background: #F6F6F6;
   display: flex;
   justify-content: center;
   align-items: center
  
`;

