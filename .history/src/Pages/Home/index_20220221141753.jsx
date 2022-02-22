import React, {useState} from "react"
import {  Home, Videos, Comportamental, Serviços, Diversos, Contato } from "../../Components/Buttons/Style"
import Sobre from '../../Components/Sobre/index'
import Comport  from '../../Components/Comportamental/index'
import Clientes from '../../Components/Clientes/index'
import Serv from "../../Components/Serviços"
import Cont from '../../Components/Contato/index'
import { ContainerHeader } from "../../Components/Containers/style"




export default (props) => {
     
  const [ativo, setAtivo] = useState(false)
  const [ativoVideos, setAtivoVideos] = useState(true)
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
         setAtivoVideos(true),
         setComp(true),
         setCasos(true),
         setServiços(true)
         )}>     
         <p>Sobre mim</p>
      </Home> 


       <Comportamental 
          onClick={() =>(props.setGeral(<Comport />),
          setAtivo(true),
          setAtivoVideos(true),
          setComp(false),
          setCasos(true),
          setServiços(true))} 

          setComp={setComp}
          ativoComp={ativoComp}>
           
         <p>Artigos</p>
       </Comportamental>

       <Videos
        ativoEquip={ativoVideo}
        setAtivoVideo={setAtivoVideo}
        onClick={()=>(props.setGeral(<Videos />), 
        setAtivo(true),
        setAtivoVideo(false),
        setComp(true),
        setCasos(true),
        setServiços(true)
        )}>
        <p>Videos</p>
       </Videos>

       <Diversos
          onClick={() =>(props.setGeral(<Clientes />),
          setAtivo(true),
          setAtivoVideo(true),
          setComp(true),
          setCasos(false),
          setServiços(true))}    
          setCasos={setCasos}
          Casos={Casos}>
         <p>Casos especiais</p>
       </Diversos>


       <Serviços onClick={() =>(props.setGeral(<Serv />),
        setAtivo(true),
        setAtivoVideo(true),
        setComp(true),
        setCasos(true),
        setServiços(false))}    
        setServiços={setServiços}
        serviços={serviços}>
         <p>Serviços</p>
       </Serviços>

       <Contato onClick={() =>(props.setGeral(<Cont />),
        setAtivo(true),
        setAtivoVideo(true),
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
