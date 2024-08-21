import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-4 lg:py-12">
      <div className="fixed z-10 top-4 right-4 ">
        <button className=" btn btn-primary md:btn-lg gap-1 text-red-500 bg-red-100 border-0 active:bg-red-200 hover:bg-red-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 md:w-6 md:h-6 "><path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path></svg>
        <span className="font-bold">VOTE</span>
      </button>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 items-center justify-center text-center lg:text-left lg:items-start">
        <Image
          src="/elon.jpg"
          width={200}
          height={200}
          alt="Elon Musk Avatar"
          className="rounded-full w-20 h-20 md:w-36 md:h-36"
         />
        <h2 className="badge md:badge-lg font-medium bg-neutral-100">GreatManQuote</h2>
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight md:-mb-4">
        Elon Musk's <br className="md:hidden"/> 50 best quotes <br/>
        chosen by internet and you
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
        <a href="" className="underline hover:no-underline">Upvote & Comment</a> your favorites. No account needed!
        </p>
      </div>
    </section>
  );
};

export default Hero;
