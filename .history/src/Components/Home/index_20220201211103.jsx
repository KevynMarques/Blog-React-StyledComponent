import { Home, Baner, HomeB } from "./Style"
import Dog from '../Image/Dog.png'


export default () => {
  return (
   <>
    <Home> 
      <HomeB
      <button>Equipamentos</button>
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