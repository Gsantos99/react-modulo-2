import React from 'react';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import NumberList from './components/NumberList';


const App = () => {
  return (<>
  
  <section className='container'>
    <h1>Botão com a função de incrementar e decrementar </h1>
    <ButtonCounter titleBtnA='Incrementar' titleBtnB='Decrementar' active={true}/>

 </section> 

 <section className='container '>
  <div className='box'>
  <h1>Lista números e renderização condicional </h1>
  <NumberList/>
  </div>
 </section>
 
 
 </>);
}

export default App;
