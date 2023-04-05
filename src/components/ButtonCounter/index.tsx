import React, {useState} from "react";
import './style.css'


export interface IButtonCounterProps {
  // Deixar props?: é para deixar o props opcional 
  titleBtnA: string,
  titleBtnB: string,
  active?: boolean
}


const ButtonCounter = ({titleBtnA, titleBtnB, active = false}: IButtonCounterProps) => {
  // Definir valor default -> atributo = valor; dentro do objeto no parâmetro da função
  const [contador,setContador] = useState(0)

 const handleIncrementar = () => {
    setContador(contador + 1)
  }

  const handleDecrementar = () => {
    setContador(contador - 1)
  }

  return(<>
  <h2>{contador}</h2>
    <button onClick={handleIncrementar}>{titleBtnA}</button>
    <button onClick={handleDecrementar}>{titleBtnB}</button>
  </>)
}

export default ButtonCounter