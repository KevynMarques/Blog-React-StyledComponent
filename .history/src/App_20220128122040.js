import Header from './Components/Header/index'
import Home from './Components/Home';
import Sobre from './Components/Sobre';

import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Home />
    <Header />
    <Sobre></Sobre>
    </>      
  );
}

export default App;