import { CirclePlay } from "lucide-react";
import CardImg from "@/assets/Icons/card.png";
import { TextEffect } from "../ui/text-effect";

const HeroSection = () => {
  return (
    <section className="bg-[#53389E] text-white text-center px-4">
      <div className="py-12 md:py-16">
        <TextEffect
          per="word"
          as="h3"
          preset="slide"
          className="text-xs md:text-sm uppercase tracking-wide"
        >
          Super. Simple. Banking.
        </TextEffect>

        <TextEffect
          per="word"
          as="h3"
          preset="blur"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 leading-tight"
        >
          Banking technology that has your back.
        </TextEffect>

        <TextEffect
          className="text-base sm:text-lg text-gray-200 mt-4 max-w-xl mx-auto"
          per="char"
          preset="fade"
        >
          Simple, transparent banking. No hidden fees and free overdrafts.
        </TextEffect>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6">
          <button className="px-5 py-3 bg-white text-black font-semibold rounded-lg flex items-center justify-center gap-x-2">
            <CirclePlay size={18} />
            Demo
          </button>
          <button className="px-5 py-3 font-semibold rounded-lg bg-[#7F56D9]">
            Sign up
          </button>
        </div>
      </div>
      <div className="pb-0">
        <img
          src={CardImg}
          alt="Cards"
          className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-3xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
