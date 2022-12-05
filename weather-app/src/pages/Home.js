import React from 'react'
import Header from '../components/Header'
import { useState } from 'react';
import Model from '../components/Model';
import { MyContext } from '../context/appContext';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { HeaderWrapperStyled } from './pages';


export default function Home() {
  const context=useContext(MyContext)
 let mode=context.bkMode;

  const [showModel,setShowModel]=useState(false);
  const notify=()=>toast.success('success')
  
  const addcity=()=>{
    setShowModel(!showModel);
console.log("Add city")
  } 
  const removeFavCity=(city)=>{
    console.log(city.name)
    toast(`❌ ${city.name} removed from favorites`);
    let remCity=context.favCities.filter((c)=>city.id!==c.id)
    context.setFavCities(remCity)
  }

  
  return (
    <HeaderWrapperStyled mode={mode}>
    <div className='home '>
      
      <div className={ showModel?"activeHeader":""}>
     <Header text="My Favourite Cities" item="Add new City" handleClick={addcity}/>
       <div className='homeContent'>
        
       {context.favCities.length?
      context.favCities.map((city)=>{
        return(
          <div className="card-fav">
            <div className="card-fav-header">
            <div>{city.name}</div>
            <div className='fav-icon' onClick={()=>removeFavCity(city)}>
              <i className="fa-solid fa-star"></i>
            
            </div>
            </div>
            <div className='fav-content'>
              <div style={{color:"#3867d6"}}><i>{city.desc}</i></div>
              <div><b style={{color:"darkBlue",fontWeight:"600"}}>Temperture:</b> {city.temp}</div>
              <div><b style={{color:"red"}}>Humidity:</b> {city.humidity}</div>
              
            </div>
            <Toaster/>
          </div>
         
        )
      })
       :<p className='para'>You have not selected any city as a favourite yet 
              </p>}
     </div>
    </div>
    {showModel?<Model handleClick={addcity} />:<></>}
    </div>
    </HeaderWrapperStyled>
  )
}
