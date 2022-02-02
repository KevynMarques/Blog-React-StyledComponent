import {Teste, Baner} from './style'
import Caes from '../Image/Equip.jpeg'


export default () => {
  return (
    <>  
    <Baner>
    <img src={Caes} />
    </Baner>
    <Teste>
      <p>alo testando</p>
    </Teste>
    </>
  );
}