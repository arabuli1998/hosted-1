import React from 'react'
import styled from 'styled-components'
import { Main,Container } from '../../components/Globalstyles';

export default function Humanity() {
  return (
    <HumanityContainer id="testimonials">
        <MainContainer>
        <div className='image'>
            <img src="https://react-next-landing.redq.io/_next/static/images/humanity-glob-46a84e854247744cba7db7187d9f4b5b.png" alt=""/>
        </div>
        <div className='text'>
            <h5>GET YOUR COMMUNITY ON BOARD</h5>
            <h1>We are creating a world with basic safety for all.</h1>
            <p>
                We exist to permanently end violent couict and exploitation 
                facing our world’s most isolated and unprotected communities.
                <br/>
                We partner with local visionaries in volatile cousict zones 
                to build community-run initiatives and drive global policy change
                 to end violent cousict, save lives, and give communities the safety
                  they deserve.
            </p>
            <ul>
                <li>Let them drink pure</li>
                <li>Ensure them medicare</li>
                <li>create opportunity of education</li>
            </ul>
            <nav className='button'> <h2></h2><p>-Learn More</p></nav>
        </div>
        </MainContainer>
        <MainContainer>
        <div className='text'>
            <h5>ONLINE SOCIAL FUNDRAISING</h5>
            <h1>We need your help to promotr humanity</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Quis ipsum suspendisse ultrices gravida. 
            </p>
            <ul>
                <li>Let them drink pure</li>
                <li>Ensure them medicare</li>
                <li>create opportunity of education</li>
            </ul>
            <nav className='button'> <h2></h2><p>-Learn More</p></nav>
        </div>
        <div className='image'>
            <img src="https://react-next-landing.redq.io/_next/static/images/promotion-db7aa083f377bfd6fc0dbfcbfc633c26.svg" alt=""/>
        </div>

        </MainContainer>
    </HumanityContainer>
  )
}
const HumanityContainer=styled(Main)`
margin-top: 20px;
`;

const MainContainer=styled(Container)`
display: flex;
margin-top: 80px;

.image{
    flex:3 2 390px;
    height: auto;
    padding:0 1rem;
    max-width:650px;
    img{
        width: 100%;
        height: auto;
    }
}
.text{
    padding:0 1.2rem;
    flex:2 2 390px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
   
    h5{
        color: red;
        font-size: 1rem;
    };
    h1{
       font-weight: 300;
       margin-top:20px;
            margin-bottom: 20px;
    };
    p{
        max-width:450px;
        font-size: 1.05rem;
        color: gray;
        font-weight: 400;
    };
    ul{
        list-style:none;
        li{
            padding: 0.5rem 0;
            font-size:1.05rem;
        }
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
        text-align: center;
        max-width:180px;
        color:black;
        width: 100%;
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
@media screen and (max-width:850px){
    flex-direction: column;
    align-items: center;

    .text{
        h5{
            margin-top: 20px;
            padding: 0 0rem;
        };
        h1{
            margin-top:20px;
            margin-bottom: 20px;
        }
        p{
            margin-bottom: 20px;
        }

    }
}

`;