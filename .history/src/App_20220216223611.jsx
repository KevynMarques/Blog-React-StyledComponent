import Home from './Components/Home';
import Sobre from './Components/Sobre/index';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Geral from './Components/Geral/index';

function App() {

  const [geral, setGeral]=useState(<Sobre />);

  const [loading, setLoading]= useState(true)

  useEffect(()=>{
      setLoading(true);
  }, [info])

  
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
