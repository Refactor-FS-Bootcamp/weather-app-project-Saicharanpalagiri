import React from 'react'
import Header from './Header';
import Home from './Home';
import Sider from './Sider';

export default function CustomLay() {
    const NavItems = [
        {
          ele: "Home"
        },
        {
          ele: "City"
        }
      ];
  return (
    <div className='custom-lay'>
   
    <Sider  NavItems={NavItems}/>
    
    </div>

  )
}
