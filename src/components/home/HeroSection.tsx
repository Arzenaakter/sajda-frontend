import Image from "next/image";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import heroLeftimg from "@/assets/hero/heroLeftimg.svg";
import heroRightImg from "@/assets/hero/heroRightImg.svg";
import client1 from "@/assets/hero/client1.png";
import client2 from "@/assets/hero/client2.png";
import client3 from "@/assets/hero/client3.png";
import client4 from "@/assets/hero/client4.png";

const HeroSection = () => {
  return (
    <section className="relative  pt-28 lg:pt-0 w-full px-4 md:px-8  flex flex-col items-center lg:h-211.5 overflow-hidden lg:overflow-visible">
      <div className="absolute  -top-100 w-212.5 h-212.5 border-[1.5px] border-[#B2BBC6]/12 rounded-full z-20 " />
      <div className="absolute -top-127 w-266.5 h-266.5 border-[1.5px] border-[#B2BBC6]/12 rounded-full z-20 " />

      {/* Left side */}
      <div className="absolute left-0 top-60 -z-10 h-204.5 max-w-168.75 pb-20 hidden lg:block select-none pointer-events-none origin-bottom-left">
        <Image
          src={heroLeftimg}
          alt="Medina Illustration"
          priority
          sizes="30vw"
          className="w-full full object-contain object-bottom"
        />
      </div>

      {/* Right side*/}
      <div className="absolute  right-0 top-12 -z-10 max-w-174 h-225.25 hidden lg:block select-none pointer-events-none origin-bottom-right">
        <Image
          src={heroRightImg}
          alt="Makkah Illustration"
          priority
          sizes="30vw"
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      {/*Hero main content*/}
      <div className="max-w-7xl  w-full mx-auto relative z-30 flex flex-col items-center lg:grow justify-center  md:pt-0 lg:pt-10">
        {/* Hero heading */}
        <div className="text-center max-w-3xl px-2 lg:w-193.25 lg:h-60.5">
          <h1 className="text-2xl  md:text-4xl lg:text-[56px] font-playfair font-bold text-secondary leading-16 mb-5">
            Your Tour, Hajj & Umrah <br className="hidden sm:inline" /> Journey
            begins here!
          </h1>

          <p className="text-sm md:text-base text-[#546881] font-medium font-inter leading-7 mb-6">
            Book your Tour, Hajj or Umrah pilgrimage with trusted services &
            package
          </p>

          {/* Trusted Clients Ring Stack */}
          <div className=" items-center justify-center gap-3  inline-flex ">
            <div className="flex -space-x-2">
              <Image
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
                src={client1}
                alt="Client 1"
              />
              <Image
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
                src={client2}
                alt="Client 2"
              />
              <Image
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
                src={client3}
                alt="Client 3"
              />
              <Image
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
                src={client4}
                alt="Client 4"
              />
            </div>
            <p className="text-xs font-medium text-secondary font-inter leading-4">
              Trusted By 40+ Clients
            </p>
          </div>
        </div>

        {/*  Searchbar */}
        <div className="w-full max-w-241.25 lg:h-55 mt-6 lg:mt-22  bg-white/24 backdrop-blur border border-white/60 shadow-[0_20px_60px_rgba(15,41,66,0.06)] rounded-[56px] px-6 py-8 ">
          {/* Small inner heading */}
          <div className="text-center mb-6">
            <h3 className="lg:text-2xl md:text-xl text-lg font-inter font-semibold text-secondary leading-8 inline-block relative pb-1.5">
              Plan Your Journey
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2.5px] bg-primary rounded-full"></span>
            </h3>
          </div>

          {/* Input Grid Field Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Field: Package */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs md:text-sm lg:text-base font-bold text-secondary font-playfair leading-6 pl-1">
                Package
              </label>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 text-xs font-semibold text-gray-500 rounded-full py-3 px-4 appearance-none outline-none transition-all cursor-pointer lg:w-43.75">
                  <option>Select package</option>
                  <option>Hajj Package</option>
                  <option>Umrah Package</option>
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Field: Travel Month */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs md:text-sm lg:text-base font-bold text-secondary font-playfair leading-6 pl-1">
                Travel Month
              </label>
              <div className="relative">
                <select className="w-full lg:w-43.75 bg-white border border-gray-200 text-xs font-semibold text-gray-500 rounded-full py-3 px-4 appearance-none outline-none transition-all cursor-pointer">
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Field: Travelers */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs md:text-sm lg:text-base font-bold text-secondary font-playfair leading-6 pl-1">
                Travelers
              </label>
              <div className="relative">
                <select className="w-full lg:w-43.75 bg-white border border-gray-200 text-xs font-semibold text-gray-500 rounded-full py-3 px-4 appearance-none outline-none transition-all cursor-pointer">
                  <option>Select travelers</option>
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Field: Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs md:text-sm lg:text-base font-bold text-secondary font-playfair leading-6 pl-1">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Enter number"
                className="w-full lg:w-43.75 bg-white border border-gray-200 text-xs font-medium text-gray-700 placeholder-gray-400 rounded-full py-3 px-5 outline-none transition-all"
              />
            </div>

            {/* Submit Action Button */}
            <div className="pt-2 sm:pt-0 sm:col-span-2 lg:col-span-1">
              <button className="w-full font-inter bg-primary hover:from-[#006fdf] hover:to-[#0084ff] text-white text-xs font-medium md:text-sm lg:text-base rounded-full py-2.5 px-4 flex items-center justify-center gap-2 shadow-[inset_0_0_8px_rgb(255,255,255,0.8)] transition-all">
                <FiSearch className="text-sm stroke-[2.5]" />
                <span>Search Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
