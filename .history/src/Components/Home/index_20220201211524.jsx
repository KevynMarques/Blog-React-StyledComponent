import { Home, Baner, HomeB, Equip, Comportamental, Guarda, Serviços, Contato } from "./Style"
import Dog from '../Image/Dog.png'


export default () => {
  return (
   <>
    <Home> 
      <HomeB>HOME</HomeB>
     <Equip>EQUIPAMENTOS</Equip>
      <button>Comportamental</button>
    </Home>
    <Baner>
       <img src={Dog} />
     </Baner>
    </>
  );
}