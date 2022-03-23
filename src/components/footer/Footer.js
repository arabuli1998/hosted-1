import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  const FUNDRAISE =[
    {
      name:'Medical',
      link:'medical'
    },
    {
      name:'Emergency',
      link:'emergency'
    },
    {
      name:'Memorial',
      link:'memorial'
    },
    {
      name:'Education',
      link:'education'
    },
    {
      name:'Chatity',
      link:'chatity'
    },
    {
      name:'Nonprofit organization',
      link:'nonprofit'
    },
  ];
  const LEARN  =[
    {
      name:'How invisiblechildrenl',
      link:'medical'
    },
    {
      name:'works',
      link:'emergency'
    },
    {
      name:'Pricing and Fees',
      link:'memorial'
    },
    {
      name:'Common questions',
      link:'education'
    },
    {
      name:'Success stories',
      link:'chatity'
    },
    {
      name:'Supported countries',
      link:'nonprofit'
    },
  ];
  const RESOURCES =[
    {
      name:'Help center',
      link:'medical'
    },
    {
      name:'Blog',
      link:'emergency'
    },
    {
      name:'GoFundMe Stories',
      link:'memorial'
    },
    {
      name:'Press center',
      link:'education'
    },
    {
      name:'Careers',
      link:'chatity'
    },
    {
      name:'About',
      link:'nonprofit'
    },
  ]

  return (
    <Main>
      <Container>
        <div className='links'>
          <div className='logo'></div>
          <ul>
            <li>
              <ul>
                <h2>FUNDRAISE</h2>
              {FUNDRAISE.map((item,index)=>(
                <li key={index}>{item.name}</li>
              ))}
              </ul>
            </li>
            <li>
              <ul>
                <h2>LEARN</h2>
              {LEARN.map((item,index)=>(
                <li key={index}>{item.name}</li>
              ))}
              </ul>
            </li>
            <li>
              <ul>
                <h2>RESOURCES</h2>
              {RESOURCES.map((item,index)=>(
                <li key={index}>{item.name}</li>
              ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className='social-links'>
          <p>
          © 2019 RedQ Inc. All Rights Reserved
          </p>
          <ul>
            <li>as</li>
            <li>asd</li>
            <li>asasda</li>
          </ul>
        </div>
      </Container>
    </Main>
  )
};


const Main=styled.footer`
width:100%auto;
display:flex;
justify-content: center;
margin: 0;
box-sizing: border-box;
background-color: rgba(237, 237, 237, 0.8);
margin-top: 70px;
`;

const Container=styled.div`
max-width: 1200px;
width: 100%;
padding: 0.2rem 0.2rem;

.links{
  display: flex;
  justify-content: space-between;
  ul{
    list-style-type: none;
    display: flex;
    max-width: 700px;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
    
    li{
      display: flex;
      flex-direction: column;
     margin-top: 50px;
      min-width: 160px;
      ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: start;
        height: 100%;
        li{
          margin-top: 0px;
          padding: 0.7rem 0;
          cursor: pointer;
          &:hover{
            font-weight: 600;
          }
        }
      }
    }
  }
}

.social-links{
  width:100%;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  background-color: rgba(237, 237, 237, 0.9);
  padding: 1rem 0;

  ul{
    list-style-type: none;
    display: flex;
    max-width: 300px;
    width:100%;
    justify-content: space-around;

    li{
cursor:pointer;
    }
  }
}
@media screen and (max-width:500px){
  .social-links{
    flex-direction: column;
    align-items: center;

    ul{
      margin-top: 10px;
    }
  }
}
`;