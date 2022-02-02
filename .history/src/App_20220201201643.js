import Header from './Components/Header/index'
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Geral from './Components/Geral/index';

function App() {

  const [geral, GeralInfo]=useState(<Home/>)

  return (
    <>
    <Home />
    <Geral info={info} setInfo ={setInfo} />
    <GlobalStyle/>
    </>      
  );
}

export default App;
