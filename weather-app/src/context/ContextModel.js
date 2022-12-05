import React, { useState } from 'react'
import { MyContext } from './appContext'


export default function ContextModel({children}) {
    const [selectedCities,setSelectedCities]=useState([])
    const [favCities,setFavCities]=useState([])
    const [cardState,setCardState]=useState(false)
    const [currentCity,setCurrentCity]=useState()
    const [bkMode,setBkMode]=useState("light")
    
  return (
  <MyContext.Provider value={{selectedCities,setSelectedCities,favCities,setFavCities,cardState,setCardState,currentCity,setCurrentCity,bkMode,setBkMode}}>
    {children}
  </MyContext.Provider>
  )
}
