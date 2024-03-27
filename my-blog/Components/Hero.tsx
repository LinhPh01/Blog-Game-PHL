import React from 'react'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'




const Hero = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-[url('/images/pic2.gif')] relative ">
  <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-center h-full">
    <div className="text-center lg:text-center lg:w-1/2">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
        WELCOME TO BLOGGAME <span className="text-yellow-400">PHL</span>
      </h1>
      <TextEffect />
      <div className="mt-8 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
        <button className="rounded-[10px] px-2 hover:bg-yellow-400 transition-all duration-200 py-1 text-18px font-bold uppercase bg-[#60a5fa] text-black flex items-center justify-center space-x-2">Get Started</button>
        <button className="rounded-[10px] px-2 hover:bg-yellow-400 transition-all duration-200 py-1 text-18px font-bold uppercase bg-[#60a5fa] text-black flex items-center justify-center space-x-2">Sign In</button>
      </div>
    </div>
  </div>
</div>


  )
}

export default Hero





