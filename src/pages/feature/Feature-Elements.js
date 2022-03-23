import styled from "styled-components";
import { Container } from "../../components/Globalstyles";

export const Features=styled(Container)`
padding:10px 0px;
flex-wrap:wrap;
justify-content: space-around;
margin-top:20px;


div{
    display:flex;
    flex: 1 9 300px;
    justify-content:space-around;
    padding:1.5vh 12.5px;
    align-items:center;
    max-width:450px;
    @media screen and (max-width:350px){
        flex-wrap: wrap;
        justify-content: center;
    }

    nav{
        max-width:250px;
        width:100%;
    }
    img{
        width:60px;
        height:60px;
    }
    h4{
        font-weight:620;;
    }
}
`;