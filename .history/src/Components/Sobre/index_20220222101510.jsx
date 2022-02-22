import Foto from '../Image/foto.png'
import LV from '../Image/LV.jpg'; 
import Dog from '../Image/Dog.png'
import { Tittle } from "../Textos&Titles/style";
import { ContainerBaner, ContainerBox, ContainerIMG } from "../Containers/style";
import { Info } from "../Textos&Titles/style";
import { SubTitle } from '../Textos&Titles/style';
import { TitleInfo } from '../Textos&Titles/style';


export default () => {
  return (
<>
     <ContainerBaner>
      <img src={Dog} />
     </ContainerBaner>

   <Tittle> 
          Adestramento DK
  </Tittle>


  <ContainerBox>
       <ContainerIMG>
        <img src={Foto} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Quem sou eu?</TitleInfo>
           Meu nome é Kevyn Marques, sempre fui um apaixonado por cães e no ano de 2017 tive o prazer 
       de fazer parte do 2BPE onde pude ter meu primeiro contato com cães de trabalho, tanto de faro como de guarda. Fiquei encantado com aqueles animais então comecei a pesquisar e estudar sobre comportamento canino e desde lá eu nunca mais parei! Ao longo da minha jornada como adestrador fiz inumeros cursos com pessoas que estão há anos na área do adestramento, tanto no esporte canino como no treinamento pet, o que me proporcionou a ter uma visão ampla e diversificada de cada caso que passa pelas minhas mãos.<br></br>
       Tenho um orgulho enorme dos meus resultados, acredito que todos com a orientação adequada podem ter uma vida em harmonia com seus cães independente do tamanho do problema, ele sempre tera solução. 
       </Info>
       </ContainerBox> 

  <SubTitle>  Viper e Logan !
  </SubTitle>


    <ContainerBox>
       <ContainerIMG>
        <img src={LV} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Nosso dia a dia</TitleInfo>
       Apesar de já ter tido cães a vida toda o meu primeiro cão de trabalho foi o Logan, meu pastor Belga Malinois (que se encontra ao lado direito da foto) com o Logan vieram inumeros desafios, afinal é uma raça difícil de lidar, temperamento forte, muita disposição e um drive de caça altissímo, porém com a técnica correta e o conhecimento adequado o Logan se tornou a melhor companhia que já tive na vida! Ja o Mali mais escuro na foto é o Viper, minha paixão por Malinois so aumenta e com isso veio mais um para familia, o pequeno Viper é bem diferente do Logan, um cão mais calmo e de um temperamento extremamente equilibrado por enquanto ainda não sei se irei treina-lo para guarda e proteção como o Logan, porem uma coisa é certa, eles fazem uma dupla e tanto !! Irei postar videos rotineiros dos treinos de ambos e espero que vocês acompanhem ! 
       </Info>
   </ContainerBox> 
</>

  );
}