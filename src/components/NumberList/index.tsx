import React from "react";
import './style.css'



const NumberList = () => {
 
  const numeros: Array<number> = [1,2,3,4,5,6,7,8,9,10]

  console.log(numeros)

return(<>

 {
  numeros.map((numero, index) => {
    if(numero % 2 > 0){
      return(
        
          <li key={index}>{numero}</li>
        
      )
    }
    
  })
 }

</>)
}

export default NumberList
