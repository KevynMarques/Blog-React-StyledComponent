import { Baner} from "../Sobre/style";
import { Info, SubTitle } from "../Textos&Titles/style";
import  Border from '../Image/border.jpg';
import Mali  from '../Image/mali.jpg'
import { ContainerIMG, ContainerBox } from "../Containers/style";



export default () => {
  return (
    <>  
    <ContainerBaner>
    <img src={Border} />
    </ContainerBaner>

    <SubTitle>
      <h1>Serviços</h1>
      </SubTitle>

      <ContainerBox>
       <ContainerIMG>
        <img src={Mali} />
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