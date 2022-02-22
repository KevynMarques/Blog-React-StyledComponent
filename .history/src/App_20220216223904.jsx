import Home from './Components/Home';
import Sobre from './Components/Sobre/index';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Geral from './Components/Geral/index';
import { Loading } from './Components/Loading/loading';

function App() {

  const [geral, setGeral]=useState(<Sobre />);

  setTimeout(() => {
    setLoading(false); 
  }, 1500);

  return (
    <>
    <Home setGeral={setGeral} geral={geral}  />
    <Geral geral={geral} />
    <GlobalStyle/>
   </>
  );
}

export default App;
