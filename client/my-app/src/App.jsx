import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div className=''>
         <Nav/> 
            <Outlet/>
         <Footer/>
    </div>
  )
}

export default App