import {
  FaFacebookMessenger,
  FaInfinity,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import Container from "./common/Container";
import Image from "next/image";
import footerLogo from "@/assets/footer/footerLogo.svg";
import footerBg from "@/assets/footer/footerbg.svg";
import Link from "next/link";
import { footerLinks } from "@/data";
import ScrollToTopButton from "./home/ScrollToTopButton";

export default function Footer() {
  return (
    <footer className=" pt-16 pb-8 relative bg-white ">
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-no-repeat bg-right bg-contain"
        style={{
          backgroundImage: `url(${footerBg.src})`,
        }}
      />
      <ScrollToTopButton />
      <div className="relative z-10">
        <Container>
          {/* Top Section*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b-2 border-secondary/10 ">
            {/* Logo & Intro */}

            <div className="lg:col-span-3 flex flex-col justify-center gap-4">
              <div className="flex items-center justify-center ">
                <Image src={footerLogo} alt="Footer Logo" />
              </div>
              <div className="flex items-center justify-center ">
                <p className="text-base leading-7 text-secondary font-sans w-49.75 ">
                  Travel helps companies manage payments easily.
                </p>
              </div>

              {/* Quick Contact info */}
              <div className=" text-primary flex items-center justify-center gap-4">
                <Link href={"#"}>
                  <FaLinkedinIn size={20} />
                </Link>
                <Link href={"#"}>
                  <FaFacebookMessenger size={20} />
                </Link>
                <Link href={"#"}>
                  <FaTwitter size={20} />
                </Link>
                <Link href={"#"}>
                  <FaInfinity size={20} />
                </Link>
              </div>
            </div>

            {/* Quick Links Column  */}
            <div className="col-span-2  md:contents">
              <div className="grid grid-cols-2 gap-4 text-center md:text-left lg:col-span-4">
                {footerLinks.map((section) => (
                  <div key={section.title} className=" font-manrope  ">
                    <h4 className="text-[21px] font-bold text-secondary mb-6 ">
                      {section.title}
                    </h4>

                    <ul className="space-y-4 text-secondary text-base">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="hover:text-primary transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscribe */}
            <div className="md:col-span-4 flex flex-col md:justify-center lg:justify-normal md:items-center lg:items-start gap-4 px-20 md:px-0">
              <h4 className="text-[21px] font-bold text-secondary mb-6 font-manrope">
                Join Our Newsletter
              </h4>

              <form className="relative ">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  className="w-full grow lg:w-97 h-13 bg-[#EEEEFF] rounded-l-[10px] py-3.5 pl-4 pr-12 text-sm  placeholder-secondary/40 focus:outline-none  font-sans"
                />
                <button
                  type="submit"
                  className="absolute  lg:w-46.25 h-13 right-0 top-0  bottom-1.5 px-3 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-[10px] flex items-center justify-center transition-colors cursor-pointer "
                >
                  Subscribe
                </button>
              </form>

              <p className="text-secondary/50">
                * Will send you weekly updates for your better tour packages.
              </p>
            </div>
          </div>

          {/* Copy right section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 mt-4 ">
            <p className="text-secondary font-medium text-base">
              Copyright @SAJDA {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
