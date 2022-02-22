import React, {useEffect, useState} from "react"
import { Home,  HomeB, Equip, Comportamental, MeusCaes, Serviços, Contato } from "./Style"
import Equipamentos from "../Equipamentos/index"
import Sobre from '../Sobre/index'
import Comport  from '../Comportamental/index'
import Clientes from '../Clientes/index'
import Serv from "../Serviços"
import Cont from '../Contato/index'



export default (props) => {
     
  const [ativo, setAtivo] = useState(true)
  const [ativoEquip, setAtivoEquip] = useState(true)
  const [ativoComp, setComp] = useState(true)
  const [Casos, setCasos] = useState(true)
  

  return (
   <>
    <Home> 


       <HomeB 
         setAtivo={setAtivo}
         ativo={ativo}
         disabled
         onClick={()=>(props.setGeral(<Sobre />))}>     
         <p>HOME</p>
      </HomeB> 



       <Equip 
        ativoEquip={ativoEquip}
        setAtivoEquip={setAtivoEquip}
        onClick={()=>(props.setGeral(<Equipamentos />), 
        setAtivo(true),
        setAtivoEquip(false),
        setComp(true),
        setCasos(true)
        )}>
        <p>Equipamentos</p>
       </Equip>

       <Comportamental 
          onClick={() =>(props.setGeral(<Comport />),
          setAtivo(true),
          setAtivoEquip(true),
          setComp(false),
          setCasos(true))} 

          setComp={setComp}
          ativoComp={ativoComp}>
           
         <p>Comportamental</p>
       </Comportamental>

       <MeusCaes
          onClick={() =>(props.setGeral(<Clientes />),
          setAtivo(true),
          setAtivoEquip(true),
          setComp(true),
          setCasos(false))}    
         setCasos={setCasos}
         Casos={Casos}>
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
