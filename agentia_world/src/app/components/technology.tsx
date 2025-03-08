import React from 'react'

const Technology = () => {
  return (
    <div className='flex-col justify-items-center my-10 scroll-mt-[420px] md:scroll-mt-24' id='technology'>
      <h2 className='text-4xl md:text-5xl font-bold text-center bg-gradient2 bg-clip-text text-transparent my-4'>Powered by Advanced AI</h2>
      <p className='text-md text-slate-400'>Built on cutting-edge neural architectures</p>  

      <div className='grid grid-cols-2 md:flex mx-4 md:mx-10 gap-8 mt-16'>

        <div className='flex flex-col justify-center items-center p-4 bg-neutral-900 border-[1px] border-neutral-700 rounded-lg hover:scale-105 duration-150 group'>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        className="lucide lucide-brain bg-gradient1 px-4 rounded-md group-hover:rotate-[15deg] duration-150"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
        <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
          <h3 className='font-semibold my-3'>Neural Network</h3>
          <p className='text-slate-300 text-sm text-center'>Advanced neural architecture for complex decision making</p>
        </div>

        <div className='flex flex-col justify-center items-center p-4 bg-neutral-900 border-[1px] border-neutral-700 rounded-lg hover:scale-105 duration-150 group'>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        className="lucide lucide-cpu bg-gradient1 px-4 rounded-md group-hover:rotate-[15deg] duration-150"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2">
        </path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
          <h3 className='font-semibold my-3'>Deep Learning</h3>
          <p className='text-slate-300 text-sm text-center'>Sophisticated deep learning models for pattern recognition</p>
        </div>

        <div className='flex flex-col justify-center items-center p-4 bg-neutral-900 border-[1px] border-neutral-700 rounded-lg hover:scale-105 duration-150 group'>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-code-xml bg-gradient1 px-4 rounded-md group-hover:rotate-[15deg] duration-150"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
          <h3 className='font-semibold my-3'>Advanced ML</h3>
          <p className='text-slate-300 text-sm text-center'>Cutting-edge machine learning algorithms</p>
        </div>

        <div className='flex flex-col justify-center items-center p-4 bg-neutral-900 border-[1px] border-neutral-700 rounded-lg hover:scale-105 duration-150 group'>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        className="lucide lucide-earth bg-gradient1 px-4 rounded-md group-hover:rotate-[15deg] duration-150"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
        <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
          <h3 className='font-semibold my-3'>Global Scale</h3>
          <p className='text-slate-300 text-sm text-center'>Distributed AI processing across global networks</p>
        </div>
      </div>

    </div>
  )
}

export default Technology;
