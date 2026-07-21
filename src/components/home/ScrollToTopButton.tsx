"use client";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="absolute -top-6 right-10 z-20 md:h-14 md:w-14 h-12 w-12 rounded-full flex flex-col items-center justify-center bg-primary shadow-[0_4px_20px_rgba(15,41,66,0.05)] hover:shadow-[0_6px_25px_rgba(0,132,255,0.15)] transition-all duration-300 transform hover:-translate-y-1 "
      aria-label="Scroll to top"
    >
      <FiArrowUp size={27} className="text-white" />
    </button>
  );
};

export default ScrollToTopButton;
