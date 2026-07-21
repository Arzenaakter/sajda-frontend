/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="relative min-h-screen w-full  px-4 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-md w-full bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_rgba(15,41,66,0.06)] rounded-4xl p-8 text-center">
        <h1 className="font-playfair text-7xl md:text-8xl font-bold bg-linear-to-b from-primary to-[#3B90FB] bg-clip-text text-transparent leading-none">
          404
        </h1>

        <h2 className="mt-4 font-playfair text-xl md:text-2xl font-semibold text-secondary">
          Destination Not Found
        </h2>

        <p className="mt-3 font-inter text-sm leading-6 text-[#5a7184]">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Let's get you back on track.
        </p>

        {/* Redirect Button */}
        <div className="mt-8 flex justify-center">
          <Link href="/">
            <button className="font-inter bg-primary hover:from-[#006fdf] hover:to-[#0084ff] text-white text-sm font-medium rounded-full py-2.5 pl-5 pr-3 flex items-center justify-center gap-2 shadow-2xl shadow-primary/35 transition-all transform hover:-translate-y-0.5">
              <span>Back to Home</span>
              <span className="bg-white rounded-full h-7 w-7 flex justify-center items-center text-primary">
                <FiArrowUpRight size={14} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
