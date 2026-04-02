import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Collections() {
  const collections = [
    { name: "THE SIGNATURE", items: "12 Pieces", image: "https://placehold.co/1200x800/111/fff?text=Signature+Collection" },
    { name: "EVENING WEAR", items: "8 Pieces", image: "https://placehold.co/1200x800/222/fff?text=Evening+Wear" },
    { name: "TRAVEL & WORK", items: "15 Pieces", image: "https://placehold.co/1200x800/333/fff?text=Travel+Collection" },
  ];

  return (
    <PageTransition transitionType="slide-up">
      <div className="bg-white min-h-screen pt-16 px-8">
        <div className="max-w-7xl mx-auto py-20 border-b border-black/5 mb-20 text-center">
           <h1 className="text-7xl font-bold tracking-tighter uppercase mb-6">Collections</h1>
           <p className="text-zinc-500 font-light tracking-[.3em] uppercase">Curated excellence for every occasion.</p>
        </div>

        <div className="max-w-7xl mx-auto space-y-32 mb-32">
          {collections.map((col, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}>
               <div className="relative aspect-[16/9] w-full lg:w-2/3 bg-zinc-100 overflow-hidden group">
                  <img src={col.image} alt={col.name} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
               </div>
               <div className="w-full lg:w-1/3 text-center lg:text-left">
                  <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">{col.name}</h2>
                  <span className="text-[10px] tracking-[.5em] font-bold text-accent uppercase mb-8 block">{col.items}</span>
                  <Link href="/shop" className="inline-flex items-center gap-4 text-xs font-bold tracking-[.4em] uppercase group border-b border-black pb-2">
                     EXPLORE COLLECTION <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
               </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
