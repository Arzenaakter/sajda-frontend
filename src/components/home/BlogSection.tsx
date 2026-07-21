import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import Container from "../common/Container";
import tawar from "@/assets/blog/tawar.png";
import { blogs } from "@/data";

const BlogSection = () => {
  return (
    <section className="overflow-hidden pb-20 lg:pb-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div className="order-2 lg:order-1">
            <div className="flex justify-center lg:justify-start ">
              <div className="w-full max-w-xl lg:w-160 text-center lg:text-start">
                <p className="font-playfair text-base font-bold text-primary ">
                  Sajda Blog
                </p>

                <h2 className="mt-3 text-center lg:text-start font-playfair md:text-3xl lg:text-4xl font-semibold leading-tight text-secondary text-xl ">
                  We Provide You Best Europe Sightseeing Tours
                </h2>

                <p className="mt-6 font-inter leading-7 text-black  lg:w-143.75 text-center lg:text-start">
                  Discover the beauty of Europe with our carefully planned
                  sightseeing tours. From world-famous landmarks to charming
                  cities and scenic destinations, we ensure a smooth,
                  comfortable, and memorable travel experience for every
                  traveler.
                </p>

                <Link
                  href="#"
                  className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-8 text-white shadow-[0_15px_60px_rgba(1,136,255,0.25),inset_0_0_8px_rgba(255,255,255,0.72)] font-inter"
                >
                  View All Blogs
                </Link>
              </div>
            </div>

            {/* Cards */}

            <div className="relative mt-12 flex gap-5  pb-2  w-full lg:w-[895.03px] lg:h-60 z-10">
              {blogs.map((blog) => (
                <div
                  key={blog.title}
                  className="group relative  h-56 md:h-60 flex-1 shadow-xl grow"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105 rounded-[10px] w-67.75 h-60"
                  />

                  <div className="absolute right-3 top-3 flex items-center  gap-2 rounded-full   border-0.5 border-white/85 bg-white/10 px-3 py-1 text-xs shadow-[inset_0_0_8px_rgb(255,255,255,0.8)] backdrop-blur-2xl">
                    <span className="text-base font-inter font-normal">
                      {blog.title}
                    </span>

                    <div className="bg-white h-5 w-5 rounded-full flex justify-center items-center">
                      <HiArrowUpRight className="  text-black" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end lg:pr-10">
            <div className="relative">
              {/* Vertical Text */}

              <h2 className="absolute left-64 top-[64%] hidden  -translate-y-1/2 -rotate-90 whitespace-nowrap font-inter text-[51px] font-bold text-[#EAEAEA] lg:block">
                Breath Taking Views
              </h2>
              {/* Border */}
              <div className="relative inline-block">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-t-[376.11px] bg-linear-to-b from-[#A7327A] to-[#3B90FB]" />

                {/* White Cover */}
                <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0 rounded-t-[374px] bg-white" />

                {/* Hide Right Border */}
                <div className="absolute top-0 right-0 w-1.5 h-full bg-white" />

                {/* Image */}
                <div className="relative pt-5 -ps-2 left-2">
                  <div className="relative w-[477.49px] h-[690.57px] overflow-hidden rounded-t-[366px]">
                    <Image
                      src={tawar}
                      alt="Europe"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
