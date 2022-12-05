import React from 'react'
export default function Button(props) {
  return (
    <>
       <button className={`${props.class} `} style={props.style} onClick={props.handleClick}>{props.item}</button>   
  </>
  )
}
