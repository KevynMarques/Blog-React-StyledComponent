import React from "react"
import { Home,  HomeB, Equip, Comportamental, MeusCaes, Serviços, Contato } from "./Style"
import Equipamentos from "../Equipamentos/index"
import Sobre from '../Sobre/index'
import Comport  from '../Comportamental/index'
import Clientes from '../Clientes/index'
import Serv from "../Serviços"
import Cont from '../Contato/index'



export default (props) => {



  const clickMeusCaes = () => {
    return (
      props.setGeral(<Clientes />)
    );
  
  }

  const clickServ = () => {
    return (
      props.setGeral(<Serv />)
    );
  
  }

  const clickContato = () => {
    return (
      props.setGeral(<Cont />)
    );


  }

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

       <Comportamental onClick={clickComport} >Comportamental</Comportamental>
       <MeusCaes onClick={clickMeusCaes}>Casos especiais</MeusCaes>
       <Serviços onClick={clickServ}>Serviços</Serviços>
       <Contato onClick={clickContato}>Contato</Contato>
      
    </Home>
    </>
  );
}
