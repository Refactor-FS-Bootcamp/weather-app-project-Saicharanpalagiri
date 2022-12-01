import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App1 from '../components/App1'
import City from '../components/City'
import CustomLay from '../components/CustomLay'
import Home from '../components/Home'
import Model from '../components/Model'

export default function AppRoutes() {
  return (<>
   
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/city" element={<City/>}/>
    <Route exact path="/app1" element={<App1/>}/>
   
  </Routes>
  </>
  )
}
