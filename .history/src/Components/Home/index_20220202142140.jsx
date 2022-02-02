import React from "react"
import { Home, Baner, HomeB, Equip, Comportamental, MeusCaes, Serviços, Contato } from "./Style"
import Equipamentos from "../Equipamentos/index"
import Sobre from '../Sobre/index'
import MeusCaes from "../MeusCaes"


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

  const clickComportamental = () => {
    return (
      props.setGeral(<Sobre />)
    );
  
  }

  const clickGuarda = () => {
    return (
      props.setGeral(<Sobre />)
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
       <Comportamental onClick={clickHome} >Comportamental</Comportamental>
       <MeusCaes onClick={clickHome}  >Guarda e proteção</MeusCaes>
       <Serviços onClick={clickHome}>Serviços</Serviços>
       <Contato onClick={clickHome}>Contato</Contato>
      
    </Home>
    </>
  );
}