"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { navLinks } from "@/data";

const Navbar = () => {
  const [isActive, setIsActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Large device view */}
      <nav className="hidden lg:flex w-283 h-20.75 bg-white/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(15,41,66,0.08)] rounded-[56px] px-6 py-3 items-center justify-between z-40 transition-all fixed top-6 left-1/2 -translate-x-1/2">
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

      {/* Mobile and tab */}
      <nav className="flex lg:hidden w-[90%] md:w-[85%] h-16 bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(15,41,66,0.08)] rounded-full px-5 py-2 items-center justify-between z-40 fixed top-4 left-1/2 -translate-x-1/2">
        <div className="  flex items-center">
          <Image src={logo} alt="Logo" className="w-full  object-contain" />
        </div>

        {/* Hamburger  */}
        <div className="flex items-center gap-3">
          <div className="shadow-xl shadow-primary/20 rounded-full hidden sm:block">
            <button className="font-inter bg-primary text-white text-xs font-medium rounded-full py-1.5 pl-3.5 pr-2 flex items-center justify-center gap-2">
              <span>Book</span>
              <span className="bg-white rounded-full h-6 w-6 flex justify-center items-center text-primary">
                <FiArrowUpRight size={14} />
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-secondary hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Drawer menu */}
      <div
        className={`fixed inset-x-5 top-24 z-50 lg:hidden bg-white/95 backdrop-blur-2xl rounded-2xl border border-gray-100 p-5 shadow-2xl transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`font-inter font-medium text-base py-2 px-3 rounded-xl transition-all ${
                isActive === item.label
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-secondary hover:bg-gray-50"
              }`}
              onClick={() => {
                setIsActive(item.label);
                setIsOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Action button inside dropdown strictly for narrow screens */}
          <div className="shadow-2xl shadow-primary/35 rounded-full mt-2 sm:hidden">
            <button className="w-full font-inter bg-primary text-white text-sm font-medium rounded-full py-2 pl-4 pr-2.5 flex items-center justify-center gap-2 shadow-[inset_0_0_8px_rgb(255,255,255,0.8)]">
              <span>Book Now</span>
              <span className="bg-white rounded-full h-7 w-7 flex justify-center items-center text-primary">
                <FiArrowUpRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
