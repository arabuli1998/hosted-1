import React,{useState} from 'react'
import styled from 'styled-components'
import logo from './logo/logo.PNG'
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscChromeClose} from 'react-icons/vsc'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    const[navbarState,setNavbarState]=useState(false)
    const[scrollstate,setScrollstate]=useState(false)
    const toTop=()=>{
        window.scrollTo({top:0})
      }
      window.addEventListener("scroll",()=>{
        window.pageYOffset>200 ? setScrollstate(true) : setScrollstate(false)
      })
  return (
    <>
    <Nav scrollstate={scrollstate}>
        <div className='nav-container'>
            <div className='container'>
            </div>
        <div className='toggle'>
            <h5>Help us help them</h5>
            </div>
        <button onClick={()=>setNavbarState(!navbarState)}>Open</button>
        </div>
    </Nav>
    <ResponsiveNav state={navbarState} onClick={()=>setNavbarState(!navbarState)}>
    <ul>
           <li>
               <Link to="home"  smooth={true}
               offset={-70} duration={500}  
               onClick={()=>setNavbarState(false)}>Home
               </Link>
            </li> 
           <li>
               <Link to="feature"  smooth={true}
               offset={-70} duration={500} 
               onClick={()=>setNavbarState(false)}>Features
               </Link>
            </li>
           <li>
               <Link to="howework"  smooth={true}
               offset={-70}
               duration={500} onClick={()=>setNavbarState(false)}>How We Work</Link>
            </li>
           <li>
               <Link to="testimonials"  smooth={true}
               offset={-70} duration={500} 
               onClick={()=>setNavbarState(false)}>Testimonials</Link>
            </li>
        </ul>
    </ResponsiveNav>
    </>
  )
}
const Nav=styled.nav`
display: flex;
justify-content: center;
position: fixed;
width: 100%;
background-color:  ${({scrollstate})=>(scrollstate ? "white" : "none")};
z-index: 4;
.nav-container{
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height:  ${({scrollstate})=>(scrollstate ? "100px" : "110px")};;

.toggle{
      h5{
        font-size: 1rem;
        color:darkgray;
      }
    }


    .container{
        cursor: pointer;
        background-image: url(${logo});
        width: 100px;
        height: 50px;
       background-position: center;
       background-size: cover;
    }


button{
    border: none;
    background-color: red;
    z-index: 9;
    color: white;
   right: 0;
   width: 80px;
   height: 120px;
   cursor: pointer;
   outline: none;
}
@media screen and (max-width:780px){
    
.toggle{
    display: none;
}
}
}
`;

const ResponsiveNav=styled.div`
display: flex;
position: absolute;
z-index: 5;
background-color: rgba(0,0,0,0.5);
width: 100%;
height: 100vh;
position: fixed;
align-items: center;
transition:0.3s ease-in-out;
top: 0;
right:${({state})=>state?"0px" : "-150%"};
ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 0;
    position: absolute;
    max-width: 400px;
    width:100%;
    background-color: white;
    justify-content: space-around;
    height: 100%;
    li{
        margin: 1rem 0;
        width: 100%;
        padding: 1rem 0;
        text-align: center;
        a{
            text-decoration: none;
              color: #0077b6;
              font-size: 1.2rem;
              transition: 0.2s ease-in-out;
              cursor: pointer;
              :hover{
                  color: #023e8a;
              }
        }
        :first-of-type{
            a{
                color:#023e8a;
                font-weight: 800;
            }
        }
    }
}
`;