import Image from "next/image";
import { LuHeart } from "react-icons/lu";

import Container from "../common/Container";

import plane from "@/assets/whyChoose/plen.svg";
import building from "@/assets/whyChoose/building.svg";
import ongoingCardImg from "@/assets/whyChoose/ongoingCardimg.svg";
import starBg from "@/assets/whyChoose/starBg.svg";
import { features } from "@/data";
import { ImLeaf } from "react-icons/im";
import { FaRegMap } from "react-icons/fa";
import { TbSendFilled } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function WhyChooseSection() {
  return (
    <section className="relative  py-20  overflow-hidden w-full  ">
      <Container>
        <div className="grid items-center justify-center lg:justify-start gap-28 lg:gap-5 lg:grid-cols-2  ">
          {/* LEFT */}

          <div>
            <p className="font-playfair text-primary font-bold text-base text-center lg:text-start">
              Why Choose Sajda
            </p>

            <h2 className="text-center lg:text-start mt-3 font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary">
              Plan with Trust Travel with Peace
            </h2>

            <div className="mt-12 space-y-8">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex gap-5">
                    <div
                      style={{ backgroundColor: item.bg }}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white"
                    >
                      <Icon size={26} />
                    </div>

                    <div>
                      <h4 className="font-playfair text-base font-bold text-secondary">
                        {item.title}
                      </h4>

                      <p className="mt-2 max-w-sm font-inter font-normal leading-7 text-[#546881] lg:w-70.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center ">
            {/* Plane */}
            <Image
              src={plane}
              alt=""
              className="absolute -right-38 -top-40 lg:w-auto -z-10  lg:pr-5"
            />

            {/* Decoration */}
            <Image
              src={starBg}
              alt=""
              className="absolute -bottom-10 left-0 w-32 lg:w-auto"
            />
            {/* Card */}
            <div className="relative z-10 w-full max-w-92.5 lg:-left-10 lg:-top-5 h-100 rounded-[28px] bg-white p-5 shadow-[-10px_-10px_60px_rgba(89,177,230,0.4)]">
              <div className="flex justify-center items-center">
                {" "}
                <Image
                  src={building}
                  alt=""
                  className="w-full rounded-[26px] lg:w-80.25 h-40.25"
                />
              </div>
              <div>
                {" "}
                <h4 className="mt-5 font-playfair text-lg font-medium text-secondary">
                  Trip to Makkah
                </h4>
                <p className="font-medium text-base text-[#84829A]">
                  14–29 June | by JR Martir
                </p>
              </div>

              {/* ongoind card section */}
              <div className="flex items-center justify-between lg:w-34.75 lg:h-9">
                <div className="flex gap-3 text-[#84829A] mt-14">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <ImLeaf />
                  </button>

                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <FaRegMap />
                  </button>

                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <TbSendFilled />
                  </button>
                </div>
                {/* ongoing */}
                <div className="ms-10 mt-6 flex p-2 gap-2 justify-between bg-white rounded-[18px] shadow lg:w-65.75 lg:h-32.25">
                  <div className="h-12.5 w-12.5 ">
                    <Image
                      src={ongoingCardImg}
                      alt=""
                      className="h-12.5 w-12.5 rounded-full  "
                    />
                  </div>

                  <div>
                    <p className="text-sm text-[#84829A]">Ongoing</p>

                    <p className="font-playfair text-lg font-medium text-black">
                      Trip to Jeddah
                    </p>
                    <span className="mt-1 block text-sm  text-black">
                      <span className="text-[#DF6951]">40%</span> completed
                    </span>

                    <div className="mt-2 h-1.5 w-36 rounded-full bg-gray-200">
                      <div className="h-full w-[40%] rounded-full bg-[#DF6951]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* card footer */}
              <div className="absolute bottom-4 flex items-center  gap-10 lg:gap-20">
                <div className="flex items-center gap-2 text-[#84829A]">
                  <HiOutlineBuildingOffice2 className="w-4 h-4 " />
                  <p>60 people are interested</p>
                </div>

                <button className="text-[#DF6951]">
                  <LuHeart size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
