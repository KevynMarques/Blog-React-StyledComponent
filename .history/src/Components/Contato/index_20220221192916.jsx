
import  Apbt from '../Image/apbt.jpg';
import Original from '../Image/Original.jpg'
import { SubTitle, Info } from "../Textos&Titles/style";
import { ContainerIMG, ContainerBox, ContainerBaner } from "../Containers/style";
import { Grif } from '../Textos&Titles/style';




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
         <Grif>Telefone: </Grif>
       <br></br><br></br>
       instagram: @ssssssss
       <br></br><br></br>
       tiktok : @zzzzzzzz

       <br></br><br></br>
        YouTube:  sssssssss
        </Info>
       </ContainerBox> 
    </>
  );
}
