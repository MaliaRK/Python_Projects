'use client'

import React, { useState } from 'react'
import Button from './button'

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div>
      <div className='fixed left-0 right-4 md:right-0 flex py-4 bg-black'>
        <div className='flex gap-3 items-center mx-2 md:mx-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bot w-8 h-8 text-purple-500"><path d="M12 8V4H8"></path><rect width="16"
              height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
          <h1 className='text-xl font-bold'>Agentia World</h1>
        </div>
        <ul className='hidden md:flex gap-8 items-center text-slate-300 mx-auto'>
          <li><a href="#features">Features</a></li>
          <li><a href="#technology">Technology</a></li>
          <li><a href="#agents">Agents</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Button text='Launch Console' /></li>
        </ul>
        {/* mobile responsive*/}
       
        <div className='block md:hidden ml-auto mx-2'>
          {!toggle ? (
            // hamburger 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" className=" lucide lucide-menu w-6 h-6" onClick={() => setToggle(!toggle)}><line x1="4" x2="20" y1="12" y2="12">
              </line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          ) : (
            <div className='fixed inset-x-0 bg-black'>
              {/* cross */}
              <div className='flex justify-between mx-2'>
                <div className='flex gap-3 items-center mx-2 md:mx-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bot w-8 h-8 text-purple-500"><path d="M12 8V4H8"></path><rect width="16"
                      height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
                  <h1 className='text-xl font-bold'>Agentia World</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-x w-6 h-6" onClick={() => setToggle(!toggle)}><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
              </div>
              <ul className='grid gap-6 mx-4 my-10 text-slate-300'>
                <li><a href="#features">Features</a></li>
                <li><a href="#technology"><li>Technology</li></a></li>
                <li><a href="#agents">Agents</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><Button text='Launch Console' className='text-center' /></li>
              </ul>

            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Navbar;
