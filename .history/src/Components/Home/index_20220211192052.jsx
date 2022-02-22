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
  
  const teste = 'setAtivoEquip(false)';

  return (
   <>
    <Home> 


       <HomeB 
         setAtivo={setAtivo}
         ativo={ativo}
         onClick={()=>(props.setGeral(<Sobre />), 
         setAtivo(false))}>     
         <p>HOME</p>
      </HomeB> 



       <Equip 
        ativoEquip={ativoEquip}
        setAtivoEquip={setAtivoEquip}
        onClick={()=>(props.setGeral(<Equipamentos />), 
        setAtivo(true),
        setAtivoEquip(false)
        )}
         
       >
        <p>Equipamentos</p>
       </Equip>

       <Comportamental onClick={() =>(props.setGeral(<Comport />))}   setAtivo={setAtivo}
         ativo={ativo} >
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
