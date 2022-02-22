import styled from "styled-components";  


export const Home = styled.button `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
background:${props => props.ativo ? '#2e2e2e' : '#000000'};
color:#ffffff;
border:3px solid #ffffff;
text-shadow:0px -1px 3px #000000;
box-shadow:2px 2px 5px #000000;
box-shadow:2px 2px 5px #000000;
box-shadow:2px 2px 5px #000000;
border-radius:25px 25px 25px 25px;
border-radius:25px 25px 25px 25px;
border-radius:25px 25px 25px 25px;
width:130px;
height: 30px;
font-family: 'Poppins', sans-serif;
font-size: 13px;

&:hover {
  background-color: black;
}

cursor:pointer;
margin:0 auto;
margin-left: 35px;

&:active {
  transform: scale(0.9);
}

`;


export const Equip = styled(Home) `

background:${props => props.ativoEquip ? '#2e2e2e' : '#000000'};

`;

export const Comportamental = styled(Home) `

background:${props => props.ativoComp ? '#2e2e2e' : '#000000'};

`;


export const MeusCaes = styled(Home) `

background:${props => props.Casos? '#2e2e2e' : '#000000'};

`;


export const Serviços = styled(Home) `

background:${props => props.serviços? '#2e2e2e' : '#000000'};

`;

export const Contato = styled(Home) `

background:#2e2e2e;

`;



  