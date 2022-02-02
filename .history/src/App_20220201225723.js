import Home from './Components/Home';
import Sobre from './Components/Sobre/index';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Geral from './Components/Geral/index';
import Equipamentos from './Components/Equipamentos/index'

function App() {

  const [geral, setGeral]=useState(<Equipamentos />)

  return (
    <>
    <Home />
    <GlobalStyle/>
    </>      
  );
}

export default App;
