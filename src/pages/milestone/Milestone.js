import React from 'react'
import { Main } from '../../components/Globalstyles'
import { Milestones,Text,Buttoned} from './Milestone-elements'
import { data } from './Milestone-data'

const Milestone = () => {
  return (
    <Main id="milestone">
        <Milestones>
            <div>
                <nav>
                    <h3>OUR FIRST MILESTONE</h3>
                    <h1>$4M</h1>
                    <h3>RAISED TO DATE</h3>
                    <nav> <h2></h2><p>- Meet Our Donors</p></nav>
                </nav>
            </div>
        </Milestones>
        <Text>
            {data.map((item,index)=>(
                <nav key={index}>
                    <p>{item.numbers}</p>
                    <p>{item.text}</p>
                   
                </nav>
            ))}
         
        </Text>
    </Main>
  )
}

export default Milestone