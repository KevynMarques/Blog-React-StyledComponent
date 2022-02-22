import Dog from '../Image/golden.jpeg'
import { ContainerIMG, ContainerBox, ContainerBaner } from '../Containers/style'
import Amora from '../Image/Amora.jpg'
import Kira from '../Image/Kira.png'
import Bucky from '../Image/bucky.png'
import { SubTitle } from '../Textos&Titles/style'
import { Info } from '../Textos&Titles/style'
import { TitleInfo } from '../Textos&Titles/style'

export default () => {
  return (
    <>  
    <ContainerBaner>
    <img src={Dog} />
    </ContainerBaner>

      <SubTitle>
      Casos Específicos
      </SubTitle>

      <ContainerBox>
       <ContainerIMG>
        <img src={Kira} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Kira</TitleInfo>
          Essa é a Kira uma Malinois que tenho uma enorme  alegria de ter participado e contribuido para a reabilitação dela, a Kira tinha aproximadamente um ano e meio na epoca, o dono tinha extrema dificuldade em sair com ela para ambientes externos a casa onde viviam, Kira tinha um forte instituo de predação com animais menores incluindo cães de pequeno porte, tornando o passeio impossivel ja que assim que Kita avistava uma possivel " presa " ela partia para cima e por ser uma cadela bem grande  e forte era quase insustenvavel manter um passeio com ela nesse estado, a base da obediencia da Kira foi feita toda com reforços positivos porem o instinto de caça prevalecia acima de qualquer reforço positivo que poderiamos oferecer então optamos por usar prong collor, uma ferramenta muitas vezes assustada pela aparencia mas inofensiva usando adequadamente, a prong collor tem um efeito psciologo muito mai
        </Info>
       </ContainerBox> 


       <ContainerBox>
       <ContainerIMG>
        <img src={Amora} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Amora</TitleInfo>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
        </Info>
       </ContainerBox> 

       <ContainerBox>
       <ContainerIMG>
        <img src={Bucky} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Bucky</TitleInfo>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
        </Info>
       </ContainerBox> 
    </>
  );
}