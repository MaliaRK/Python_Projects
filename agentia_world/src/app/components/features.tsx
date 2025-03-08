import React from 'react'

const Features = () => {
    return (
        <div className='flex-col justify-items-center my-28 scroll-mt-[420px] md:scroll-mt-24' id='features'>
            <h2 className='text-4xl md:text-5xl font-bold text-center bg-gradient2 bg-clip-text text-transparent my-4'>Neural Capabilities</h2>
            <p className='text-md text-slate-400 text-center'>Powered by next-generation artificial intelligence</p>

            <div className='grid grid-cols-1 md:flex mx-4 md:mx-10 gap-8 mt-16'>

                <div className='flex flex-col p-4 bg-neutral-900 border-[1px] border-neutral-700 shadow-md shadow-purple-950 rounded-lg hover:scale-105 duration-150'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-brain bg-gradient1 px-4 rounded-md"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                        <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
                    <h3 className='font-semibold my-3'>Autonomous Learning</h3>
                    <p className='text-slate-300 text-md'>Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning</p>
                </div>

                <div className='flex flex-col p-4 bg-neutral-900 border-[1px] border-neutral-700 shadow-md shadow-purple-950 rounded-lg hover:scale-105 duration-150'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-message-square bg-gradient1 px-4 rounded-md"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <h3 className='font-semibold my-3'>Multi-Modal Intelligence</h3>
                    <p className='text-slate-300 text-md'>Advanced agents capable of processing text, voice, and visual data for comprehensive understanding</p>
                </div>

                <div className='flex flex-col p-4 bg-neutral-900 border-[1px] border-neutral-700 shadow-md shadow-purple-950 rounded-lg hover:scale-105 duration-150'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-terminal bg-gradient1 px-4 rounded-md"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
                    <h3 className='font-semibold my-3'>Cognitive Integration</h3>
                    <p className='text-slate-300 text-md'>Seamless integration with existing systems through advanced cognitive APIs and neural bridges</p>
                </div>

                <div className='flex flex-col p-4 bg-neutral-900 border-[1px] border-neutral-700 shadow-md shadow-purple-950 rounded-lg hover:scale-105 duration-150'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-shield bg-gradient1 px-4 rounded-md">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                        </path></svg>
                    <h3 className='font-semibold my-3'>Ethical AI Framework</h3>
                    <p className='text-slate-300 text-md'>Built-in ethical guidelines and safety protocols ensuring responsible AI deployment</p>
                </div>
            </div>

        </div>
    )
}

export default Features;
