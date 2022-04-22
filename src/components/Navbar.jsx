import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import logoNavbarZwart from '../images/logoBlack.png'
import logoNavbarWit from '../images/logoNavbar.png'

export default function Navbar(){
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
      setMobileMenu(false);
  }, [])

  const navbarZwart = <>
    <div className='sticky top-0 flex items-center justify-between px-10 md:px-20 lg:px-36 h-20 bg-zinc-900 text-white'>
      <div className='flex items-center h-20'>
        <Link to={'/'} className="flex items-center">
          <img src={logoNavbarZwart} alt='' className='h-20' />
          <div className='flex'>
            <p className='text-lg'>Me Carte Blanche</p>
          </div>
        </Link>
      </div>
      <div className='hidden sm:flex items-center h-10 space-x-10 text-base'>
        <NavLink className={({ isActive }) => isActive ? "h-8 px-2 flex items-center border-b-2 border-[#ab0f2a] hover:text-[#ab0f2a]"
          : "h-8 px-2 flex items-center border-b-2 border-zinc-900 hover:text-[#ab0f2a] hover:border-[#ab0f2a] duration-[400ms]"} to={'/'}>
          Home
        </NavLink>
        {/* <NavLink className={({ isActive }) => isActive ? "h-8 px-2 flex items-center border-b-2 border-[#ab0f2a] hover:text-[#ab0f2a]"
      : "h-8 px-2 flex items-center border-b-2 border-zinc-900 hover:text-[#ab0f2a] hover:border-[#ab0f2a] duration-[400ms]"} to={'/products'}>
      Producten
    </NavLink> */}
        <NavLink className={({ isActive }) => isActive ? "h-8 px-2 flex items-center border-b-2 border-[#ab0f2a] hover:text-[#ab0f2a]"
          : "h-8 px-2 flex items-center border-b-2 border-zinc-900 hover:text-[#ab0f2a] hover:border-[#ab0f2a] duration-[400ms]"} to={'/contact'}>
          Contact
        </NavLink>
      </div>
      <div className='sm:hidden flex items-center justify-center'>
        <FaBars onClick={() => { setMobileMenu(!mobileMenu) } } />
      </div>
    </div>
    {mobileMenu && (
      <div className='sm:hidden sticky top-20 py-3 space-y-3 px-10 bg-zinc-900 text-white'>
        <NavLink onClick={() => { setMobileMenu(false) } } className='h-8 flex items-center border-b-2 border-zinc-900 hover:border-[#ab0f2a] hover:text-[#ab0f2a] duration-[400ms]' to={'/'}>Home</NavLink>
        {/* <NavLink onClick={() => {setMobileMenu(false)}} className='h-8 flex items-center border-b-2 border-zinc-900 hover:border-[#ab0f2a] hover:text-[#ab0f2a] duration-[400ms]' to={'/products'}>Products</NavLink> */}
        <NavLink onClick={() => { setMobileMenu(false) } } className='h-8 flex items-center border-b-2 border-zinc-900 hover:border-[#ab0f2a] hover:text-[#ab0f2a] duration-[400ms]' to={'/contact'}>Contact</NavLink>
      </div>
    )}</>
  const navbarWit = <>
    <div className='sticky top-0 flex items-center justify-between px-10 md:px-20 lg:px-36 h-20 bg-gray-200 border-b-2 border-gray-300'>
      <div className='flex items-center h-16'>
        <Link to={'/'} className="flex items-center space-x-3">
          <img src={logoNavbarWit} alt='' className='h-16 p-1'/>
          <div>
            <p className='text-lg'>Micro-events</p>
            <p className='text-xl'>Carte Blanche</p>
          </div>
        </Link>
      </div>
      <div className='hidden sm:flex items-center h-10 space-x-10 text-base'>
        <NavLink className={({ isActive }) => isActive ? "h-8 px-2 flex items-center border-b-2 border-[#ab0f2a] hover:text-[#ab0f2a]" 
          : "h-8 px-2 flex items-center border-b-2 border-gray-200 hover:text-[#ab0f2a] hover:border-[#ab0f2a] duration-[400ms]"} to={'/'}>
          Home
        </NavLink>
        {/* <NavLink className={({ isActive }) => isActive ? "h-8 px-2 flex items-center border-b-2 border-[#ab0f2a] hover:text-[#ab0f2a]" 
          : "h-8 px-2 flex items-center border-b-2 border-gray-200 hover:text-[#ab0f2a] hover:border-[#ab0f2a] duration-[400ms]"} to={'/products'}>
          Producten
        </NavLink> */}
        <NavLink className={({ isActive }) => isActive ? "h-8 px-2 flex items-center border-b-2 border-[#ab0f2a] hover:text-[#ab0f2a]" 
          : "h-8 px-2 flex items-center border-b-2 border-gray-200 hover:text-[#ab0f2a] hover:border-[#ab0f2a] duration-[400ms]"} to={'/contact'}>
          Contact
        </NavLink>
      </div>
      <div className='sm:hidden flex items-center justify-center'>
        <FaBars onClick={() => {setMobileMenu(!mobileMenu)}}/>
      </div>
    </div>
    {mobileMenu && (
      <div className='sm:hidden sticky top-20 py-3 space-y-3 px-10 bg-gray-200'>
        <NavLink onClick={() => {setMobileMenu(false)}} className='h-8 flex items-center border-b-2 border-gray-200 hover:border-[#ab0f2a] hover:text-[#ab0f2a] duration-[400ms]' to={'/'}>Home</NavLink>
        {/* <NavLink onClick={() => {setMobileMenu(false)}} className='h-8 flex items-center border-b-2 border-gray-200 hover:border-[#ab0f2a] hover:text-[#ab0f2a] duration-[400ms]' to={'/products'}>Products</NavLink> */}
        <NavLink onClick={() => {setMobileMenu(false)}} className='h-8 flex items-center border-b-2 border-gray-200 hover:border-[#ab0f2a] hover:text-[#ab0f2a] duration-[400ms]' to={'/contact'}>Contact</NavLink>
      </div>
    )}</>


  return navbarZwart
}

