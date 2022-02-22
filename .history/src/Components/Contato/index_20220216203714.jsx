import { Baner} from "../Sobre/style";
import  Apbt from '../Image/apbt.jpg';
import { SubTitle } from "../Textos&Titles/style";
import { ContainerIMG, ContainerBox } from "../Containers/style";



export default () => {
  return (
    <>  
    <Baner>
    <img src={Apbt} />
    </Baner>
    <SubTitle>
      <h1>Contato</h1>
    </SubTitle>

      <ContainerBox>
       <ContainerIMG>
        <img src={Kira} />
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