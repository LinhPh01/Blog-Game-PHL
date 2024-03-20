import React from "react";


const Nav = () => {
    return (
    <div className="w-[100%] top-0 h-[12vh] bg-[#010203] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="flex-[0.6] cursor-pointer text-[25px]">
                <img className ="h-[14vh] w-auto " src="/images/Blog.png" alt="My Blog" />
            </h1>
            <div className="nav-link">Home</div>
            <div className="nav-link">About</div>
            <div className="nav-link">Blog</div>
            <div className="nav-link">Privacy Policy</div>
            <div className="nav-link">Licensing</div>
            <div className="nav-link">Contact</div>
        </div>
    </div>
    )
};

export default Nav