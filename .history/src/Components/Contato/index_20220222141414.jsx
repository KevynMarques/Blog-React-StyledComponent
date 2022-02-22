
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
       <Gif><Acompanhe meu trabalho nas redes sociais: </Gif>
         <Grif>Telefone: (11)95778-0000</Grif>
         <br></br><br></br>

         <Grif> Instagram: @adestramento.dk </Grif>
         <br></br><br></br>

        <Grif>Tiktok : @adestramentodk</Grif>
        <br></br><br></br>

        <Grif>YouTube: sssssssss</Grif>
        </Info>
       </ContainerBox> 
    </>
  );
}
