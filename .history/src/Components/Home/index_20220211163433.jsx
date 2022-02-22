import React, {useEffect, useState} from "react"
import { Home,  HomeB, Equip, Comportamental, MeusCaes, Serviços, Contato } from "./Style"
import Equipamentos from "../Equipamentos/index"
import Sobre from '../Sobre/index'
import Comport  from '../Comportamental/index'
import Clientes from '../Clientes/index'
import Serv from "../Serviços"
import Cont from '../Contato/index'



export default (props) => {
     
  const [ativoH, setAtivoH] = useState(true)
  const [ativoE, setAtivoE] = useState(true)
  const [ativoC, setAtivoC] = useState(true)
  const [ativoCE, setAtivoCE] = useState(true)
  const [ativoS, setAtivoS] = useState(true)
  const [ativoCO, setAtivoCO] = useState(true)
  
    

  return (
   <>
    <Home> 


       <HomeB 
         setAtivoH={setAtivoH}
         ativoH={ativoH}
         onClick={()=>(props.setGeral(<Sobre />), setAtivoH(false))}>     
         <p>HOME</p>
       </HomeB> 



       <Equip onClick={()=>(props.setGeral(<Equipamentos />))}
          setAtivoE={setAtivoE}
          ativoE={ativoE}
       >
        <p>Equipamentos</p>
       </Equip>

       <Comportamental onClick={() =>(props.setGeral(<Comport />))}   setAtivo={setAtivo}
         ativo={ativoC} >
         <p>Comportamental</p>
       </Comportamental>

       <MeusCaes onClick={() =>(props.setGeral(<Clientes />))}    setAtivo={setAtivo}
         ativo={ativo}>
         <p>Casos especiais</p>
       </MeusCaes>

       <Serviços onClick={() =>(props.setGeral(<Serv />))}    setAtivo={setAtivo}
         ativo={ativo}>
         <p>Serviços</p>
       </Serviços>

       <Contato onClick={() =>(props.setGeral(<Cont />))}   setAtivo={setAtivo}
         ativo={ativo}>
         <p>Contato</p>
      </Contato>
      
    </Home>
    </>
  );
}
