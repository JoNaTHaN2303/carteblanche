import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillApi } from "react-icons/ai"

export default function Nothing(){
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col justify-center items-center'>
            <AiFillApi className='h-40 w-40 m-2'/>
            <p className='font-thin text-2xl'>Er ging iets mis, pagina niet gevonden</p>
            <Link className='px-10 mt-4 mb-8 py-2 bg-[#ab0f2a] text-white' to='/'>Home</Link>
        </div>
    </div>
  )
}
