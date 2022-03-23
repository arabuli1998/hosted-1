import React from 'react'
import { Main } from '../../components/Globalstyles'
import { FeatureData } from './Feature-data'
import { Features } from './Feature-Elements'

const Feature = () => {
  return (
    <Main id="feature">
      
        <Features>
            {FeatureData.map((item,index)=>(
                <div key={index}><img src={item.image} /><nav>
                    <h4>{item.title}</h4><p>{item.text}</p></nav></div>
            ))}
        </Features>
        </Main>
  )
}

export default Feature