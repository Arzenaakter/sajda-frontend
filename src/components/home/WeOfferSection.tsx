import Image from "next/image";
import Container from "../common/Container";
import { offers } from "@/data";

const WeOfferSection = () => {
  return (
    <section className=" z-30 ">
      <Container>
        {/* Heading */}

        <div className="text-center">
          <h2 className="font-playfair text-[36px] font-bold text-secondary">
            We Offer Best Services
          </h2>
        </div>

        {/* Cards */}

        <div className="  mt-14 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((item, index) => (
            <div className="relative " key={item.id}>
              {/* Blue Decoration */}
              {index === 1 && (
                <div className="absolute -bottom-8 -left-5 h-24 w-24 rounded-tl-[2.5rem] rounded-bl-none rounded-br-[2.5rem] rounded-tr-none bg-primary -z-10" />
              )}

              <div className="relative h-75 w-71.25 rounded-[40px] bg-[#FCFDFD]/72 p-6  backdrop-blur-[2px] shadow-[0_26px_40px_rgba(0,0,0,0.08),inset_0_0_16px_rgba(255,255,255,1)] ">
                <div className="flex h-full flex-col items-center text-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className=" h-29 w-45 object-contain"
                  />

                  <h3 className="mt-5 font-playfair text-[20px] font-semibold text-secondary leading-7">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-inter text-[16px] leading-7 text-[#5E6282]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WeOfferSection;
