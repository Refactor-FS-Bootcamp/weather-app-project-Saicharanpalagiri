import React from 'react'
import { Route, Routes } from 'react-router-dom'
import City from '../components/City'
import CustomLay from '../components/CustomLay'
import Home from '../components/Home'

export default function AppRoutes() {
  return (<>
   
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/city" element={<City/>}/>
  </Routes>
  </>
  )
}
