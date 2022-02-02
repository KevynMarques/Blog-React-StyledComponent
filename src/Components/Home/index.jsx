import React from "react"
import { Home,  HomeB, Equip, Comportamental, MeusCaes, Serviços, Contato } from "./Style"
import Equipamentos from "../Equipamentos/index"
import Sobre from '../Sobre/index'
import Comport  from '../Comportamental/index'
import  Clientes from '../Clientes/index'



export default (props) => {

  const clickEquipe = () => {
    return (
      props.setGeral(<Equipamentos />)
    );
  
  }

  const clickHome = () => {
    return (
      props.setGeral(<Sobre />)
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

  const clickContato = () => {
    return (
      props.setGeral(<Sobre />)
    );


  }

  return (
   <>
    <Home> 
       <HomeB onClick={clickHome} >HOME</HomeB>
       <Equip onClick={clickEquipe} >Equipamentos</Equip>
       <Comportamental onClick={clickComport} >Comportamental</Comportamental>
       <MeusCaes onClick={clickMeusCaes}>Clientes</MeusCaes>
       <Serviços onClick={clickHome}>Serviços</Serviços>
       <Contato onClick={clickHome}>Contato</Contato>
      
    </Home>
    </>
  );
}


  //Fazendo um teste alo mundo.  novo teste