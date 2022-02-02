import Home from './Components/Home';
import Sobre from './Components/Sobre/index';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Geral from './Components/Geral/index';
import Equipamentos from './Components/Equipamentos/index'

function App() {

  const [teste, setTeste]=useState(<Sobre />);

  return (
    <>
    <Home  />
    <Geral teste={teste} setTeste={setTeste} />
    <GlobalStyle/>
   </>
  );
}

export default App;
