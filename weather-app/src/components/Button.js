import React from 'react'
import { useLocation } from 'react-router-dom'
import { Router } from 'react-router-dom'

export default function Button(props) {
   // let location=useLocation()
  return (
    <>
       
       <button className={`${props.class} `} style={props.style} onClick={props.handleClick}>{props.item}</button>   
  
    </>
  )
}
