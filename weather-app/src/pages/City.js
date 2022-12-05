import React, { useContext } from 'react'
import Header from '../components/Header'
import Model from '../components/Model'
import { useState } from 'react';
import { MyContext } from '../context/appContext';
import toast, { Toaster } from 'react-hot-toast';
import { CityWrapperStyled } from './pages';

export default function City() {
   const context=useContext(MyContext);
   const [sideShow,setSideShow]=useState(false)
   const [sideCity,setSideCity]=useState(null)
   const [showModelCity,setShowModelCity]=useState(false)
   const notify = () => toast.success('City Added to favourites ');
   let mode=context.bkMode
   
   const showSideCity=(city)=>{
    setSideShow(true)
    setSideCity(city)
   context.setCurrentCity(city)
  
   }
   const shwModelCity=()=>{
    setShowModelCity(!showModelCity)
   }
  
   const  AddFavouriteCity= () => {
    if (!context.favCities.includes(context.currentCity)) {
      const current = [...context.favCities, context.currentCity];
      context.setFavCities(current);
      console.log(context.favCity);
      toast.success(`${context.currentCity.name} added to favorites`);
    }
    else
    {
      const fav = context.favCities.filter((c) => c.id !== context.currentCity.id);
      context.setFavCities(fav)
     // console.log("done");
      toast('❌City removed from favorites');
    }
  };

   //console.log(context.favCities);
  return (
    <CityWrapperStyled mode={mode}>
        <div className="city-body">
    <div className="cityContainer">
    <div className='city' >
        <Header/>
       <div className='cityContent'>
       <div  className='cityContentHead' >
       <h4 className="cityHead">Cities </h4> 
       <svg onClick={shwModelCity} className='close-mark' viewBox="64 64 896 896" focusable="false" data-icon="plus-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
      </div> <hr/> 
       
        <div className="cityMain" >
          {context.selectedCities.length>0?<>{context.selectedCities.map((city)=>{
            return <div className="cityNameContentContainer" onClick={()=>showSideCity(city)}><p>{city.name}</p><p>{city.temp}</p></div>
          })}</>
          
          :<p className='citypara'>No city selected</p>}
      
        </div>

        </div>
       </div>
       {sideShow && <div className='citySide'>
        <div className="citySideHead">
        <div  className="citySideName">{context.currentCity.name}</div>
        <div  onClick={AddFavouriteCity} > 
        {!context.favCities.includes(context.currentCity)?<i className="fa-regular fa-star"></i>:<i className="fa-solid fa-star"></i>}
               </div>
        <Toaster/>
        </div>
        <hr/>
        
       <div className='citySideMainContent'>
        <p><i>{context.currentCity.desc}</i></p>
       
         <div ><b>Temperature</b> : {context.currentCity.temp}</div>
        <div ><b>Humidity</b> : {context.currentCity.humidity}</div>
        
       </div>
        </div>
       }
       {showModelCity?<Model  handleClick={shwModelCity}/>:<></>}
    </div>
    </div>
    </CityWrapperStyled>
  )
}
