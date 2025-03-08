import React from 'react'
import Button from './button'

const Pricing = () => {
    return (
        <div className='flex-col justify-items-center my-28 scroll-mt-[420px] md:scroll-mt-24' id='pricing'>
            <h2 className='text-4xl md:text-5xl font-bold bg-gradient2 bg-clip-text text-transparent my-4'>Choose Your Plan</h2>
            <p className='text-md text-center text-slate-400'>Scale your AI capabilities with our flexible pricing</p>

            <div className='grid grid-cols-1 md:flex mx-4 md:mx-10 gap-10 mt-16'>

                <div className='flex flex-col p-16 bg-neutral-900 border-[1px] border-neutral-700 hover:scale-105 duration-150 rounded-lg'>
                    <h3 className='text-xl font-semibold my-3'>Starter</h3>
                    <p className='text-2xl font-bold'>$499<span className='text-slate-300 text-base font-medium'>/month</span></p>
                    <ul className='grid gap-5 mt-6'>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>2 AI Agent Instances</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Basic Neural Processing</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>24/7 Support</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Weekly Analytics</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Basic Integration Support</p>
                        </li>
                        <button className='px-5 py-2 rounded-md border-[1px] border-purple-900 hover:border-purple-500'>Get Started</button>
                    </ul>
                </div>

                <div className='flex flex-col p-16 bg-gradient-to-t from-neutral-950 to-indigo-950 border-[2px] border-purple-500 hover:scale-105 duration-150 rounded-lg'>
                    <h3 className='text-xl font-semibold my-3'>Professional</h3>
                    <p className='text-2xl font-bold'>$999<span className='text-slate-300 text-base font-medium'>/month</span></p>
                    <ul className='grid gap-5 mt-6'>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>10 AI Agent Instances</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Advanced Neural Networks</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Priority Support</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Real-time Analytics</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Custom Integration</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>API Access</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Advanced Security</p>
                        </li>
                        <Button text='Get Started' className='text-center' />
                    </ul>
                </div>

                <div className='flex flex-col p-16 bg-neutral-900 border-[1px] border-neutral-700 hover:scale-105 duration-150 rounded-lg'>
                    <h3 className='text-xl font-semibold my-3'>Enterprise</h3>
                    <p className='text-2xl font-bold'>$Custom</p>
                    <ul className='grid gap-5 mt-6'>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Unlimited Agents</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Full Neural Suite</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Dedicated Support Team</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Advanced Analytics Dashboard</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Custom Development</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Full API Access</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Enterprise Security</p>
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-circle-check w-5 h-5 text-purple-500 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <p>Custom Training</p>
                        </li>
                        <button className='px-5 py-2 rounded-md border-[1px] border-purple-900 hover:border-purple-500'>Get Started</button>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Pricing;
