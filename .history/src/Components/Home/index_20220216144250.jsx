import React, {useEffect, useState} from "react"
import { Home,  HomeB, Equip, Comportamental, MeusCaes, Serviços, Contato } from "./Style"
import Equipamentos from "../Equipamentos/index"
import Sobre from '../Sobre/index'
import Comport  from '../Comportamental/index'
import Clientes from '../Clientes/index'
import Serv from "../Serviços"
import Cont from '../Contato/index'



export default (props) => {
     
  

  return (
   <>
    <Home> 


       <HomeB 
         disabled={props.geral == <Sobre /> ? true : false  }
         onClick={()=>(props.setGeral(<Sobre />))}>     
         <p>HOME</p>
      </HomeB> 



       <Equip 
         disabled={props.geral === <Equipamentos /> ? true : false  }
        onClick={()=>(props.setGeral(<Equipamentos />))}>
        <p>Equipamentos</p>
       </Equip>

       <Comportamental 
          disabled={props.Geral === <Comport /> ? true : false  }
          onClick={() =>(props.setGeral(<Comport />))}>
           
         <p>Comportamental</p>
       </Comportamental>

       <MeusCaes
          disabled={props.Geral === <Clientes /> ? true : false  }
          onClick={() =>(props.setGeral(<Clientes />))}>
         <p>Casos especiais</p>
       </MeusCaes>

       <Serviços
        disabled={props.Geral === <Serv /> ? true : false  }
        onClick={() =>(props.setGeral(<Serv />))}>
         <p>Serviços</p>
       </Serviços>

       <Contato 
       disabled={props.Geral === <Cont/> ? true : false  }
       onClick={() =>(props.setGeral(<Cont />))}>
         <p>Contato</p>
      </Contato>
      
    </Home>
    </>
  );
}
