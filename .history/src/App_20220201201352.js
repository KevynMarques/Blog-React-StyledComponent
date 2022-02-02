import Header from './Components/Header/index'
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
const [info, setInfo]=useState(<Home/>)

function App() {

  const [info, setInfo]=useState(<Home/>)

  return (
    <>
   
    <GlobalStyle/>
    </>      
  );
}

export default App;
