import React, { useState } from "react";
import Nav from "../Components/Nav";
import MobileNav from "@/Components/MobileNav";
import Hero from "@/Components/Hero";
import Blog from "@/Components/Blog";
import Footer from "@/Components/Footer";

const Home = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (<div className="overflow-x-hidden">
    <div>
      {/* Navbar */}
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      {/* Hero section */}
      <Hero />
      <div className="relative z-[30]">
      <Blog/>
      <Footer/>
      </div>
    </div>
  </div>);
};

export default Home