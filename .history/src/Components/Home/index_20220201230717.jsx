import { Home, Baner, HomeB, Equip, Comportamental, Guarda, Serviços, Contato } from "./Style"
import Dog from '../Image/Dog.png'
import Equipamentos from "../Equipamentos/index"
import { useEffect, useState } from "react"
import 


export default (props) => {

  const clickEquipe = ()=> {
    props.setGeral(<Equipamentos />);
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