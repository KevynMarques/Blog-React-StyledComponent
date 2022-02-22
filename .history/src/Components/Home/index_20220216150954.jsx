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
     props.setGeral()
 },[props.geral])
  return (
   <>
    <Home> 


       <HomeB 
         onClick={()=>(props.setGeral(<Sobre />))}
         disabled={props.geral === <Sobre /> ? false: true }>     
         <p>HOME</p>
      </HomeB> 

       <Equip 
         disabled={props.geral == <Equipamentos /> ? false : true  }
        onClick={()=>(props.setGeral(<Equipamentos />))}>
        <p>Equipamentos</p>
       </Equip>

       <Comportamental 
          disabled={props.geral == <Comport /> ? false : true }
          onClick={() =>(props.setGeral(<Comport />))}>
           
         <p>Comportamental</p>
       </Comportamental>

       <MeusCaes
          disabled={props.geral == <Clientes /> ? false : true  }
          onClick={() =>(props.setGeral(<Clientes />))}>
         <p>Casos especiais</p>
       </MeusCaes>

       <Serviços
        disabled={props.geral == <Serv /> ? false  : true   }
        onClick={() =>(props.setGeral(<Serv />))}>
         <p>Serviços</p>
       </Serviços>

       <Contato 
       disabled={props.geral == <Cont/> ? false : true  }
       onClick={() =>(props.setGeral(<Cont />))}>
         <p>Contato</p>
      </Contato>
      
    </Home>
    </>
  );
}
