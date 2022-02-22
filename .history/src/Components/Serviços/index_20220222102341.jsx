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
       Ofereços o seguintes serviços : <br></br> <br></br>
       Adestramento domiciliar : onde vou até a casa do cliente e traçamos um plano de adestramento baseado na rotina da familia e na necessidade do cão. 
        
       <br></br> <br></br> 
       Treinamento itensivo : O cão ficara hospedado em minha residencia por no minimo 15 dias onde tera uma rotina de treinos com objetivo de melhorar comportamentos indesejados. 
       <br></br> <br></br> 
        
        Consultoria online: A consultoria online envolve todo conteudo que seria passado no presencial alem de ter acesso direto a mim por 30 dias podendo tirar qualquer duvida a qualquer momento, com as orientações certas qualquer um pode adestrar seu cão. 
  
        </Info>
       </ContainerBox> 

    </>
  );
}