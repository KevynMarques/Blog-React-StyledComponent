import {Teste, Baner} from './style'
import Caes from '../Image/Equip.jpeg'


export default () => {
  return (
    <>  
    <Baner>
    <img src={Caes} />
    </Baner>
    <Teste>
      <h1>Equipamentos e Ferramentas</h1>
    </Teste>
    </>
  );
}