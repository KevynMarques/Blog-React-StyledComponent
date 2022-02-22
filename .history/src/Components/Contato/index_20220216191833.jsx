import { Baner} from "../Sobre/style";
import { Container } from "../Equipamentos/style";
import { Teste } from "../Equipamentos/style";
import  Apbt from '../Image/apbt.jpg';
import Original from '../Image/apbtOriginal.jpg'
import { Tittle } from "../Sobre/style";


export default () => {
  return (
    <>  
    <Baner>
    <img src={Apbt} />
    </Baner>
    <Teste>
      <h1>Contato</h1>
    <Container>
      <section>
    <p>
    <h1>Liberdade em excesso</h1>
      <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
      <br></br>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
    </p>
    <div>
        <img src={Original} />
       </div>
    </section>
    </Container>
    </Teste>
    </>
  );
}