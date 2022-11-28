import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'


export default function Navbar() {
    let location=useLocation();
  return (
    <div className='Nav'>
  <nav >
        <Link  to="/"><Button class={` btn1 ${location.pathname==="/"? "active": ""}`} item="Home"/></Link>
        <Link  to="/cities" ><Button class={` btn1 ${location.pathname==="/cities"? "active": ""}`} item="Cities"/></Link>          
        </nav>
 </div>
  )
}
