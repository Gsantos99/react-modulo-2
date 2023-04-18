import React, {useState} from "react";
import Heading2Couter from './Heading2Counter.styles'


export interface IButtonCounterProps {
  // Deixar props?: é para deixar o props opcional 
  titleBtnA: string,
  titleBtnB: string,
  active?: boolean
}




const ButtonCounter = ({titleBtnA, titleBtnB, active = false}: IButtonCounterProps) => {
  // Definir valor default -> atributo = valor; dentro do objeto no parâmetro da função
  const [couter,setCouter
  ] = useState(0)

 const handleIncrement = () => {
    setCouter
    (couter + 1)
  }

  const handleDecrement = () => {
    setCouter
    (couter - 1)
  }

  return(<>
  <Heading2Couter>{couter}</Heading2Couter>
    <button onClick={handleIncrement}>{titleBtnA}</button>
    <button onClick={handleDecrement}>{titleBtnB}</button>
  </>)
}

export default ButtonCounter