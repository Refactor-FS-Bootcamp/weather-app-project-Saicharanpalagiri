import React, { useState } from 'react'
import CustomLay from './CustomLay';
import Button from './Button'
import Model from './Model';


export default function Header(props) {
//   const [showModel,setShowModel]=useState(false);
//   const addCity=()=>{
//     setShowModel(!showModel);
// console.log("Add city")
//  }
  return (
    // <div className={ showModel?"activeHeader":""}>
    //   {/* <CustomLay/> */}
    <div className="header">
    <h3>{props.text}</h3>
        {props.item && <Button class="ctybtn" item={props.item} handleClick={props.handleClick}/>}
      {/* {props.item&& <button className='ctybtn' onClick={addCity}>Add new City</button> }
        */}

    </div>

   
    // {showModel?<Model/>:<></>}
    //     </div>
  )
}
