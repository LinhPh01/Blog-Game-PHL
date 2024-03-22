import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import Animation from './Animation'




const Hero = () => {
  return (
    <div className="h-[88vh] vg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Chào mừng đến với Blog Game PHL <span className='text-yellow-400'>hehe</span>
          </h1>
          <TextEffect />
        </div>

        <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px] transition-transform duration-1000 ease-in-out transform scale-0 lg:scale-100'>
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