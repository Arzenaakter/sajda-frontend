import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import JourneySection from "@/components/home/JourneySection";
import TestimonialSection from "@/components/home/TestimonialSection";
import UmrahSpecialSection from "@/components/home/UmrahSpecialSection";
import WeOfferSection from "@/components/home/WeOfferSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeOfferSection />
      <JourneySection />
      <UmrahSpecialSection />
      <WhyChooseSection />
      <BlogSection />
      <CTASection />
      <TestimonialSection />
    </>
  );
}
