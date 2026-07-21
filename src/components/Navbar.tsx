import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-[1132px] h-[83px]  bg-white/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(15,41,66,0.08)] rounded-[56px] px-6 py-3 flex items-center justify-between  z-40 transition-all fixed top-6 left-1/2 -translate-x-1/2">
      {/* Brand Logo Area */}
      <div className="">
        <Image src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5a7184]">
        <Link
          href="/"
          className="text-[#0084ff] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0084ff] after:rounded-full"
        >
          Home
        </Link>
        <Link href="#" className="hover:text-[#0f2942] transition-colors">
          Tour Packages
        </Link>
        <Link href="#" className="hover:text-[#0f2942] transition-colors">
          Hajj Packages
        </Link>
        <Link href="#" className="hover:text-[#0f2942] transition-colors">
          Umrah Packages
        </Link>
        <Link href="#" className="hover:text-[#0f2942] transition-colors">
          About Us
        </Link>
      </div>

      {/* Action Button */}
      <div>
        <button className="bg-linear-to-r from-[#007eff] to-[#0095ff] hover:from-[#006fdf] hover:to-[#0084ff] text-white text-xs md:text-sm font-semibold rounded-full py-2.5 px-5 flex items-center gap-1.5 shadow-[0_4px_15px_rgba(0,132,255,0.25)] transition-all transform hover:-translate-y-0.5">
          <span>Book Now</span>
          <FiArrowUpRight className="text-base stroke-[2.5]" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
