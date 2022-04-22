import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineInstagram, AiOutlineMail, AiOutlinePhone, AiOutlineFacebook } from 'react-icons/ai'
import logo from '../images/logo.png'

export default function Footer(){
  return (
    <div className='py-14 px-20 min-w-full lg:flex-row flex-col flex justify-center lg:justify-between items-center bg-gray-200 space-y-10 lg:space-y-0'>
      <div className='space-y-2 flex flex-col items-center lg:items-start'>
        <div className='space-x-5 text-lg '>
          <Link className='hover:text-[#ab0f2a]' to='/'>Home</Link>
          {/* <Link className='border-b-2 border-[#8B0000] text-[#8B0000]' to='/products'>Producten</Link> */}
          <Link className='hover:text-[#ab0f2a]' to='/contact'>Contact</Link>
          <Link className='hover:text-[#ab0f2a]' to='/privacy'>Privacy Policy</Link>
        </div>
        <p className='text-sm'>© Carte Blanche 2022. All Rights Reserved</p>
      </div>
      <div>
        <img src={logo} alt='' className='h-28'/>
      </div>
      <div className='flex space-x-5 justify-center items-center'>
        <a href="https://www.facebook.com/ME-Carte-Blanche-102308499077979/?ref=page_internal" target="_blank" rel="noreferrer"><AiOutlineFacebook size={40} style={{color: '#ab0f2a'}} className='hover:px-1 duration-500'/></a>
        <a href="https://www.instagram.com/me_carte_blanche_/" target="_blank" rel="noreferrer"><AiOutlineInstagram size={40} style={{color: '#ab0f2a'}} className='hover:px-1 duration-500'/></a>
        <a href="mailto:info@mecarteblanche.be" target="_blank" rel="noreferrer"><AiOutlineMail size={40} style={{color: '#ab0f2a'}} className='hover:px-1 duration-500'/></a>
        <a href="tel:+32492852288" target="_blank" rel="noreferrer"><AiOutlinePhone size={40} style={{color: '#ab0f2a'}} className='hover:px-1 duration-500'/></a>
      </div>
    </div>
  )
}
