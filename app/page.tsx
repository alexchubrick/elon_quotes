import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import MyHero from "@/components/MyHero";
import { createClient } from '@/libs/supabase/server';
import "@/components/css/style.css";
import Header from "@/components/Header";
import BetterIcon from "@/components/BetterIcon";
import Image from 'next/image'

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.from("quotes").select('*');
  const sortedData = data.sort((a, b) => a.text.length - b.text.length);
  return (
    <>
      <main>
        <MyHero className="" />
        <section className="flex flex-col items-center justify-center text-center gap-12 px-8 mb-16">
          {data.map((quotes, index) => (
            <div className="card card-compact bg-base-100 w-80 md:w-96 mx-auto shadow border-2 rounded-xl" key={quotes.id}>
              <div className="card-body flex flex-row">
                <p className="text-lg"><span className="text-zinc-500">#{index + 1}.</span> {quotes.text}</p>
                <div className="flex flex-col py-2 like-button text-lg">

                  <div className="font-semibold text-red-500">10</div>
                </div>
              </div>
              <div className="buttons">
                <span className="mr-3">Comment</span>
                <span>Share</span>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
