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
     display: flex;
     align-items: center;
     justify-content: center;

     button {
font:normal 15px "Courier New", Courier, monospace;
font-style:normal;
color:#ffffff;
background:#2e2e2e;
border:3px solid #ffffff;
text-shadow:0px -1px 3px #000000;
box-shadow:2px 2px 5px #000000;
-moz-box-shadow:2px 2px 5px #000000;
-webkit-box-shadow:2px 2px 5px #000000;
border-radius:25px 25px 25px 25px;
-moz-border-radius:25px 25px 25px 25px;
-webkit-border-radius:25px 25px 25px 25px;
width:36px;
padding:10px 40px;

cursor:pointer;
margin:0 auto;

.i2Style:active{
cursor:pointer;
position:relative;
top:2px;
}

`;
  