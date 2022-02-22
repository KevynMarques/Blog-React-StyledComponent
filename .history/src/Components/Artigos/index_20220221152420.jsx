import Dog from '../Image/pitbull.jpeg'
import Agress from '../Image/agressao.png'
import York from '../Image/york.jpeg'
import Xixi from '../Image/xixi.jpeg'
import Passeio from '../Image/Passeio.jpeg'
import Bagunça from '../Image/bagunça.jpg'
import { Info, SubTitle } from '../Textos&Titles/style'
import { ContainerBaner, ContainerBox, ContainerIMG } from '../Containers/style'
import { TitleInfo } from '../Textos&Titles/style'

export default () => {
  return (
    <>  
    <ContainerBaner>
    <img src={Dog} />
    </ContainerBaner>

    <SubTitle>
      Comportamento Canino
     </SubTitle>

      <ContainerBox>
       <ContainerIMG>
        <img src={Agress} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Agressão domestica</TitleInfo>
       Muitas pessoas tem problemas com cães que ja agrediram os familiares e até mesmo o próprio dono, mas o que leva um animal que é tratado 
       da melhor forma possivel ter esse tipo de atitude ? Muitas pessoas se enganam achando que muito amor e carinho são o suficente para o animal ser grato e respeitar as pessoas da casa porem estam completamente enganados, cães precisam de uma rotina e de limites igual uma criança, uns precisaram de uma rotina mais rigina e outros menos, mas o importante é mostrarmos que NÓS os donos somos quem estabelece esses limites, 
        </Info>
       </ContainerBox> 

       <ContainerBox>
       <ContainerIMG>
        <img src={York} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Ansiedade</TitleInfo>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
        </Info>
       </ContainerBox> 

       <ContainerBox>
       <ContainerIMG>
        <img src={Xixi} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Necessiades no Local</TitleInfo>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
        </Info>
       </ContainerBox> 


       <ContainerBox>
       <ContainerIMG>
        <img src={Passeio} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Passeio</TitleInfo>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
        </Info>
       </ContainerBox> 


       <ContainerBox>
       <ContainerIMG>
        <img src={Bagunça} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Destruição de objetos</TitleInfo>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
        </Info>
       </ContainerBox> 
    </>
  );
}