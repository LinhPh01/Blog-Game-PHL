import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Transition } from '@headlessui/react';

const images = ["/images/pic2.gif", "/images/pic3.gif", "/images/pic1.gif"];

const Animation: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px] transition-transform duration-1000 ease-in-out transform scale-0 lg:scale-100'>
            {images.map((image, index) => (
                <Transition
                    key={index}
                    show={index === currentIndex}
                    enter="transition-opacity duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Image
                        src={image}
                        alt="user"
                        layout="fill"
                        className="object-cover rounded-full"
                    />
                </Transition>


            ))}
        </div>
    );
};

export default Animation;
