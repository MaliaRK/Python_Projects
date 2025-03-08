import React from 'react'

const Agents = () => {
    return (
        <div className='flex-col justify-items-center my-28 scroll-mt-[420px] md:scroll-mt-24' id='agents'>
            <h2 className='text-4xl md:text-5xl font-bold bg-gradient2 bg-clip-text text-transparent my-4'>AI Solutions</h2>
            <p className='text-md text-center text-slate-400'>Transforming industries with intelligent agents</p>

            <div className='grid grid-cols-1 md:flex mx-4 md:mx-10 gap-8 mt-16'>

                <div className='flex flex-col p-4 bg-neutral-900 border-[1px] border-neutral-700 hover:shadow-sm hover:shadow-purple-950 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-earth bg-gradient1 px-4 rounded-md"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17">
                        </path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    <h3 className='font-semibold my-3'>Enterprise AI</h3>
                    <p className='text-slate-300 text-md'>Custom AI agents designed for enterprise-scale operations and decision-making</p>
                </div>

                <div className='flex flex-col p-4 bg-neutral-900 border-[1px] border-neutral-700 hover:shadow-sm hover:shadow-purple-950 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-server bg-gradient1 px-4 rounded-md"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line>
                        <line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
                    <h3 className='font-semibold my-3'>Neural Operations</h3>
                    <p className='text-slate-300 text-md'>Automated workflow optimization through distributed neural networks</p>
                </div>

                <div className='flex flex-col p-4 bg-neutral-900 border-[1px] border-neutral-700 hover:shadow-sm hover:shadow-purple-950 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-shield bg-gradient1 px-4 rounded-md"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                    </path></svg>
                    <h3 className='font-semibold my-3'>Secure Intelligence</h3>
                    <p className='text-slate-300 text-md'>Privacy-first AI solutions with military-grade security protocols</p>
                </div>

            </div>

        </div>
    )
}

export default Agents;
