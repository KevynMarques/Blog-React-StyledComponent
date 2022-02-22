import Dog from '../Image/pitbull.jpeg'
import Agress from '../Image/agressao.png'
import York from '../Image/york.jpeg'
import Xixi from '../Image/xixi.jpeg'
import Passeio from '../Image/Passeio.jpeg'
import Bagunça from '../Image/bagunça.jpg'
import { Info, SubTitle } from '../Textos&Titles/style'
import { ContainerBaner, ContainerBox, ContainerIMG } from '../Containers/style'
import { TitleInfo } from '../Textos&Titles/style'

export default () => {
  return (
    <>  
    <ContainerBaner>
    <img src={Dog} />
    </ContainerBaner>

    <SubTitle>
      Comportamento Canino
     </SubTitle>

      <ContainerBox>
       <ContainerIMG>
        <img src={Agress} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Agressão domestica</TitleInfo>
       Muitas pessoas tem problemas com cães que ja agrediram os familiares e até mesmo o próprio dono, mas o que leva um animal que é tratado 
       da melhor forma possivel ter esse tipo de atitude ? Muitas pessoas se enganam achando que muito amor e carinho são o suficente para o animal ser grato e respeitar as pessoas da casa porem estam completamente enganados, cães precisam de uma rotina e de limites igual uma criança, uns precisaram de uma rotina mais rigina e outros menos, mas o importante é mostrarmos que NÓS os donos somos quem estabelece esses limites, você dono de um cão precisa aprender a se comunicar e mostrar que o provedor dessa vida maravilhosa que seu cão tem, assim que isso estiver claro para ele você tera o respeito que merece e não ocorrera mais mordidas.
        </Info>
       </ContainerBox> 

       <ContainerBox>
       <ContainerIMG>
        <img src={York} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Ansiedade</TitleInfo>
        Cães ansiosos é um dos quadros comportementais mais tristes que podemos ver, infelizmente as pessoas que não buscam conhecimento adequado sobre o comportamento canino acabam confundo ansiedade com FELICIDADE e não é bem que as coisas funcionam, cães ansiosos são cães angustiados e sempre na expectativa de algo acontecer, alguns uriam outros choram e latem sem parar, alguns chegam ao ponto de se multilar ou ter comportamentos compulsivos como lamber as patas e correr a traz do rabo, se seu cão tem alguns desses sintomas, procure um profissional para te ajudar o mais rapido possivel, não deixe seu animal ficar sofrendo porque ele parece bonitinho nesse estado. 
        </Info>
       </ContainerBox> 

       <ContainerBox>
       <ContainerIMG>
        <img src={Xixi} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Necessiades no Local</TitleInfo>
         Muitas pessoas tem esse tipo de dificuldade principalmente com machos adultos que "marcam" a casa toda, e nesse caso temos um otimo exemplo de como o adestramento é algo muito mais completo e complexo do que parece, um cão que marca a casa não seria apenas ensinar ele a onde voce quer que faça o xixi até porque muitas vezes ele sabe mas prefere marcar a casa, então resolvemos ? Fazendo o cão entender que apesar de ter axcesso a casa ele não é o responsavel por ela e o unico jeito de fazermos isso é com um manejo e uma rotina adequada ao animal. 
        </Info>
       </ContainerBox> 


       <ContainerBox>
       <ContainerIMG>
        <img src={Passeio} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Passeio</TitleInfo>
       O Passeio é uma das questões mais importantes na vida de um cão e seu dono, no passeio se tem momentos prazerosos tanto para dono como para o seu cão, infelizmente temos uma demonização e detração de inumeras ferramentas que auxiliam essa atividade maravilhosa, muitos dos casos deveriam ter sido resolvidos 
        </Info>
       </ContainerBox> 


       <ContainerBox>
       <ContainerIMG>
        <img src={Bagunça} />
       </ContainerIMG>
       <Info>
       <TitleInfo>Destruição de objetos</TitleInfo>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui  exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
        </Info>
       </ContainerBox> 
    </>
  );
}