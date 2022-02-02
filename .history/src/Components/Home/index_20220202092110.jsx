import React from "react"
import { Home, Baner, HomeB, Equip, Comportamental, Guarda, Serviços, Contato } from "./Style"
import Equipamentos from "../Equipamentos/index"
import Sobre from '../Sobre/index'


export default (props) => {

  const clickEquipe = () => {
    <props className="setTeste"></props>(<Sobre />)
  }

  console.log(clickEquipe);

  return (
   <>
    <Home> 
       <HomeB>HOME</HomeB>
       <Equip onClick={clickEquipe}>Equipamentos</Equip>
       <Comportamental>Comportamental</Comportamental>
       <Guarda>Guarda e proteção</Guarda>
       <Serviços>Serviços</Serviços>
       <Contato>Contato</Contato>
      
    </Home>
    </>
  );
}