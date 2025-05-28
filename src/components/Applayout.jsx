import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
const Applayout = () => {

  return (
    <main className='relative h-auto w-screen bg-[#0B111E] '>
      <Header />
      <Outlet />
      <Footer />


    </main>

  )
}

export default Applayout