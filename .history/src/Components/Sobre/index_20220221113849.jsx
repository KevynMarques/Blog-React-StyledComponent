import Foto from '../Image/foto.png'
import LV from '../Image/LV.jpg'; 
import Dog from '../Image/Dog.png'
import { Tittle } from "../Textos&Titles/style";
import { ContainerBaner, ContainerBox, ContainerIMG } from "../Containers/style";
import { Info } from "../Textos&Titles/style";
import { SubTitle } from '../Textos&Titles/style';
import { TitleInfo } from '../Textos&Titles/style';


export default () => {
  return (
<>
     <ContainerBaner>
      <img src={Dog} />
     </ContainerBaner>

   <Tittle> 
          Adestramento DK
  </Tittle>


  <ContainerBox>
       <ContainerIMG>
        <img src={Foto} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Quem sou eu</TitleInfo>
        Olá, meu nome é Kevyn Marques e sou um apaixonado por comportamento canino desde 2017 
       </Info>
       </ContainerBox> 

  <SubTitle>  Viper e Logan !
  </SubTitle>


    <ContainerBox>

       <ContainerIMG>
        <img src={LV} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Nosso dia a dia</TitleInfo>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
       </Info>
      </ContainerBox> 
</>

  );
}