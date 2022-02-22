
import Caes from '../Image/Equip.jpeg'
import akita from '../Image/akita.jpg'

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
         <img src={akita} />
         </ContainerIMG>
         <Info>
         <TitleInfo>Castação e xixi pela casa.</TitleInfo>
         Uma breve opnião sobre a castração resolver problemas como o dog urinar pela casa toda, espero que sirva de reflexão para todos e pesquisem se a castração ajuda no comportamento do seu animal ou se castrar cães é um meio do seu veterinario lucrar. Lembrando que estou me referindo a castração com intuito de resolver problemas comportamentais e não estou discutindo quanto aos beneficios e a maleficios da mesma. <br></br> <br></br>
         Link : <a href="url">https://www.youtube.com/watch?v=AIgQQ-RCJ3A</a>
 

        </Info>
        </ContainerBox> 

    </>
  );
}