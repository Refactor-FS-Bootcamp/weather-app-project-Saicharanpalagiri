import React from 'react'
import Button from './Button'

export default function Header() {
  return (
   <>
     <div className="header">
        
        <h2>My Favourite Cities</h2>
        {/* <button className='ctybtn'>Add new City</button> */}
        <Button class="ctybtn" item="Add new City"/>
    </div></>
  )
}
