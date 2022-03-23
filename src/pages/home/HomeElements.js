import styled from "styled-components";
import { Main,Container } from "../../components/Globalstyles";

export const HomePage=styled(Main)`
display: flex;
height: auto;
flex-wrap:wrap;
flex-direction: row;
margin-bottom: 50px;
`;

export const Image=styled.div`
border:1px solid red;
height: 100vh;
display: flex;
background-image: url("https://react-next-landing.redq.io/_next/static/images/slide3-06a1c65bae7a0992a6ef27e1fe452152.png");
background-position:center;
background-size: cover;
flex:3 2 450px;


`;

export const Text=styled.div`
height: 100%;
flex:1 2 330px;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0 1.5rem ;

.main-container{
    display: flex;
    flex-direction:column;
    width: 100%;
    height:75%;
    justify-content: space-around;
    
    .container{
        display:flex;
        background-color:rgba(179,184,127,0.40);
        border-radius:15px;
        max-width: 350px;
        
        p{
            background-color:red;
            padding:0 1rem;
            color:white;
            border-radius:15px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        h5{
            color:black;
            margin-left: 10px;
            font-size: 1rem;
        }
    }

    h1{
        font-size: 3.1rem;
        font-weight:800;
    }
    h5{
        color:gray;
        font-size:1.2rem;
        font-weight:400;
    }
    p{
        font-size: 1.1rem;
    }
    .button{
    height:50px;
    max-width:250px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 25px;
    justify-content: space-between;
    cursor:pointer;
    margin-top:35px;
    margin-bottom:35px;
    transition:0.5s ease-in-out;
    p{
        font-weight:600;
        z-index: 2;
    }

    h2{
        height:50px;
        width:70px;
        background-color:yellow;
        max-width: 250px;
        position: absolute;
        border-radius: 25px;
        transition:0.5s ease-in-out;
        cursor:pointer;
    }
    &:hover h2 {
        width: 100%;
  }
}
}
@media screen and (max-width:400px){
    margin-top: 80px;
    padding: 0 0.5rem;
}
`;