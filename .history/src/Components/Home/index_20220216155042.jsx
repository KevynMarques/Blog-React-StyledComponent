import React, {useEffect, useState} from "react"
import { Home,  HomeB, Equip, Comportamental, MeusCaes, Serviços, Contato } from "./Style"
import Equipamentos from "../Equipamentos/index"
import Sobre from '../Sobre/index'
import Comport  from '../Comportamental/index'
import Clientes from '../Clientes/index'
import Serv from "../Serviços"
import Cont from '../Contato/index'



export default (props) => {
     
 useEffect(()=>{

 },[props.geral])

  return (
   <>
    <Home> 


       <HomeB 
         onClick={()=>(props.setGeral(<Sobre />))}
         disabled={props.geral === <Sobre /> ? true : false}>     
         <p>HOME</p>
      </HomeB> 

       <Equip 
         disabled={props.geral === <Equipamentos /> ? true: false  }
        onClick={()=>(props.setGeral(<Equipamentos />))}>
        <p>Equipamentos</p>
       </Equip>

       <Comportamental 
          disabled={props.geral === <Comport /> ? true : false  }
          onClick={() =>(props.setGeral(<Comport />))}>
         <p>Comportamental</p>
       </Comportamental>

       <MeusCaes
          disabled={props.geral === <Clientes /> ? true : false }
          onClick={() =>(props.setGeral(<Clientes />))}>
         <p>Casos especiais</p>
       </MeusCaes>

       <Serviços
        disabled={props.geral === <Serv /> ? true  : false  }
        onClick={() =>(props.setGeral(<Serv />))}>
         <p>Serviços</p>
       </Serviços>

       <Contato 
       disabled={props.geral === <Cont/> ? true : false  }
       onClick={() =>(props.setGeral(<Cont />))}>
         <p>Contato</p>
      </Contato>
      
    </Home>
    </>
  );
}
