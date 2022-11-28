import React from 'react'
import Button from './Button'

export default function Sider(props) {
  return (
    <div className='sider'>
    {props.sideCon.map((item)=>{
        return <Button item={item.item} active={props.active}/>
    })}
    </div>
  )
}
