'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'


const Navbar = () => {
   

    const [isOpen, setOpen] =useState(false)

    const handleScroll = () => {
        // Close the menu when the user scrolls
        setOpen(false);
      };
    
      useEffect(() => {
        // Add an event listener for the scroll event
        window.addEventListener('scroll', handleScroll);
    
        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Only run this effect once on component mount
    
  return (
    <nav  className="fixed top-0 w-full bg-primary  z-40">
    <div className="container px-6 py-4 lg:px-8 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between text-secondary font-bold">
          <Logo/>

            <div className="flex lg:hidden">
                <button type="button" onClick={()=>setOpen(!isOpen)} className={isOpen && 'hidden'}  aria-label="toggle menu">
                    <svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                </button>

                <button className={!isOpen && 'hidden'} type="button" onClick={()=>setOpen(!isOpen)}>
                <svg mlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
        </div>

        <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-primary text-secondary text-sm md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${!isOpen ? 'hidden':''}`}>
            <div   animate={isOpen ? "open" : "closed"}
         className="flex flex-col md:flex-row md:mx-6">
                <Link className="my-2  transition-colors duration-300 transform hover:text-tertiary  md:mx-4 md:my-0" href="/about">About</Link>
                <Link className="my-2  transition-colors duration-300 transform  hover:text-tertiary md:mx-4 md:my-0" href="/services">Services</Link>
                <Link className="my-2 transition-colors duration-300 transform  hover:text-tertiary md:mx-4 md:my-0" href="/testimonials">Testimonals</Link>
                <Link className="my-2  transition-colors duration-300 transform  hover:text-tertiary md:mx-4 md:my-0" href="/faqs">Faqs</Link>
            </div>

            <div className="flex justify-center items-center space-x-2 text-secondary ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
          
                <span>902-200-5050</span>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Navbar