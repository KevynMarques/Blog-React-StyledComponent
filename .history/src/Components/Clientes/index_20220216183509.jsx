import {Teste,Container} from './style'
import Dog from '../Image/golden.jpeg'
import Amora from '../Image/Amora.jpg'
import Kira from '../Image/Kira.png'
import Bucky from '../Image/bucky.png'
import { ContainerBaner } from '../Containers/style'

export default () => {
  return (
    <>  
    <ContainerBaner>
    <img src={Dog} />
    <Container/Baner>

    <Teste>
      <h1>Casos Específicos</h1>


     <Container>
      <section>
      <p> 
      <h1>Kira - Malinois</h1>
      <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis  temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
    </p>
    <div>
        <img src={Kira} />
       </div>
    </section>
    </Container>

    <Container>
      <section>
    <p>
    <h1>Amora - dachshund </h1>
      <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
      <br></br>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
    </p>
    <div>
        <img src={Amora} />
       </div>
    </section>
    </Container>

    <Container>
      <section>
    <p>
    <h1>Bucky - RSD</h1>
      <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
      <br></br>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
    </p>
    <div>
        <img src={Bucky} />
       </div>
    </section>
    </Container>



    </Teste>
    </>
  );
}