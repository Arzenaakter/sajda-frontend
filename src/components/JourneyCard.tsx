import { Journey } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  item: Journey;
}

export default function JourneyCard({ item }: Props) {
  return (
    <div className="group relative h-[460px] overflow-hidden rounded-3xl">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />

      {/* overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <span className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
          {item.badge}
        </span>

        <h3 className="mt-4 font-playfair text-3xl">{item.title}</h3>

        <p className="mt-3 text-sm leading-7 text-white/85">
          {item.description}
        </p>

        <Link
          href={item.href}
          className="mt-7 inline-flex items-center gap-2 font-medium"
        >
          View Packages
          <FaArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}
