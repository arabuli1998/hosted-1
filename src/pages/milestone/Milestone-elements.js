import styled from "styled-components";
import { Container } from "../../components/Globalstyles";

export const Milestones=styled(Container)`
margin-top: 50px;
display:flex;


div{
    height:400px;
    width: 100%;
    background:url('https://www.worldgbc.org/sites/default/files/Content%20pages%20Africa%20Day%20Womens%20eNews%20blog.jpg');
    background-size:cover;
    background-position: center;
    border-radius:10px;
    display: flex;
    align-items:center;
    padding:20px 25px;
    @media screen and (max-width:500px){
        padding:25px 0;
    }

    nav{
        height: 100%;
        background-color: yellow;
        max-width:370px;
        width:100%;
        left:0;
        border-radius:10px;
        text-align:center;
        display:flex;
        flex-direction: column;
        align-items:center;
        h1{
            font-size: 35px;
        }
        
        h3{
            font-weight:620;
            padding:20px 0;
        }
        h1{
            font-weight: 30px;
        }
nav{
    height:50px;
    max-width:200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 20px;
    cursor:pointer;
    
    p{
        width: 100%;
        z-index: 2;
    }

    h2{
        height:50px;
        width:70px;
        background-color:white;
        max-width: 200px;
        position: absolute;
        border-radius: 20px;
        transition:width 1s;;
        cursor:pointer;
    }
    &:hover h2 {
        width: 100%;
  }
}
    }
}
`;

export const Buttoned =styled.div`
background-color: green;
`;

export const Text=styled(Container)`
display:flex;
justify-content: space-around;
flex-wrap: wrap;
padding:5px 0;

nav{
    text-align: center;
    flex:1 4 150px;
    max-width:150px;
    width:100%;
    margin-top: 10px;
}
`;