import React from "react"
import { Home,  HomeB, Equip, Comportamental, MeusCaes, Serviços, Contato } from "./Style"
import Equipamentos from "../Equipamentos/index"
import Sobre from '../Sobre/index'
import Comport  from '../Comportamental/index'
import Clientes from '../Clientes/index'
import Serv from "../Serviços"
import Cont from '../Contato/index'



export default (props) => {
     

  return (
   <>
    <Home> 
       <HomeB 
         onClick={() =>(props.setGeral(<Sobre />))} 
         background={'#FFF'}
         
         >     
         <p>HOME</p>
       </HomeB> 

       <Equip onClick={()=>(props.setGeral(<Equipamentos />))}>
        <p>Equipamentos</p>
       </Equip>

       <Comportamental onClick={() =>(props.setGeral(<Comport />))} >
         <p>Comportamental</p>
       </Comportamental>

       <MeusCaes onClick={() =>(props.setGeral(<Clientes />))} >
         <p>Casos especiais</p>
       </MeusCaes>

       <Serviços onClick={() =>(props.setGeral(<Serv />))}>
         <p>Serviços</p>
       </Serviços>

       <Contato onClick={() =>(props.setGeral(<Cont />))}>
         <p>Contato</p>
      </Contato>
      
    </Home>
    </>
  );
}
