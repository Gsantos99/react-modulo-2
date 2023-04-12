import React, {useState} from 'react'
import checkIcon from '../../assets/tick.png'

import {
   CheckboxContainer,
   HiddenCheckbox,
   StyledCheckbox,
   Text
} from './Checkbox.styles';


const Checkbox = () => {
  
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
 <Text checked={checked}>Tarefa 1</Text>
 </CheckboxContainer>)
}

export default Checkbox