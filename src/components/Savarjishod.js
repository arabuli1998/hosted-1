import React from 'react'

const Savarjishod = () => {

   
    const funcrions=()=>{
        let x=[10,23,12,32];
        for(var i=0; i<x.length; i++){
            
            console.log(i)
        }
       
    }

  return (
    <div onClick={funcrions}>Savarjishod</div>
  )
}

export default Savarjishod