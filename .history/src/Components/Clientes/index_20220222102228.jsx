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
          Essa é a Kira, uma Malinois que tenho uma enorme alegria de ter participado e contribuido para a reabilitação dela, na época a Kira tinha aproximadamente um ano e meio, o dono tinha extrema dificuldade em sair com ela para ambientes externos da casa onde viviam, Kira tinha um forte instituo de predação com animais menores incluindo cães de pequeno porte, tornando o passeio impossivel ja que assim que ela avistava uma possivel "presa" partia para cima, e por ser uma cadela bem grande e forte era quase insustentavel manter um passeio com ela. Nesse estado, a base da obediencia da Kira foi feita toda com reforços positivos porém o instinto de caça prevalecia acima de qualquer reforço positivo que poderiamos oferecer então optamos por usar prong collor, uma ferramenta muitas vezes assustada pela aparencia, mas inofensiva usando adequadamente. A prong collor tem um efeito psicológico muito maior que qualquer guia unificada ou enforcador, felizmente nos primeiros passeios percebos a diferença, hoje a Kira passeia na rua tranquilamente com seu dono e salvamos mais um cão da adoção.
        </Info>
       </ContainerBox> 


       <ContainerBox>
       <ContainerIMG>
        <img src={Bucky} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Bucky</TitleInfo>
        O Bucky é um SRD bem peculiar, na rotina do adestramento acabamos sempre caindo nos problemas mais comuns porém com ele foi diferente, quando cheguei a residencia achei que a dona estava exagerando um pouco nas histórias de agressões e mordidas vindo do Bucky, mas não, apesar do tamanho o Bucky foi extremamente reativo, cheguei a colocar 2 guias unificadas só para poder mante-lo longe do meu corpo, após um tempo de conversa com os donos resolvi me arriscar e tentar passear com ele para analisar o seu comportamento fora de casa e no ambiente aberto o cão se sentiu muito confortavel, andei com ele ao meu lado sem problemas, com isso cheguei a conclusão que a reatividade dele era por insegurança pois ele tambem agredia quem se movimentava rápido pela casa na tentativa de controlar a movimentação, com as mordidas acontecendo os donos ficaram com cada vez mais receio do Bucky deixando ele cada vez mais confiante para voltar a agredi-los caso achassem necessario, minha primeira indicação foi uma caixa de transportes, um cão inseguro precisa do cantinho dele para se sentir mais confortavel, ja na segunda aula era impressionante a diferença do bucky, a dona se empenhou e seguiu tudo a risca, apenas com uma mudança ou outra na rotina do Bucky ele se tornou outro cão! Claro que essa rotina precisa ser mantida e vai demorar para ele estar 100% porem ficamos com a lição que o manejo correto muda qualquer cão.
        </Info>
       </ContainerBox> 
    </>
  );
}

