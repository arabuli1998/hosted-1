import React from 'react'
import { HowWe } from './How-Elements'
import { Main } from '../../components/Globalstyles'
import { data } from './HoweWorkData'

const HoweWork = () => {
  return (
    <Main id="howework">
        <HowWe>
            <h1>How We Works</h1>
            <p>Water is a non-profit organization bringing clean and safe drinking water to people in developing countries</p>
            <nav>
        {data.map((item,index)=>(
            <div key={index}>
                <img src={item.image}/>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
            </div>
        ))}
        </nav>
        </HowWe>
    </Main>
  )
}

export default HoweWork