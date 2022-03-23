import styled from "styled-components";
import { Main,Container} from "../../components/Globalstyles";

export const HowWe=styled(Container)`
flex-direction: column;
align-items:center;
margin-top: 100px;

h1{
        font-weight:400;
       
    }
    p{
        text-align: center;
    }

nav{
    width:100%;
    display:flex;
    justify-content: space-around;
    flex-wrap:wrap;
    padding:10px 0px;


    div{
        padding:1.5vh 12.5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        flex: 1 9 300px;
        max-width:450px;

        h4{
            font-weight:620;
        }
    }
}

`;