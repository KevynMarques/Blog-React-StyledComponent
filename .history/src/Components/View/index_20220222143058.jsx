
import Caes from '../Image/Equip.jpeg'
import Caixa from '../Image/Caixa.jpg'
import { ContainerBaner } from '../Containers/style'
import { SubTitle, TitleInfo } from '../Textos&Titles/style'
import { ContainerIMG, ContainerBox } from '../Containers/style'
import { Info } from '../Textos&Titles/style'




export default () => {
  return (
    <>  
    <ContainerBaner>
    <img src={Caes} />
    </ContainerBaner>

    <SubTitle>
      Videos praticos 
    </SubTitle>
       
         <ContainerBox>
         <ContainerIMG>
         <img src={Caixa} />
         </ContainerIMG>
         <Info>
         <TitleInfo>.........</TitleInfo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus  odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
        <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
        </Info>
        </ContainerBox> 

    </>
  );
}