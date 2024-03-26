import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[url('/images/banner4.jpg')] bg-cover bg-center">
        <h1 className="heading">
            Game
            <span className="text-yellow-400">Blog</span>
        </h1>
        <h2 className="flex items-center justify-center text-2xl text-white">
            Most popular blogs
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
            <div>
                <div className="w-[100%] relative h-[400px]">
                    <Image src="/images/blog.jpg"
                        alt="blog" 
                        layout="fill" 
                        className="object-cover"/>
                </div>
                <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                <div className="w-fit px-[2rem] py-[1rem] bg-[#60A5FA] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                    March 26, 2024
                </div>
                <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                    <div className="flex items-center space-x-3">
                        <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#60A5FA]"/>
                        <p className="text-white">By Linh</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#60A5FA]"/>
                        <p className="text-white">Comments(0)</p>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <div className="w-[100%] relative h-[400px]">
                    <Image src="/images/blog1.jpg"
                        alt="blog" 
                        layout="fill" 
                        className="object-cover"/>
                </div>
                <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                <div className="w-fit px-[2rem] py-[1rem] bg-[#60A5FA] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                    March 26, 2024
                </div>
                <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                    <div className="flex items-center space-x-3">
                        <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#60A5FA]"/>
                        <p className="text-white">By Linh</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#60A5FA]"/>
                        <p className="text-white">Comments(0)</p>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <div className="w-[100%] relative h-[400px]">
                    <Image src="/images/blog2.jpg"
                        alt="blog" 
                        layout="fill" 
                        className="object-cover"/>
                </div>
                <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                <div className="w-fit px-[2rem] py-[1rem] bg-[#60A5FA] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                    March 26, 2024
                </div>
                <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                    <div className="flex items-center space-x-3">
                        <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#60A5FA]"/>
                        <p className="text-white">By Linh</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#60A5FA]"/>
                        <p className="text-white">Comments(0)</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Blog