import React from 'react'
import NavBar from '../utils/NavBar'
import Footer from '../utils/Footer'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default LandingPage