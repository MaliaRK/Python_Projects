import React from 'react'
import MainPage from './hero/page'
import Technology from './components/technology'
import Features from './components/features'
import Agents from './components/agents'
import Pricing from './components/pricing'
import Contact from './components/contact'
import Footer from './components/footer'

const page = () => {
  return (
    <div className=' text-white max-w-[1800px] mx-auto'>
      <MainPage/>
      <Technology/>
      <Features/>
      <Agents/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page;
