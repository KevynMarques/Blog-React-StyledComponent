import Home from './Components/Home';
import Sobre from './Components/Sobre/index';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Geral from './Components/Geral/index';
import Equipamentos from './Components/Equipamentos/index'

function App() {

  const [teste, setTeste]=useState( <Equipamentos />)

  return (
    <>
    <Home />
    <Geral geral={geral} setGeral={setGeral} />
    <GlobalStyle/>
   </>
  );
}

export default App;
