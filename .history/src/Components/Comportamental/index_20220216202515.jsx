import { Baner, Container} from './style'
import Dog from '../Image/pitbull.jpeg'
import Agress from '../Image/agressao.png'
import York from '../Image/york.jpeg'
import Xixi from '../Image/xixi.jpeg'
import Passeio from '../Image/Passeio.jpeg'
import Bagunça from '../Image/bagunça.jpg'
import { SubTitle } from '../Textos&Titles/style'

export default () => {
  return (
    <>  
    <Baner>
    <img src={Dog} />
    </Baner>

    <SubTitle>
      <h1>Comportamento Canino</h1>


      <ContainerBox>
       <ContainerIMG>
        <img src={Agress} />
       </ContainerIMG>
       <Info>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
        </Info>
       </ContainerBox> 

       <ContainerBox>
       <ContainerIMG>
        <img src={York} />
       </ContainerIMG>
       <Info>
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
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
        </Info>
       </ContainerBox> 


       <ContainerBox>
       <ContainerIMG>
        <img src={Prong} />
       </ContainerIMG>
       <Info>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
        </Info>
       </ContainerBox> 
    </>
  );
}