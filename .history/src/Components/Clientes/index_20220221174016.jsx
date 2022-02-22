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
          Como a ferramenta certa pode salvar seu cão !
          Essa é a Kira uma Malinois que tenho uma enorme  alegria de ter participado e contribuido para a reabilitação dela, a Kira tinha aproximadamente um ano e meio na epoca, o dono tinha extrema dificuldade em sair com ela para ambientes externos a casa onde viviam, Kira tinha um forte instituo de predação com animais menores incluindo cães de pequeno porte, tornando o passeio impossivel ja que assim que Kita avistava uma possivel " presa " ela partia para cima e por ser uma cadela bem grande  e forte era quase insustenvavel manter um passeio com ela nesse estado, a base da obediencia da Kira foi feita toda com reforços positivos porem o instinto de caça prevalecia acima de qualquer reforço positivo que poderiamos oferecer então optamos por usar prong collor, uma ferramenta muitas vezes assustada pela aparencia mas inofensiva usando adequadamente, a prong collor tem um efeito psciologo muito maior que qualquer guia unificada ou enforcador, felizmente nos primeiros passeios percebos a diferença, hoje a Kira  passeio na rua tranquilamente com seu dono e salvamos mais um cão da adoção.
        </Info>
       </ContainerBox> 


       <ContainerBox>
       <ContainerIMG>
        <img src={Bucky} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Bucky</TitleInfo>
        O Bucky é um srd bem peculiar, na rotina do adestramento acabamos sempre caindo nos problemas mais comuns porem com ele foi diferente, quando cheguei a residencia achei que a dona estava exagerando um pouco nas  historias de agressões e mordidas vindo do Bucky, mas não, apesar do tamanho o Bucky foi extremamente reativo, cheguei a colocar 2 guias unificadas só para poder mante-lo longe do meu corpo, após um tempo de conversa resolvi me arriscar e tentar passear com ele para analisar o comportamento dele fora de casa, no ambiente aberto o cão se sentiu muito confortavel  andei com ele ao meu lado sem problemas, cheguei a conclusão que a reatividade dele era por insegurança pois ele tambem agredia quem se movimentava rapido pela casa na tentativa de controlar a movimentação, minha primeira indicação foi uma caixa de transportes, um cão inseguro precisa do cantinho dele para se sentir mais confortavel, ja na segunda aula era nitido a diferença do bucky, a dona 
        </Info>
       </ContainerBox> 
    </>
  );
}

