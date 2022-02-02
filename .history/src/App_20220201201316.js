import Geral from './Components/Geral';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';

function App() {

  const [info, setInfo]=useState(<Home/>)

  return (
    <>
   
    <GlobalStyle/>
    </>      
  );
}

export default App;
