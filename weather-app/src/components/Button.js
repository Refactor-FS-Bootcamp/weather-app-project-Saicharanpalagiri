import React, { useState } from 'react'
export default function Button(props) {
//     const [act,setAct]=useState("")
//     //const [col,setCol]=useState()
//     let location=useLocation();
// const addAct=()=>{
//     setAct("select")
//     console.log(`${act} ${props.item}` );
// }
// console.log(`${act} ${props.item}` );
  return (
    <>
       <button className={`${props.class} `}  >{props.item}</button>
   
    </>
  )
}
