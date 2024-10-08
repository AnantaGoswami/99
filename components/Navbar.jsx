'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaWindowClose} from "react-icons/fa";
import { useState } from 'react';
import { usePathname } from 'next/navigation';



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const pathname = usePathname()
  console.log(pathname)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-white px-10'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
        <Image src="/assets/Logo.png" alt="/" width={75} height={25} />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/#carousel'>
              <li className='ml-10 p-4 text-md hover:text-orange-600 hover:underline'>Home</li>
            </Link>
            <Link href='/#usp'>
              <li className='ml-10 py-4 px-2 text-md hover:text-orange-600 hover:underline'>Project USP</li>
            </Link>
            <Link href='/#unit'>
              <li className='ml-10 py-4 px-2 text-md hover:text-orange-600 hover:underline'>Unit Details & Floor Plan</li>
            </Link>
            <Link href='/#project'>
              <li className='ml-10 py-4 px-2 text-md hover:text-orange-600 hover:underline'>Project Gallery</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 py-4 px-2 text-md hover:text-orange-600 hover:underline'>Contact Us</li>
            </Link>
            <Link href='/#'>
              <button className='btn bg-gradient-to-r from-orange-500 to-red-500 text-white ml-10 py-3 px-5 rounded-full hover:bg-white hover:text-orange transition-all duration-300 uppercase'>Download Brochure</button>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <FaBars size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' : 'hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full justify-between items-center'>
              <Image src="/assets/Logo.png" alt="/" width={87} height={35} />
              <div onClick={handleNav}>
                <FaWindowClose size={35} />
              </div>
            </div>
            <div className='py-8 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/#carousel'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#usp'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Project USP</li>
                </Link>
                <Link href='/#unit'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Unit Details & Floor Plan</li>
                </Link>
                <Link href='/'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Project Gallery</li>
                </Link>
                <Link href='/#contact'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar