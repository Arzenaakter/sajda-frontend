import { journeys } from "@/data";
import JourneyCard from "./JourneyCard";
import Container from "./common/Container";

export default function JourneySection() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />

            <span className="text-primary text-xs font-semibold uppercase tracking-[3px]">
              Our Services
            </span>

            <span className="h-px w-10 bg-primary" />
          </div>

          <h2 className="mt-3 font-playfair text-5xl text-text-primary">
            Choose Your Journey
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-500">
            Three distinct paths, one trusted partner. Select the journey that
            calls to your heart.
          </p>
        </div>

        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {journeys.map((item) => (
            <JourneyCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
