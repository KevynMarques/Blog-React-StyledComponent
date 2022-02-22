import Home from './Components/Home';
import Sobre from './Components/Sobre/index';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Geral from './Components/Geral/index';

function App() {

  const [geral, setGeral]=useState(<Sobre />);

  return (
    <>
    <Home setGeral={setGeral} />
    <Geral geral={geral} />
    <GlobalStyle/>
   </>
  );
}

export default App;
