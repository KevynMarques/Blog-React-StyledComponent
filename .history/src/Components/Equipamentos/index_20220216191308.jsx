import { Baner, Container} from './style'
import Caes from '../Image/Equip.jpeg'
import Caixa from '../Image/Caixa.jpg'
import Peitoral  from '../Image/peitoral.jpeg'
import Prong from '../Image/prong.jpg'
import Unificada from '../Image/unificada.jpg'
import Eletronico from '../Image/eletronico.jpg'
import { ContainerBaner } from '../Containers/style'




export default () => {
  return (
    <>  
    <ContainerBaner>
    <img src={Caes} />
    </ContainerBaner>

    <Teste>
      <h1>Equipamentos e Ferramentas</h1>


     <Container>
      <section>
      <p> 
      <h1>Peitoral</h1>
      <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis  temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
    </p>
    <div>
        <img src={Peitoral} />
       </div>
    </section>
    </Container>

    <Container>
      <section>
    <p>
    <h1>Prong Collor</h1>
      <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
      <br></br>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
    </p>
    <div>
        <img src={Prong} />
       </div>
    </section>
    </Container>

    <Container>
      <section>
    <p>
    <h1>Guia unificada</h1>
      <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
      <br></br>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
    </p>
    <div>
        <img src={Unificada} />
       </div>
    </section>
    </Container>


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


    </Teste>
    </>
  );
}