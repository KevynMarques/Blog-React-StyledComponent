import React, {useState} from "react"
import { ContaierHeader,  Home, Equip, Comportamental, MeusCaes, Serviços, Contato } from "./Style"
import Equipamentos from "../Equipamentos/index"
import Sobre from '../Sobre/index'
import Comport  from '../Comportamental/index'
import Clientes from '../Clientes/index'
import Serv from "../Serviços"
import Cont from '../Contato/index'




export default (props) => {
     
  const [ativo, setAtivo] = useState(false)
  const [ativoEquip, setAtivoEquip] = useState(true)
  const [ativoComp, setComp] = useState(true)
  const [Casos, setCasos] = useState(true)
  const [serviços, setServiços] = useState(true)
  const [contato, setContato] = useState(true)
  

  return (
   <>
    <ContaierHeader> 


       <Home 
         setAtivo={setAtivo}
         ativo={ativo}
         onClick={()=>(props.setGeral(<Sobre />), 
         setAtivo(false),
         setAtivoEquip(true),
         setComp(true),
         setCasos(true),
         setServiços(true)
         )}>     
         <p>Sobre mim</p>
      </Home> 



       <Equip 
        ativoEquip={ativoEquip}
        setAtivoEquip={setAtivoEquip}
        onClick={()=>(props.setGeral(<Equipamentos />), 
        setAtivo(true),
        setAtivoEquip(false),
        setComp(true),
        setCasos(true),
        setServiços(true)
        )}>
        <p>Equipamentos</p>
       </Equip>

       <Comportamental 
          onClick={() =>(props.setGeral(<Comport />),
          setAtivo(true),
          setAtivoEquip(true),
          setComp(false),
          setCasos(true),
          setServiços(true))} 

          setComp={setComp}
          ativoComp={ativoComp}>
           
         <p>Comportamental</p>
       </Comportamental>

       <MeusCaes
          onClick={() =>(props.setGeral(<Clientes />),
          setAtivo(true),
          setAtivoEquip(true),
          setComp(true),
          setCasos(false),
          setServiços(true))}    
          setCasos={setCasos}
          Casos={Casos}>
         <p>Casos especiais</p>
       </MeusCaes>

       <Serviços onClick={() =>(props.setGeral(<Serv />),
        setAtivo(true),
        setAtivoEquip(true),
        setComp(true),
        setCasos(true),
        setServiços(false))}    
        setServiços={setServiços}
        serviços={serviços}>
         <p>Serviços</p>
       </Serviços>

       <Contato onClick={() =>(props.setGeral(<Cont />),
        setAtivo(true),
        setAtivoEquip(true),
        setComp(true),
        setCasos(true),
        setServiços(true), 
        setContato(false)
       )}  
          setContato={setContato}
          contato={contato}>
         <p>Contato</p>
      </Contato>

    </Home>
    </>
  );
}
