import Header from './Components/Header/index'
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
    <Home />
    <Header />
    <Sobre />
    <GlobalStyle/>
    </>      
  );
}

export default App;
