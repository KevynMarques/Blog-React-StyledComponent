
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
       telefone : (11)999999999999 
       <br></br><br></br>
       instagram: @ssssssss
       <br></br><br></br>
       tiktok : @zzzzzzzz

       <br></br><br></br>
        Yout
        </Info>
       </ContainerBox> 
    </>
  );
}
