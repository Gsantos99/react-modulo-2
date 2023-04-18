import React from 'react';
import './App.css';

import { GlobalStyle } from './styles';
import ListView from './components/ListView';


const App = () => {
  return (<>
  <GlobalStyle/>
    <div className='layout-base'>

   <ListView/>

    </div>
 </>);
}

export default App;
