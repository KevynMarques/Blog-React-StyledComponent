import Home from './Components/Home';
import Sobre from './Components/Sobre';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Geral from './Components/Geral/index';
import { Equip; } from './Components/Home/Style';

function App() {

  const [geral, setGeral]=useState(<Equipamento />)

  return (
    <>
    <Home />
    <Geral geral={geral} setGeral={setGeral} />
    <GlobalStyle/>
    </>      
  );
}

export default App;
