import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-4 lg:py-12">
      <div className="flex flex-col gap-4 lg:gap-8 items-center justify-center text-center lg:text-left lg:items-start">
        <a href="https://x.com/elonmusk/" target="_blank">
          <Image
            src="/elon.jpg"
            width={200}
            height={200}
            alt="Elon Musk Avatar"
            className="rounded-full w-20 h-20 md:w-36 md:h-36"
          />
        </a>
        <h2 className="badge md:badge-lg font-medium bg-neutral-100">GreatManQuote</h2>
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight md:-mb-4">
          Elon Musk's <br className="md:hidden" /> 50 best quotes <br />
          chosen by internet and you
        </h1>
        <p className="text-lg opacity-80 leading-relaxed mb-6">
          <a href="" className="underline hover:no-underline">Upvote & Comment</a> your favorites. No account needed!
        </p>
      </div>
    </section>
  );
};

export default Hero;
