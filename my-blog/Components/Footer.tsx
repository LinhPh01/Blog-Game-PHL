import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
        <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
            <div className="flex items-center space-x-6">
                <div className="md:w[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#60A5FA]">
                    <MapIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] text-black"/>

                </div>
                <div>
                    <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Address</h1>
                    <p className="text-[17px] w-[90%] text-white opacity-60">TP.HCM</p>
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <div className="md:w[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#60A5FA]">
                    <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] text-black"/>

                </div>
                <div>
                    <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Phone</h1>
                    <p className="text-[17px] w-[90%] text-white opacity-60">+84 931305101</p>
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <div className="md:w[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#60A5FA]">
                    <EnvelopeIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] text-black"/>

                </div>
                <div>
                    <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Mail</h1>
                    <p className="text-[17px] w-[90%] text-white opacity-60">phamhoailinh779@gmail.com</p>
                </div>
            </div>

        </div>
        <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center">
            <div className="text-[22px] mb-[2rem] md:mb-0 text-white opacity-20">
                Thành lập năm 2024
            </div>
            <div className="flex items-center space-x-10">
                <p className="text-[22px] text-white opacity-20">About</p>
                <p className="text-[22px] text-white opacity-20">Privacy Policy</p>
                <p className="text-[22px] text-white opacity-20">Licensing</p>
                <p className="text-[22px] text-white opacity-20">Contact</p>
            </div>
        </div>
    </div>
  )
}

export default Footer