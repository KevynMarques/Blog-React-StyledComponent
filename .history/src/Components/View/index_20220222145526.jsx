
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
         <img src={Caixa} onClick='https://www.youtube.com/watch?v=AIgQQ-RCJ3A' />
         </ContainerIMG>
         <Info>
         <TitleInfo>Castação vs xixi pela casa.</TitleInfo>
         Uma breve opnião sobre a castração resolver problemas como o dog urinar pela casa toda, espero que sirva de reflexão para todos e pensem 
        </Info>
        </ContainerBox> 

    </>
  );
}