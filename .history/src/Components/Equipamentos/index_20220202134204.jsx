import {Teste, Baner, Container} from './style'
import Caes from '../Image/Equip.jpeg'



export default () => {
  return (
    <>  
    <Baner>
    <img src={Caes} />
    </Baner>
    <Teste>
      <h1>Equipamentos e Ferramentas</h1>
 
<Container></Container>
      <section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
      <br></br>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
    </p>
    </section>
 
    </Teste>
    </>
  );
}