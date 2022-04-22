import React from 'react'
import { GiEmptyHourglass } from "react-icons/gi";

export default function Products(){
  return (
    <div id='products' className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col justify-center items-center'>
            <GiEmptyHourglass className='h-40 w-40 m-2'/>
            <p className='font-thin text-2xl text-center mx-5'>Momenteel zijn er nog geen producten aanwezig</p>
        </div>
    </div>
  )
}
