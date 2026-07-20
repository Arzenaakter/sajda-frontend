/* eslint-disable react/no-unescaped-entities */
"use client";

import { testimonials } from "@/data";
import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { RiDoubleQuotesR } from "react-icons/ri";
import client1 from "@/assets/testimonial/client1.svg";
import testimonialBg from "@/assets/testimonial/testimonialBg.svg";
import travelConcepts from "@/assets/testimonial/Travel_Concepts.svg";
import Image from "next/image";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <Image src={testimonialBg} alt="" fill className="object-cover -z-10" />

      {/* Left Decoration */}
      <Image
        src={travelConcepts}
        alt=""
        className="absolute bottom-0 left-0 w-60"
      />

      {/* Right Decoration */}
      <Image
        src={travelConcepts}
        alt=""
        className="absolute right-10 top-10 w-36 rotate-12"
      />

      <div className="container">
        <span className="text-primary font-medium">Promotion</span>

        <h2 className="font-playfair mt-2 text-5xl font-bold text-text-primary">
          See What Our Clients Say About Us
        </h2>

        {/* Slider */}

        <div className="relative mx-auto mt-20 max-w-3xl">
          {/* Previous */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-[#4B4B4B] text-white"
          >
            <FaArrowLeftLong />
          </button>

          {/* Card */}

          <div className="rounded-[32px] bg-white px-14 py-16 text-center shadow-xl">
            <Image
              src={client1}
              alt=""
              className="mx-auto -mt-24 mb-8 h-24 w-24 rounded-full border-4 border-white"
            />

            <ImQuotesLeft className="mx-auto mb-6 text-5xl text-gray-300" />

            <p className="mx-auto max-w-xl leading-8 text-gray-600">
              {current.review}
            </p>

            <RiDoubleQuotesR className="mx-auto mt-6 text-3xl text-gray-300" />

            <h4 className="mt-6 font-semibold text-text-primary">
              {current.name}
            </h4>
          </div>

          {/* Next */}

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-[#4B4B4B] text-white"
          >
            <FaArrowRightLong />
          </button>
        </div>

        {/* Dots */}

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? "w-10 bg-primary" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
