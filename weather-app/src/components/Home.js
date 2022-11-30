import React from 'react'
import Header from './Header'

export default function Home() {
  return (
    <div className='home'>
     <Header text="My Favourite Cities" item="Add new City"/>
     
      {/* <div className="content">
      <p className='para'>You have not selected any city as a favourite yet 
              </p>
      </div> */}
       <div className='homeContent'>
       <p className='para'>You have not selected any city as a favourite yet 
              </p>
     </div>
    </div>
  )
}
