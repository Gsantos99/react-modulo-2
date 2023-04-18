import React, {useState} from 'react'
import checkIcon from '../../assets/tick.png'
import { Itasks } from '../ListView/types';

import {
   CheckboxContainer,
   HiddenCheckbox,
   StyledCheckbox,
   Text
} from './Checkbox.styles';

interface propsCheckbox {
   title: string
}

const Checkbox = (props: propsCheckbox) => {
  
 const [checked, SetChecked] = useState(false)

 const handleCheckboxChange = () => {
  SetChecked(!checked)
 }

  return (
    <CheckboxContainer 
    checked={checked}
    onClick={handleCheckboxChange}
  >
 <HiddenCheckbox 
    onChange={handleCheckboxChange}
    checked={checked}
 />
 <StyledCheckbox checked={checked}> 
         <img
            alt="tick icon"
            style={{width: '15px'}}
            src={checkIcon}
         />
 </StyledCheckbox>
 <Text checked={checked}>{props.title}</Text>
 </CheckboxContainer>)
}

export default Checkbox