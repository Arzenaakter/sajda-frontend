import Image from "next/image";
import Link from "next/link";

import mainImage from "@/assets/umrah/mainImg.svg";
import topImage from "@/assets/umrah/topImage.jpg";
import leftImage1 from "@/assets/umrah/leftImage1.png";
import leftImage2 from "@/assets/umrah/leftImage2.jpg";
import Container from "../common/Container";

export default function UmrahSpecial() {
  return (
    <section className="py-20  lg:py-28 overflow-hidden ">
      <Container>
        <div className="grid items-center gap-12 md:gap-16 lg:gap-40 grid-cols-1 lg:grid-cols-12 ">
          {/* Left */}

          <div className="relative  flex justify-center lg:justify-start lg:col-span-5 ">
            {/* Vertical Text */}

            <h2 className="absolute  -left-28 md:-left-30 lg:-left-28 lg:top-[67%] top-[50%] md:top-[60%] -translate-y-1/2 -rotate-90 font-playfair  text-[46px] md:text-[56px] font-bold uppercase leading-16 tracking-[-2px] text-[#E8E8E8] lg:block ">
              UMRAH Packages
            </h2>

            {/* Main Image */}

            <div className="relative mx-auto lg:mx-0 lg:left-42">
              <div className="relative border-primary border-2 rounded-t-[180px] sm:rounded-t-[250px] lg:rounded-t-[376px] px-3 pt-3 border-b-0 border-l-0">
                <div className="relative h-95 w-65 sm:h-120 sm:w-82.5 md:h-140 md:w-100 lg:h-172.5 lg:w-135 overflow-hidden ">
                  {/* <div className="relative lg:h-172.5 lg:w-135 overflow-hidden  "> */}
                  <Image
                    src={mainImage}
                    alt="Umrah"
                    fill
                    priority
                    className="object-cover  rounded-t-[376.11px]"
                  />
                </div>
              </div>

              {/* Top Circle */}

              <div className="absolute left-28 sm:left-36 lg:left-40 -top-7 ">
                <Image
                  src={topImage}
                  alt=""
                  className="object-cover shadow-xl h-10 w-10  rounded-full   md:h-16 md:w-16 lg:h-22 lg:w-22"
                />
              </div>
              <div className="absolute -left-10 sm:-left-16 lg:-left-26 -top-2  ">
                <Image
                  src={leftImage1}
                  alt=""
                  className="object-center h-28 w-28  rounded-full  shadow-2xl md:h-36 md:w-36 lg:h-66 lg:w-66 "
                />
              </div>
              <div className="absolute -left-8 top-44 sm:-left-12 sm:top-56 lg:-left-42 lg:top-68  ">
                <Image
                  src={leftImage2}
                  alt=""
                  className="object-center h-12 w-12  rounded-full  shadow-[0_0_30px_rgba(59,144,251,0.35)] md:h-20 md:w-20 lg:h-41 lg:w-41 "
                />
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="lg:col-span-7 flex justify-center lg:justify-start ">
            <div className=" text-center lg:text-left w-full max-w-xl  lg:w-130 lg:-ml-12">
              <span className="font-playfair text-base font-bold  leading-6 text-primary ">
                Umrah Specials
              </span>

              <h2 className="mt-4 font-playfair md:text-3xl lg:text-4xl font-semibold leading-11 text-secondary text-xl">
                Special Umrah Package for a <br /> Peaceful Journey
              </h2>

              <p className="mt-6 font-inter text-base leading-7 text-[#546881]">
                Experience a peaceful and well-organized Umrah journey with our
                special package, designed to make every step smooth,
                comfortable, and spiritually meaningful. From visa processing
                and flights to hotel, transport, ziyarah, and expert guidance,
                we ensure complete support so you can focus on your worship with
                confidence and peace of mind.
              </p>

              <Link
                href="#"
                className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 font-inter text-base text-white shadow-[0_15px_60px_rgba(1,136,255,0.25),inset_0_0_8px_rgba(255,255,255,0.72)] mx-auto lg:mx-0"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
