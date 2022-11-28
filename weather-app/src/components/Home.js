import React from 'react'
import Header from './Header'

export default function Home() {
  return (
    <div>
       <div className='home'>
      <Header/>
      <div className="content">
      <p className='para'>You have not selected any city as a favourite yet 
              </p>
      </div>
    </div>
    </div>
  )
}
