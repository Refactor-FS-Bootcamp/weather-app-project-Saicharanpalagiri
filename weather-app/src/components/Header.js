import React from 'react'
import Button from './Button'

export default function Header(props) {
  return (
    <>
    <div className="header">
        
        <h3>{props.text}</h3>
        {props.item && <Button class="ctybtn" item={props.item}/>}
    </div>
        </>
  )
}
