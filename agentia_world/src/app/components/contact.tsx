import React from 'react'
import Button from './button'

const Contact = () => {
    return (
        <div className='mt-28 scroll-mt-[420px] md:scroll-mt-24' id='contact'>
            <div className='flex-col justify-items-center'>
                <h2 className='text-4xl md:text-5xl font-bold bg-gradient2 bg-clip-text text-transparent my-4'>Get in Touch</h2>
                <p className='text-lg text-slate-400'>Ready to transform your business with AI?</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-[50%_auto] gap-10 mt-16 mx-4 md:mx-[15%]'>
                <div className='grid gap-4 md:mx-auto'>
                    <h2 className='text-xl font-bold'>Contact Information</h2>
                    <div className='flex gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="lucide lucide-mail w-6 h-6 text-purple-500"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        <p>contact@agentiaworld.com</p>
                    </div>
                    <div className='flex gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="lucide lucide-earth w-6 h-6 text-purple-500"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
                            <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        <p>www.agentiaworld.com</p>
                    </div>

                    <div className='flex gap-5 mt-4'>
                        {/* github*/}
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                            className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path></svg>

                        {/* linkedin */}
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"
                            className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                            </path></svg>

                        {/* twitter */}
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                            className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"></path>
                        </svg>
                    </div>
                </div>
                <div className='grid gap-6 mx-auto'>
                    <div className='flex gap-4'>
                        <input type="text" placeholder='First Name' className='outline-none bg-zinc-900 border-[1px] border-purple-950 rounded-md pl-2 py-3 w-full'/>
                        <input type="text" placeholder='Last Name' className='outline-none bg-zinc-900 border-[1px] border-purple-950 rounded-md pl-2 py-3 w-full'/>
                    </div>
                    <p><input type="text" placeholder='Last Name' className='outline-none bg-zinc-900 border-[1px] border-purple-950 rounded-md pl-2 py-3 w-full' /></p>
                    <textarea placeholder='Your Message' rows={5} className='outline-none bg-zinc-900 border-[1px] border-purple-950 rounded-md p-3 w-full'></textarea>
                    <Button text='Send Message' className='text-center'/>
                </div>
            </div>

            <hr className='mt-20 border-purple-950 '/>
        </div>
    )
}

export default Contact;
