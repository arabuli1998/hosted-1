import React from 'react'
import { Main,Container } from '../../components/Globalstyles'
import styled from 'styled-components'

export default function Global() {
  return (
    <MainContainer>
<GlobalContainer>
    <div className='text'>
        <h1>
            Would You like to <span>Help people </span><br/>Across the Globe?
        </h1>
        <p>
            Data from January 1 through November 30, 2018
        </p>
        <div className='buttons'>
            <button>
                Funding Progress
            </button>
            or
            <button className='button'><h2></h2><p>- Explore Our Project</p></button>
        </div>
        </div>
    <div className='box'>xcv</div>
</GlobalContainer>
    </MainContainer>
  )
}

const MainContainer=styled(Main)`
background: linear-gradient( rgba(0,0,0,0.8) 50%, rgba(5,1,59,0.5)100%),url("https://images.hdqwalls.com/download/programming-world-map-on-2560x1024.jpg");
box-sizing:border-box;
background-position: center;
background-size: cover;
align-items: center;
height:auto;
margin-top: 70px;


`;
const GlobalContainer=styled(Container)`
min-height:70vh;
height: auto;
justify-content: space-between;
align-items: center;

.box{
    height: 400px;
    background-color: white;
    max-width:550px;
    flex: 1 2 390px;
    padding: 0 1rem;
}
.text{

    min-height: 400px;
    flex: 1 2 390px;
    max-width:650px;
    padding: 0 1rem;
    h1{
        color: white;
        font-weight:400;
        margin-bottom: 30px;
        span{
            color:yellow;
        }
    }
    p{
        
        color: white;
    }
    .buttons{
        display:flex;
        width:100%;
        color: white;
        justify-content:space-between;
        align-items: center;
        margin-top: 30px;
        flex-wrap: wrap;

        button{
            flex: 1 2 150px;
            height:50px;
            width:100%;
            max-width:200px;
            border-radius:30px;
            cursor:pointer;
            outline: none;
            color:black;
            font-weight:600;
            background-color: yellow;
            
        }
        .button{
    height:50px;
    max-width:200px;
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
    background-color: rgba(238, 238, 238, 0.0);
    border: none;
    p{
        font-weight:600;
        z-index: 2;
        color:yellow;
    }

    h2{
        height:50px;
        width:70px;
        background-color: rgba(238, 238, 238, 0.06);
        max-width: 200px;
        position: absolute;
        border-radius: 25px;
        transition:0.5s ease-in-out;
        cursor:pointer;
        background-color: none;
    }
    &:hover h2 {
        width: 100%;
        background-color: rgba(238, 238, 238, 0.2);
  }
}
    }
}
@media screen and (max-width:850px){
flex-direction: column;
.text{
   
}
}
`;
