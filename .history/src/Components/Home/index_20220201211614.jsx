import { Home, Baner, HomeB, Equip, Comportamental, Guarda, Serviços, Contato } from "./Style"
import Dog from '../Image/Dog.png'


export default () => {
  return (
   <>
    <Home> 
       <HomeB>HOME</HomeB>
       <Equip>Equipamentos</Equip>
       <Comportamental>Comportamental</Comportamental>
       <Guarda>Guarda e proteção</Guarda>
       <Serviços>Serviços</Serviços>
       <Contato></Contato>
      
    </Home>
    <Baner>
       <img src={Dog} />
     </Baner>
    </>
  );
}