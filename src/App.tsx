import React from 'react';
import './App.css';
import ButtonCounter from './components/ButtonCounter/ButtonCounter';
import NumberList from './components/NumberList/NumberList';
import { GlobalStyle } from './styles';
import ListView from './components/ListView/Listview';


const App = () => {
  return (<>
  <GlobalStyle/>
   <ListView/>
 </>);
}

export default App;
