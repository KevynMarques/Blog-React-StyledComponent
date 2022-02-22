import { Container} from './style'
import Caes from '../Image/Equip.jpeg'
import Caixa from '../Image/Caixa.jpg'
import Peitoral  from '../Image/peitoral.jpeg'
import Prong from '../Image/prong.jpg'
import Unificada from '../Image/unificada.jpg'
import Eletronico from '../Image/eletronico.jpg'
import { ContainerBaner } from '../Containers/style'
import { SubTitle } from '../Textos&Titles/style'
import { ContainerIMG, ContainerBox } from '../Containers/style'
import { Info } from '../Textos&Titles/style'




export default () => {
  return (
    <>  
    <ContainerBaner>
    <img src={Caes} />
    </ContainerBaner>

    <SubTitle>
      <h1>Equipamentos e Ferramentas</h1>


      <ContainerBox>
       <ContainerIMG>
        <img src={Peitoral} />
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


     <ContainerBox>
       <ContainerIMG>
        <img src={Unificada} />
       </ContainerIMG>
       <Info>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
        </Info>
       </ContainerBox> 

    <Container>
      <section>
    <p>
    <h1>Caixa de Transportes</h1>
      <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
      <br></br>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
    </p>
    <div>
        <img src={Caixa} />
       </div>
    </section>
    </Container>


    <Container>
      <section>
    <p>
    <h1>Colar eletrônico</h1>
      <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
      <br></br>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
    </p>
    <div>
        <img src={Eletronico} />
       </div>
    </section>
    </Container>
    
    </SubTitle>
    </>
  );
}