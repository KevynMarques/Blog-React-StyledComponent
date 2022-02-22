
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

         <Grif>Telefone: (11)5778-0000  </Grif>
         <br></br><br></br>

         <Grif> instagram: @ssssssss </Grif>
         <br></br><br></br>

        <Grif>tiktok : @zzzzzzzz</Grif>
        <br></br><br></br>

        <Grif>YouTube:  sssssssss</Grif>
        </Info>
       </ContainerBox> 
    </>
  );
}
