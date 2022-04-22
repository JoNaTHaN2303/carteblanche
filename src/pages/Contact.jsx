import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import { GoFile } from 'react-icons/go'

export default function Contact(){
  return (
    <div id='contact' className='min-h-screen flex justify-center px-10 md:px-20 lg:px-24'>
      <div className='flex flex-col items-center w-full md:w-3/4 lg:w-1/2 my-20'>
        <p className='text-[#ab0f2a] text-center font-medium text-5xl mb-16'>Contacteer ons</p>
        <p className='text-gray-400 text-center text-lg font-normal mb-8'>Geïnteresseerd in een heerlijk en sfeerlijk evenement met de hulp van ME Carte Blanche? Neem nu vrijblijvend contact op, dan bekijken we samen de mogelijkheden.</p>
        <p className='text-[#ab0f2a] text-center font-normal text-3xl mb-3'>Maak je keuze</p>
        <p className='text-gray-400 text-center text-lg font-normal mb-12'>Zo kunnen we je sneller en beter helpen.</p>
        <div className='flex md:flex-row flex-col space-y-12 md:space-y-0 md:space-x-20'>
          <Link 
            to={'/contact-vraag'}
            className='flex flex-col justify-center items-center rounded-md w-72 h-60 bg-gray-200 hover:bg-red-100 duration-1000'>
              <AiOutlineMail className='text-[#ab0f2a] mb-7 w-16 h-16'/>
              <p className='mb-4 text-red-800 font-semibold'>Heb je een vraag?</p>
              <p className='text-[#ab0f2a]'>Contacteer ons</p>
          </Link>
          <Link 
            to={'/contact-offerte'}
            className='flex flex-col justify-center items-center rounded-md w-72 h-60 bg-gray-200 hover:bg-red-100 duration-1000'>
              <GoFile className='text-[#ab0f2a] mb-7 w-16 h-16'/>
              <p className='mb-4 text-red-800 font-semibold'>Een prijsofferte nodig?</p>
              <p className='text-[#ab0f2a]'>Vraag het hier</p>
          </Link>
        </div>
      </div>
    </div>
  )
}