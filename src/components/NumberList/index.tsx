

const NumberList = () => {
 
  const numbers: Array<number> = [1,2,3,4,5,6,7,8,9,10]

return(<>

 {

  numbers.map((number) => {
    
   const condition = number % 2 > 0
    
   return condition ?  <li key={number}>{number}</li> : null

  })

 }

</>)
}

export default NumberList
