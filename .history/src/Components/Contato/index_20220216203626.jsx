import { Baner} from "../Sobre/style";
import { Container } from "../Equipamentos/style";
import  Apbt from '../Image/apbt.jpg';
import Original from '../Image/apbtOriginal.jpg'
import { SubTitle } from "../Textos&Titles/style";


export default () => {
  return (
    <>  
    <Baner>
    <img src={Apbt} />
    </Baner>
    <SubTitle>
      <h1>Contato</h1>
      </SubTitle>>
    </SubTitle>
    </>
  );
}