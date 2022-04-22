import React from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

toast.configure()
export default function Contact(){
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_plksqjj', 'template_pc7h1xt', e.target, 'KtSu-9wfoG4RPYEE2')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          notify();
  };

  const notify = () => {
    toast.info('Email is verzonden', {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose:5000
    })
  }

  return (
    <div id='contact' className='h-min flex flex-col items-center justify-center px-10 md:px-20 lg:px-40 py-10'>
        <div className='flex flex-col justify-center items-center w-full md:w-3/4 lg:w-1/2 mb-14'>
            <AiOutlineMail className='w-24 h-24 text-[#ab0f2a] mb-4'/>
            <p className='text-gray-600 text-center font-normal text-3xl mb-16'>Stel je vraag</p>
            <p className='text-gray-400 text-center text-lg font-normal mb-1'>Een vraag over onze full service catering, personeelsfeest of huwelijk?</p>
            <p className='text-gray-400 text-center text-lg font-normal mb-4'>Laat van je horen! We antwoorden zo snel mogelijk.</p>
            <p className='text-gray-400 text-center text-lg font-normal'>Je kan ons altijd bereiken via telefoon, email of door dit formulier in te vullen.</p>
            <div className='mt-7 font-normal flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                  <AiOutlineMail size={32} style={{color: '#ab0f2a'}} className='pr-2'/>
                  <a href="mailto:info@mecarteblanche.be" target="_blank" rel="noreferrer" className='text-gray-400 text-sm sm:text-base hover:text-[#ab0f2a] duration-500'>info@mecarteblanche.be</a>
                </div>
                <div className='flex justify-center items-center'>
                  <AiOutlinePhone size={32} style={{color: '#ab0f2a'}} className='pr-2'/>
                  <a href="tel:+32492852288" target="_blank" rel="noreferrer" className='text-gray-400 text-sm sm:text-base hover:text-[#ab0f2a] duration-500'>+32492852288</a>
                </div>
                <p className='text-gray-400 font-normal'>BTW BE 0768.415.885</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center h-min w-full'>
            <div className='w-full md:w-3/4 xl:w-1/2 px-7 py-4 bg-gray-200 rounded'>
              <form action='' onSubmit={sendEmail} className='flex flex-col w-full'>
                <label className=''>Naam:</label>
                <input 
                    type='text' 
                    name='fullName'
                    placeholder='Naam' 
                    required
                    className='field mt-2 mb-3 p-1 rounded-md'
                ></input>
                <label className='mt-4'>Email:</label>
                <input 
                    type='email' 
                    name='email'
                    placeholder='E-mailadres' 
                    required
                    className='field mt-2 mb-3 p-1 rounded-md'
                ></input>
                <label className='mt-4'>Telefoonnummer:</label>
                <input 
                    type='tel'
                    name='telefoonnummer'
                    pattern='[+]{0-1} [0-9]{10-11}'
                    placeholder='Telefoonnummer'
                    className='field mt-2 mb-3 p-1 rounded-md'
                ></input>
                <label className='mt-4'>Vraag:</label>
                <textarea 
                    placeholder='Je vraag'
                    name='message'
                    required
                    className='h-32 mt-2 mb-3 p-1 rounded-md'
                ></textarea>
                <button
                    className='p-3 mb-7 mt-3 bg-[#ab0f2a] border-2 border-[#ab0f2a] rounded text-white hover:bg-gray-100 duration-[400ms] hover:text-black'
                >Verstuur</button>
              </form>
            </div>
        </div>
    </div>
  )
}