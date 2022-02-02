import {Teste, Baner, Container} from './style'
import Dog from '../Image/golden.jpeg'
import Amora from '../Image/Amora.jpg'
import Kira from '../Image/kira.png'

export default () => {
  return (
    <>  
    <Baner>
    <img src={Dog} />
    </Baner>

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
        <img src={Agress} />
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
        <img src={York} />
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
        <img src={Xixi} />
       </div>
    </section>
    </Container>



    </Teste>
    </>
  );
}