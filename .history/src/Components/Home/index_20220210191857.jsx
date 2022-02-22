import React from "react"
import { Home,  HomeB, Equip, Comportamental, MeusCaes, Serviços, Contato } from "./Style"
import Equipamentos from "../Equipamentos/index"
import Sobre from '../Sobre/index'
import Comport  from '../Comportamental/index'
import Clientes from '../Clientes/index'
import Serv from "../Serviços"
import Cont from '../Contato/index'



export default (props) => {

  const clickEquipe = () => {
    return (
      props.setGeral(<Equipamentos />)
    );
  
  }

  const clickHome = (atvo) => {
    return (
      props.setGeral(<Sobre />), 


    );
  
  }

  const clickComport = () => {
    return (
      props.setGeral(<Comport />)
    );
  
  }

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
           onClick={clickHome}
           ativo={ativo}
           >
         <p>HOME</p>
       </HomeB> 

       <Equip onClick={clickEquipe} >Equipamentos</Equip>
       <Comportamental onClick={clickComport} >Comportamental</Comportamental>
       <MeusCaes onClick={clickMeusCaes}>Casos especiais</MeusCaes>
       <Serviços onClick={clickServ}>Serviços</Serviços>
       <Contato onClick={clickContato}>Contato</Contato>
      
    </Home>
    </>
  );
}
