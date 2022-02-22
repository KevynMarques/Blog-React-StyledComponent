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
         onClick={() =>(props.setGeral(<Sobre />))}>
         <p>HOME</p>
       </HomeB> 

       <Equip onClick={() =>(props.setGeral(<Equipamentos />))}>
         <p>Equipamentos</p>
       </Equip>

       <Comportamental onClick={() =>(props.setGeral(<Comport />))} >
         <p>Comportamental</p>
       </Comportamental>

       <MeusCaes onClick={clickMeusCaes}>
         <p>Casos especiais</p>
       </MeusCaes>
       <Serviços onClick={clickServ}>Serviços</Serviços>
       <Contato onClick={clickContato}>Contato</Contato>
      
    </Home>
    </>
  );
}
