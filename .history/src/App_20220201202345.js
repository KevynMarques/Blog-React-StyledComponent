import Header from './Components/Header/index'
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Geral from './Components/Geral/index';

function App() {

  const [geral, setGeral]=useState(<Sobre/>)

  return (
    <>
    <Home />
    <Geral geral={geral} setGeral={setGeral} />
    <GlobalStyle/>
    </>      
  );
}

export default App;
