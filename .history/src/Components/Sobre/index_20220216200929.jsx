import {Baner} from "./style"
import Foto from '../Image/foto.png'
import LV from '../Image/LV.jpg'; 
import Dog from '../Image/Dog.png'
import { Tittle } from "../Textos&Titles/style";
import { ContainerBox, ContainerIMG } from "../Containers/style";
import { Info } from "../Textos&Titles/style";



export default () => {
  return (
<>
     <Baner>
       <img src={Dog} />
     </Baner>

   <Tittle> 
      <h1>Adestramento DK</h1> 
      <h2>Quem sou eu?</h2>
  </Tittle>


  <ContainerBox>
       <ContainerIMG>
        <img src={Foto} />
       </ContainerIMG>
      
       </ContainerBox> 


  <Tittle> 
      <h2>Viper e Logan</h2>
      <p>Acompanhem nosso dia a dia.</p>
    </Tittle>


    <ContainerBox>

       <ContainerIMG>
        <img src={LV} />
       </ContainerIMG>
       
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
       <br></br>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem  enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
      </p>

       </ContainerBox> 


 
</>

  );
}