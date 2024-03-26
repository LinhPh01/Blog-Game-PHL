import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import Animation from './Animation'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'




const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            WELCOM TO BLOGGAME <span className='text-yellow-400'>PHL</span>
          </h1>
          <TextEffect />
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="rounded-[10px] px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#facc15] text-black flex items-center space-x-2">
              <p>Get Start</p>
            </button>
            <button className="rounded-[10px] px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#facc15] text-black flex items-center space-x-2">

              <p>Sign In</p>
            </button>
          </div>
        </div>

        <div className='w-[500px] hidden bg-[#60A5FA] relative lg:flex items-center rounded-full h-[500px] transition-transform duration-1000 ease-in-out transform scale-0 lg:scale-100'>
          <Image src="/images/pic1.gif" alt='user' layout='fill' className='object-cover rounded-full' />
          <Image src="/images/pic2.gif" alt='user' layout='fill' className='object-cover rounded-full' />
          <Image src="/images/pic3.gif" alt='user' layout='fill' className='object-cover rounded-full' />
          <Animation />
        </div>

      </div>
    </div>

  )
}

export default Hero