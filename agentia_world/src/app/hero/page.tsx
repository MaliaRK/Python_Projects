'use client'

import React from 'react'
import Navbar from '../components/navbar';
import Typewriter from 'typewriter-effect';

const MainPage = () => {
  return (
    <div className=' '>
      <Navbar />
      <div className='flex flex-col justify-center items-center max-h-screen bg-gradient-to-b from-gray-950 via-neutral-950 to-purple-950 py-[15%]'>
        <div className='flex gap-2 bg-zinc-900 rounded-full px-3 py-1 mt-5'>
          <span className='bg-purple-500 px-[3px] my-[7px] rounded-full'></span>
          <h2 className='text-sm text-purple-500'>POWERED BY PANAVERSITY</h2>
        </div>
        <h2 className='text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-500 bg-clip-text text-transparent my-4'>Enterprise AI Agents </h2>
        <span className='text-5xl md:text-6xl font-bold'>for the Future</span>

        <div className='relative bg-zinc-900 border-[1px] border-purple-400 rounded-md mt-10 mx-2 w-[320px] md:w-[750px] h-[125px] md:h-[110px]'>
          <div className='flex items-center gap-4 mx-6 my-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bot w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 p-1 rounded-full"><path d="M12 8V4H8"></path><rect width="16"
                height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>

            <div className='relative bg-neutral-800 rounded-md text-slate-300 pl-4 py-5 w-full'>
              <Typewriter
                options={{
                  strings: [
                    "Hello! I'm your AI agent. How can I enhance your business today?",
                    'I can help optimize your workflows with neural networks.',
                    'Let me assist you with advanced data analytics.',
                    'Would you like to explore our AI integration solutions?',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

          </div>
        </div>

        <div className='grid md:flex gap-6 mt-12'>
          <h3 className='bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-3 rounded-md'>Deploy Your AI Agent  ›</h3>
          <h3 className='border-[1px] border-purple-500 rounded-md px-6 py-3 text-center'>Watch Demo</h3>
        </div>
      </div>
    </div>
  )
}

export default MainPage;
