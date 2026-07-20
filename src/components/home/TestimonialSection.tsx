/* eslint-disable react/no-unescaped-entities */
"use client";

import { testimonials } from "@/data";
import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import testimonialBg from "@/assets/testimonial/testimonialBg.svg";
import travelConcepts from "@/assets/testimonial/Travel_Concepts.svg";
import Image from "next/image";
import Container from "../common/Container";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden w-full py-20 md:py-24 lg:h-157.75 lg:py-0">
      {/* Background */}

      <Image
        src={testimonialBg}
        alt=""
        fill
        priority
        className="absolute inset-0 -z-10 object-cover object-center"
      />

      {/* Left Decoration */}
      <Image
        src={travelConcepts}
        alt=""
        className="absolute bottom-0 left-0 w-28 md:w-40 lg:w-60 pointer-events-none select-none"
      />

      <Container>
        <div className="flex flex-col items-center justify-center lg:mt-24 ">
          <div className="text-center ">
            <span className="text-primary font-normal font-inter text-base">
              Promotion
            </span>

            <h2 className="font-playfair mt-2 lg:text-4xl md:text-3xl text-xl font-semibold text-secondary">
              See What Our Clients Say About Us
            </h2>
          </div>
          {/* Slider */}

          <div className="relative mt-16 md:mt-20  lg:max-w-3xl ">
            {/* Previous */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 md:left-0 lg:-left-8 -translate-y-1/2 flex h-10 w-10 md:h-14 md:w-14 lg:h-15.5 lg:w-15.5 items-center justify-center rounded-full bg-[#737373] text-white"
            >
              <FaArrowLeftLong className="md:w-6.75 " />
            </button>

            {/* Card */}

            <div className="w-full max-w-135 lg:w-134.5 lg:h-69.25 rounded-[17px] bg-white px-6 sm:px-8 md:px-10 lg:px-14 py-10 lg:py-16 text-center shadow-xl">
              <div className="flex justify-center -mt-20 md:-mt-24 lg:-mt-30 ">
                <Image
                  src={current.imgLink}
                  alt=""
                  className="md:h-30 md:w-30 h-24 w-24 rounded-full border-6 border-white object-cover shadow-2xl "
                />
              </div>

              <RiDoubleQuotesL className="  text-secondary/20 md:w-15 md:h-15 h-8 w-8 lg:-mt-2" />

              <p className="mx-auto md:-mt-5 max-w-[85%] lg:max-w-95 text-sm md:text-base md:leading-7  text-black font-inter">
                {current.review}
              </p>

              <RiDoubleQuotesR className="mx-auto text-black md:mt-5 mt-2 " />

              <h4 className=" font-semibold text-black text-sm">
                {current.name}
              </h4>
            </div>

            {/* Next */}

            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 md:right-0 lg:-right-8 -translate-y-1/2 flex h-10 w-10 md:h-14 md:w-14 lg:h-15.5 lg:w-15.5 items-center justify-center rounded-full bg-[#737373] text-white"
            >
              <FaArrowRightLong className="md:w-6.75 " />
            </button>
          </div>

          {/* Dots */}

          <div className="mt-6 md:mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-0.5 w-8 transition-all ${
                  activeIndex === index ? " bg-primary" : " bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
