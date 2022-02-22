
import  Apbt from '../Image/apbt.jpg';
import Original from '../Image/Original.jpg'
import { SubTitle, Info } from "../Textos&Titles/style";
import { ContainerIMG, ContainerBox, ContainerBaner } from "../Containers/style";




export default () => {
  return (
    <>  
    <ContainerBaner>
    <img src={Apbt} />
    </ContainerBaner>

    <SubTitle>
      Contato
    </SubTitle>

      <ContainerBox>
       <ContainerIMG>
        <img src={Original} />
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