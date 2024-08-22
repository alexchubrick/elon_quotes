import MyHero from "@/components/MyHero";
import MyFooter from "@/components/MyFooter";
import LikeButton from "@/components/LikeButton";
import { createClient } from '@/libs/supabase/server';

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.from("quotes").select('*');
  const sortedData = data.sort((a, b) => a.text.length - b.text.length);

  return (
    <main>
      <MyHero className="" />
      <section className="flex flex-col items-center justify-center text-center gap-12 px-8 mb-16">
        <div className="divide-y w-12/12 sm:w-8/12 lg:w-7/12">
          {sortedData.map((quote, index) => (
            <div key={quote.id}>
              <div className="flex gap-4 py-4">
                <div className="flex flex-col gap-2 items-center justify-start">
                  <img
                    src="/elon.jpg"
                    width={100}
                    height={100}
                    alt="Elon Musk Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="badge bg-neutral-100">
                    #{index + 1}
                  </span>
                </div>
                <div className="text-left relative whitespace-pre-line h-full overflow-hidden truncate flex-1 max-h-[250px]">
                  {quote.text}
                </div>
                <div className="flex flex-col justify-start items-center gap-0.5 h-min font-bold">
                  <LikeButton quoteId={quote.id} initialLikes={quote.likes} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <MyFooter />
    </main>
  );
}