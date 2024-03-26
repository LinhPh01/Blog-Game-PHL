import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
    openNav: () => void;
}

const Nav: React.FC<Props> = ({ openNav }) => {
    return (
        <div className="sticky top-0 bg-black shadow-md">
            <div className="container mx-auto px-4 md:px-0 flex items-center justify-between h-16">
                <h1 className="cursor-pointer text-white text-xl md:text-2xl">
                    <img className="h-12" src="/images/Blog.png" alt="My Blog" />
                </h1>
                <div className="hidden md:flex justify-center space-x-4">
                    <div className="nav-link">Home</div>
                    <div className="nav-link">Blog</div>
                    <div className="nav-link">About</div>
                </div>
                <div className="md:hidden">
                    <Bars3Icon className="w-8 h-8 text-yellow-300 cursor-pointer" onClick={openNav} />
                </div>
            </div>
        </div>
    );
};

export default Nav;
