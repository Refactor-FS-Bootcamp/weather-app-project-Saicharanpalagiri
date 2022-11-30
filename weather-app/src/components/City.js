import React from 'react'
import Header from './Header'

export default function City() {
  return (
    <div className='city' >
        <Header/>
       <div className='cityContent'>
       <div  className='cityContentHead' >
       <h4 className="cityHead">Cities </h4> 
       <i class="fa-regular fa-plus"></i>
       </div>
        <hr/>
        <div className="cityMain" >
        <p>No city selected</p>
        </div>
       </div>
    </div>
  )
}
