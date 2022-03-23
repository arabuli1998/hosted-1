import React from 'react'
import { HomePage,Text,Image } from './HomeElements'

const Home = () => {
  return (
    <HomePage id="home">
        <Text>
          <div className="main-container">
          <div className='container'>
            <p>
              news
              </p>
            <h5>
              1 year. 100 Forever Families.>
            </h5>
          </div>
          <h1>Bring a smile to Their faces.</h1>
           <h5>
           A new way of giving back to your loved charities.
           </h5>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <nav className='button'> <h2></h2><p>- Explore Our Project</p></nav>

          </div>
        </Text>
        <Image></Image>
    </HomePage>
  )
}

export default Home