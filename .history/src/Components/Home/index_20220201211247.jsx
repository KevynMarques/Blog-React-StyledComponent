import { Home, Baner, HomeB, E } from "./Style"
import Dog from '../Image/Dog.png'


export default () => {
  return (
   <>
    <Home> 
      <HomeB>HOME</HomeB>
     
      <button>Comportamental</button>
      <button>Guarda e Proteção</button>
      <button>Serviços</button>
      <button>Contato</button>
    </Home>
    <Baner>
       <img src={Dog} />
     </Baner>
    </>
  );
}