import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import brel from '../images/BrelCarton.png'
import { AiOutlineInstagram, AiOutlineMail, AiOutlineFacebook } from 'react-icons/ai'

export default function Home(){
  return (
    <div id='home'>
      <div className="min-h-screen flex-col lg:flex-row flex justify-between items-center px-10 md:px-20 lg:px-24">
        <div className='flex flex-col justify-center items-center lg:items-end lg:mr-32 mt-40 lg:mt-0 pb-40 md:w-2/5'>
          <img src={logo} alt="" className='h-[300px] md:h-[350px] xl:h-[400px] 2xl:h-[500px]'/>
        </div>
        <div className='flex flex-col justify-center items-center mt-40 md:mt-0 pb-40 md:w-3/5'>
          <img src={brel} alt="" className='h-[300px] md:h-[350px] xl:h-[400px] 2xl:h-[500px]'/>
          <p className='text-center font-normal text-base md:text-xl xl:text-2xl mr-5 border-t-2 border-[#ab0f2a] pt-1 px-4'>
          Hey! Mijn naam is Brel Carton. Van zodra ik boven het aanrecht kwam, kreeg je me niet meer uit de keuken. Al heel lang heb ik een grote passie voor het bereiden van gerechten voor vrienden en familie. Als oprichter en kok van
          <strong className='text-[#ab0f2a] px-1'>ME Carte Blanche</strong>
          zal ik jouw feest van
          <strong className='text-[#ab0f2a] px-1'>A</strong>
          tot
          <strong className='text-[#ab0f2a] px-1'>Z</strong>
          tot in de puntjes gaan verzorgen.
          </p>
        </div>
      </div>
      <div className="bg-[url('./images/background3.jpg')] min-w-full h-80 bg-fixed bg-center">
        <div className='min-w-full min-h-full flex flex-col justify-center items-center space-y-7'>
          <div className='flex flex-col justify-center items-center space-y-4 text-white mx-10'>
            <p className='text-xl md:text-2xl lg:text-3xl text-center'>
              Op zoek naar de feestservice die maatwerk levert?
            </p>
            <p className='text-md md:text-lg lg:text-xl text-center'>
              Neem nu contact op, dan bekijken we samen de mogelijkheden.
            </p>
          </div>
          <Link to='/contact' className='px-5 h-10 w-44 bg-gray-200 border-2 border-[#ab0f2a] rounded-md hover:text-white hover:bg-[#ab0f2a] hover:w-48 duration-[400ms] text-black flex justify-center items-center'>Contacteer ons!</Link>
        </div>
      </div>
      <div className='min-w-full h-80 flex flex-col justify-center items-center border-b-2 border-t-2 lg:border-b-2 border-[#ab0f2a] space-y-4'>
        <p className='text-xl text-[#ab0f2a] font-semibold'>
          Deel deze pagina
        </p>
        <p className='text-3xl text-gray-400'>
          met je vrienden
        </p>
        <div className='flex space-x-5'>
          <a href="https://www.facebook.com/ME-Carte-Blanche-102308499077979/?ref=page_internal" target="_blank" rel="noreferrer"><AiOutlineFacebook className='w-14 h-14 hover:px-1 duration-[400ms] rounded-2xl text-[#ab0f2a]'/></a>
          <a href="https://www.instagram.com/me_carte_blanche_/" target="_blank" rel="noreferrer"><AiOutlineInstagram className='w-14 h-14 hover:px-1 duration-[400ms] rounded-2xl text-[#ab0f2a]'/></a>
          <a href="mailto:info@mecarteblanche.be" target="_blank" rel="noreferrer"><AiOutlineMail className='w-14 h-14 hover:px-1 duration-[400ms] rounded-2xl text-[#ab0f2a]'/></a>
        </div>
      </div>
      <div className='hidden lg:block min-w-full min-h-screen'>
        <div className='flex h-1/2'>
          <div className="bg-[url('./images/background2.png')] w-1/2 max-h-full bg-cover bg-center"></div>
          <div className='w-1/2 h-[50vh] flex justify-center items-center border-b-2 border-l-2 border-[#ab0f2a]'>
            <div className='h-4/6 w-5/6'>
              <p className='text-2xl xl:text-3xl mb-4 font-semibold text-[#ab0f2a]'>Wat bieden wij aan?</p>
              <p className='mb-10 text-xl xl:text-2xl'>
                Wilt u graag een feest of evenement organiseren en bent u op zoek naar de nodig ondersteuning op ieder vlak in dit proces? 
                Super! Dan bent u bij ons aan het juiste adres.
                Micro-events Carte Blanche staat in voor de organisatie van totaalevenementen, zodat u zorgeloos van uw evenement kan genieten.
              </p>
              {/* <Link to='/products' className='px-5 h-10 w-32 bg-white border-2 border-[#ab0f2a] rounded-md hover:text-white hover:bg-[#ab0f2a] duration-[400ms] text-black flex justify-center items-center'>Producten</Link> */}
            </div>
          </div>
        </div>
        <div className='flex h-1/2'>
          <div className='w-1/2 h-[50vh] flex justify-center items-center text-right border-t-2 border-r-2 border-[#ab0f2a]'>
            <div className='h-4/6 w-5/6'>
              <p className='text-2xl xl:text-3xl mb-4 font-semibold text-[#ab0f2a]'>Waarom kiezen voor ons?</p>
              <p className='mb-10 text-xl xl:text-2xl'>
                Als bedrijf streven we ernaar om iedere context in vullen, van trouwfeesten tot verjaardagsfeesten tot festivals. 
                U kan het zo gek niet bedenken of wij doen het!
                Flexibiliteit en vlotheid zijn onze twee mijlpalen waar we dag in en dag uit naar streven!
              </p>
              {/* <Link to='/contact' className='px-5 h-10 w-32 bg-white border-2 border-[#ab0f2a] rounded-md hover:text-white hover:bg-[#ab0f2a] duration-[400ms] text-black flex justify-center items-center'>Contact</Link> */}
            </div>
          </div>
          <div className="bg-[url('./images/background1.png')] w-1/2 max-h-full bg-cover bg-center"></div>
        </div>
      </div>
      <div className='lg:hidden min-w-full flex flex-col'>
        <div className='flex flex-col'>
          <div className="bg-[url('./images/background2.png')] h-72 bg-cover bg-center"></div>
          <div className='flex justify-center items-center min-h-fit p-10 border-b-2 border-t-2 border-[#ab0f2a]'>
            <div className='h-4/6 w-5/6'>
              <p className='text-2xl mb-4 font-semibold text-[#ab0f2a]'>Wat bieden wij aan?</p>
              <p className='mb-5 text-xl'>
                Wilt u graag een feest of evenement organiseren en bent u op zoek naar de nodig ondersteuning op ieder vlak in dit proces? 
                Super! Dan bent u bij ons aan het juiste adres.
                Micro-events Carte Blanche staat in voor de organisatie van totaalevenementen, zodat u zorgeloos van uw evenement kan genieten.
              </p>
              {/* <Link to='/products' className='px-5 h-10 w-32 bg-white border-2 border-[#ab0f2a] rounded-md hover:text-white hover:bg-[#ab0f2a] duration-[400ms] text-black flex justify-center items-center'>Producten</Link> */}
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className="bg-[url('./images/background1.png')] h-72 bg-cover bg-center"></div>
          <div className='flex justify-center items-center min-h-fit p-10 border-t-2 border-[#ab0f2a]'>
            <div className='h-4/6 w-5/6'>
              <p className='text-2xl mb-4 font-semibold text-[#ab0f2a]'>Waarom kiezen voor ons?</p>
              <p className='mb-5 text-xl'>
                Als bedrijf streven we ernaar om iedere context in vullen, van trouwfeesten tot verjaardagsfeesten tot festivals. 
                U kan het zo gek niet bedenken of wij doen het!
                Flexibiliteit en vlotheid zijn onze twee mijlpalen waar we dag in en dag uit naar streven!
              </p>
              {/* <Link to='/contact' className='px-5 h-10 w-32 bg-white border-2 border-[#ab0f2a] rounded-md hover:text-white hover:bg-[#ab0f2a] duration-[400ms] text-black flex justify-center items-center'>Contact</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}