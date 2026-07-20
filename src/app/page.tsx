import CTASection from "@/components/home/CTASection";
import JourneySection from "@/components/home/JourneySection";
import TestimonialSection from "@/components/home/TestimonialSection";
import UmrahSpecialSection from "@/components/home/UmrahSpecialSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";

export default function Home() {
  return (
    <>
      <JourneySection />
      <UmrahSpecialSection />
      <WhyChooseSection />
      <CTASection />
      <TestimonialSection />
    </>
  );
}
