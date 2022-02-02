import styled from "styled-components";  


export const  Home  = styled.div `
     width: 100vw;
     height: 40px;
     margin: 0;
     position: fixed;
     z-index: 99999;
     background: rgba( 0, 0, 0, 0.7 );
     box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
     backdrop-filter: blur( 7.5px );
     -webkit-backdrop-filter: blur( 7.5px );
     color:white; 

     button {
   border-top: 1px solid#4445468;
   background: #9c9c9c;
   background: -webkit-gradient (linear, left top, left bottom, from(#000000), to(#9c9c9c));
   background: -webkit-linear-gradient(top, #000000, #9c9c9c);
   background: -moz-linear-gradient(top, #000000, #9c9c9c);
   background: -ms-linear-gradient(top, #000000, #9c9c9c);
   background: -o-linear-gradient(top, #000000, #9c9c9c);
    padding: px 18px;
   -webkit-border-radius: 40px;
   -moz-border-radius: 40px;
   border-radius: 40px;
   -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
   -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
   box-shadow: rgba(0,0,0,1) 0 1px 0;
   text-shadow: rgba(0,0,0,.4) 0 1px 0;
   color: #ffffff;
   font-size: 13px;
   font-family: Helvetica, Arial, Sans-Serif;
   text-decoration: none;
   vertical-align: middle;
   }
.button:hover {
   border-top-color: #000000;
   background: #000000;
   color: #ffffff;
   }
.button:active {
   border-top-color: #3d393d;
   background: #3d393d;
     }
`;
  