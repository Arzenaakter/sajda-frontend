/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import heroBg from "@/assets/cta/ctaBg.svg";
import Line from "@/assets/cta/Line-1.svg";
import Container from "./common/Container";

export default function CTASection() {
  return (
    <section className="relative h-105 overflow-hidden">
      <Image src={heroBg} alt="Travel" fill priority className="object-cover" />

      <div className="absolute inset-0 bg-[#00000066]/10" />

      <Container>
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center">
            <h2 className="font-playfair text-5xl font-bold text-white leading-tight">
              Let's Make Your <br />
              Next Journey Amazing
            </h2>

            <div className="flex justify-center my-5">
              <Image src={Line} alt="line" />
            </div>

            <Link
              href="#"
              className="inline-flex h-14 items-center rounded-full bg-primary px-10 text-lg font-semibold text-white transition hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
