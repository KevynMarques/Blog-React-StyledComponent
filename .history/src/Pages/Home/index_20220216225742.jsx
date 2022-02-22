import React, {useState} from "react"
import {  Home, Equip, Comportamental, MeusCaes, Serviços, Contato } from "../../Components/Buttons/Style"
import Equipamentos from "../../Components/Equipamentos/index"
import Sobre from '../../Components/Sobre/index'
import Comport  from '../../Components/Comportamental/index'
import Clientes from '../../Components/Clientes/index'
import Serv from "../../Components/Serviços"
import Cont from '../../Components/Contato/index'
import { ContainerHeader } from "../../Components/Containers/style"




export default (props) => {
     
  const [ativo, setAtivo] = useState(false)
  const [ativoEquip, setAtivoEquip] = useState(true)
  const [ativoComp, setComp] = useState(true)
  const [Casos, setCasos] = useState(true)
  const [serviços, setServiços] = useState(true)
  const [contato, setContato] = useState(true)
  

  return (
   <>
    <ContainerHeader> 


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
         Sobre mim
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
        Equipamentos
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
           
         <p>Comportamental
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
          Casos especiais
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

    </ContainerHeader>
    </>
  );
}
