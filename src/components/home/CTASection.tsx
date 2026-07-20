/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import heroBg from "@/assets/cta/ctaBg.svg";
import Line from "@/assets/cta/Line-1.svg";
import Container from "../common/Container";

export default function CTASection() {
  return (
    <section className="relative h-112 overflow-hidden ">
      <Image
        src={heroBg}
        alt="Travel"
        fill
        priority
        className="object-cover "
      />

      <Container>
        <div className="relative z-10 flex  items-center justify-center mt-20">
          <div className="text-center">
            <h2 className="font-playfair text-xl md:text-3xl  lg:text-[50px] font-bold text-white leading-tight">
              Let's Make Your <br />
              Next Journey Amazing
            </h2>

            <div className="flex justify-center my-5">
              <Image src={Line} alt="line" />
            </div>

            <Link
              href="#"
              className="inline-flex justify-center md:w-75  px-10 py-2.5  items-center rounded-[30px] bg-primary  md:text-2xl font-normal font-inter text-white shadow-[inset_0_0_8px_rgb(255,255,255,0.8)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
