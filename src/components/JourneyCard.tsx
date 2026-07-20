import { Journey } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  item: Journey;
  index: number;
}

export default function JourneyCard({ item, index }: Props) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-3xl ${
        index === 1 ? "h-125" : "h-105.5"
      }`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />

      {/* overlay */}

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/5 to-black/10" />

      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <span className="rounded-full font-medium font-inter border border-white/85 bg-white/10 px-3 py-1 text-xs shadow-[inset_0_0_8px_rgb(255,255,255,0.8)] backdrop-blur-2xl">
          {item.badge}
        </span>

        <h3 className="mt-4 font-playfair font-bold text-2xl">{item.title}</h3>

        <p className="mt-3 text-sm font-normal font-inter leading-6 text-[#FCFDFD]">
          {item.description}
        </p>

        <Link
          href={item.href}
          className="mt-7 inline-flex items-center gap-2 font-medium text-base font-inter"
        >
          View Packages
          <IoIosArrowForward
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}
