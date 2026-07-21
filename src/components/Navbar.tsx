"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import { navLinks } from "@/data";

const Navbar = () => {
  const [isActive, setIsActive] = useState("Home");

  return (
    <nav className="w-283 h-20.75 bg-white/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(15,41,66,0.08)] rounded-[56px] px-6 py-3 flex items-center justify-between  z-40 transition-all fixed top-6 left-1/2 -translate-x-1/2">
      {/* Brand Logo Area */}
      <div className="pb-1.5">
        <Image src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-4 text-sm font-semibold text-[#5a7184]">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={` font-inter font-medium text-base px-2 transition-all duration-300 hover:text-primary  ${isActive === item.label ? "text-primary pb-1 border-b-2 border-primary" : "text-secondary"} `}
            onClick={() => setIsActive(item.label)}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Action Button */}
      <div className="shadow-2xl shadow-primary/35 rounded-full">
        <button className="w-full font-inter bg-primary hover:from-[#006fdf] hover:to-[#0084ff] text-white text-xs font-medium md:text-sm lg:text-base rounded-full py-2 pl-4 pr-2.5 flex items-center justify-center gap-2 shadow-[inset_0_0_8px_rgb(255,255,255,0.8)] transition-all">
          <span>Book Now</span>
          <span className="bg-white rounded-full h-8 w-8 flex justify-center items-center text-primary ">
            <FiArrowUpRight className="  " />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
