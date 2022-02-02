import { Sobre, Tittle } from "./style"
import Foto from '../Image/foto.png'
import LV from '../Image/LV.jpg'; 

export default () => {
  return (
<>
   <Tittle> 
    <h1>Adestramento DK</h1> 
      <h2>Quem sou eu?</h2>
    </Tittle>


  <Sobre>
    <section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
      <br></br>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
    </p>
       <div>
        <img src={Foto} />
       </div>
    </section>
  </Sobre> 


  <Tittle> 
      <h3>Meus cães</h3>
    </Tittle>


  <Sobre>
    <section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. 
      <br></br>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis ratione aspernatur odit id, suscipit quasi, fugiat qui exercitationem enim cumque accusantium laborum quaerat dicta nulla. Modi necessitatibus aliquid ipsum!
    </p>
       <div>
        <img src={LV} />
       </div>
    </section>
  </Sobre>
  
</>

  );
}