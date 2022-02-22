import { Info, SubTitle } from "../Textos&Titles/style";
import  Border from '../Image/border.jpg';
import Mali  from '../Image/mali.jpg'
import { ContainerIMG, ContainerBox, ContainerBaner } from "../Containers/style";



export default () => {
  return (
    <>  
    <ContainerBaner>
    <img src={Border} />
    </ContainerBaner>

    <SubTitle>
         Serviços
    </SubTitle>

      <ContainerBox>
       <ContainerIMG>
        <img src={Mali} />
       </ContainerIMG>
       <Info>
         
       <SubTitle>Atualmente atendo na região de São Paulo.</SubTitle>
       <br></br><br></br><br></br><br></br>
       ofereços o seguintes serviços : <br></br> <br></br>
       Adestramento domiciliar onde vou até a casa do cliente e traçamos um plano de adestramento baseado na rotina da familia e na necessidade do cão

        </Info>
       </ContainerBox> 

    </>
  );
}