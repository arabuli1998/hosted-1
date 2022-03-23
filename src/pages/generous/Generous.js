import React from 'react'
import styled from 'styled-components'

export default function Generous(){
  return (
    <GenerousContainer>
        <div className='text'>
            <h1>How Generous Is Your State</h1>
            <p>Data from January 1 through November 30, 2018</p>
        </div>
        <img src="https://react-next-landing.redq.io/_next/static/images/map-c492c2ecba63aff7ee19fe564eb3eed1.png" alt=""/>

    </GenerousContainer>
  )
}



const GenerousContainer=styled.div`
display: flex;
width:100%;
flex-direction: column;
align-items: center;
margin-top: 70px;

.text{
    text-align: center;

    h1{
        font-weight: 400;
        padding:1rem 0;
    }
}
img{
    width: 100%;
    height: auto;
    margin-top: 20px;
}
`;