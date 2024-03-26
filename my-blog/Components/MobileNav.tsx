import { XMarkIcon } from '@heroicons/react/20/solid';
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-full';

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-50 bg-gray-900`}>
      <div className='h-full flex flex-col items-center justify-center'>
        <div className="nav-link-mobile">Home</div>
        <div className="nav-link-mobile">Blog</div>
        <div className="nav-link-mobile">About</div>
        {/* <div className="nav-link-mobile">Privacy Policy</div>
        <div className="nav-link-mobile">Licensing</div>
        <div className="nav-link-mobile">Contact</div> */}
      </div>
      <div onClick={closeNav} className="absolute top-4 right-4 w-8 h-8 text-yellow-400">
        <XMarkIcon />
      </div>
    </div>
  );
}

export default MobileNav;
