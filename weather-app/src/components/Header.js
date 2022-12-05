import React, { useState } from 'react'
import CustomLay from './CustomLay';
import Button from './Button'
import Model from './Model';
import { HeaderWrapperStyled } from '../pages/pages';
import { useContext } from 'react';
import { MyContext } from '../context/appContext';

export default function Header(props) {
let context=useContext(MyContext)
let mode=context.bkMode
  return (
    <HeaderWrapperStyled mode={mode}>
    <div className="header">
    <h3><i>{props.text}</i></h3>
        {props.item && <Button class="ctybtn" item={props.item} handleClick={props.handleClick}/>}
    </div>
    </HeaderWrapperStyled>    
  )
}
