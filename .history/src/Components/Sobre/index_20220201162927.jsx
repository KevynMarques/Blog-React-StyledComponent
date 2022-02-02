import { Sobre, Tittle } from "./style"
import Foto from '../Image/foto.png'

export default () => {
  return (
<>
   <Tittle> 
    <h1>Adestramento DK</h1> 
      <h2>Quem sou eu?</h2>
    </Tittle>


  <Sobre>
    <section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut temporibus eum illo. Labore veritatis inventore harum quis temporibus odit ab, sunt minus officia ipsum sed nihil dolores maxime id. <br></br>
    </p>
       <div>
        <img src={Foto} />
       </div>
    </section>
  </Sobre>
</>

  );
}