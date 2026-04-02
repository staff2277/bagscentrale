import PageTransition from "@/components/PageTransition";
import Image from "next/image";

export default function About() {
  return (
    <PageTransition transitionType="fade">
      <div className="bg-white min-h-screen pt-16 px-8">
        <div className="max-w-7xl mx-auto py-20 text-center relative">
           <h5 className="text-accent text-xs font-bold tracking-[.5em] uppercase mb-10">Modern Heritage</h5>
           <h1 className="text-8xl md:text-9xl font-bold tracking-tighter uppercase mb-6 leading-[.8]">Our <br /><span className="text-zinc-100 font-light italic lowercase">story.</span></h1>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5 select-none">
              <span className="text-[200px] font-bold tracking-tighter uppercase">BAGSCENTRALE</span>
           </div>
        </div>

        <div className="max-w-7xl mx-auto py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="relative aspect-[3/4] bg-zinc-50 border border-black/5 overflow-hidden group">
              <img src="https://placehold.co/800x1200/111/fff?text=Our+Philosophy" alt="The Brand Vision" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0" />
           </div>
           <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tighter uppercase mb-8 border-b-2 border-accent pb-4 inline-block">Crafted for Elegance</h2>
              <p className="text-lg text-zinc-500 font-light leading-relaxed mb-10 text-balance uppercase tracking-tighter">
                 Founded on the principles of artisanal excellence and timeless design, 
                 BagsCentrale is a tribute to the craftsmanship of the past and the 
                 vision of the future. We believe that true luxury is found in the 
                 details—the quality of the leather, the precision of the stitch, 
                 and the journey of the piece.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-black/5">
                 <div>
                    <h4 className="text-xs font-bold tracking-[.4em] uppercase mb-4 text-accent">Excellence</h4>
                    <p className="text-[10px] text-zinc-400 font-light uppercase tracking-widest leading-relaxed">Only the finest full-grain leathers reach our workshop.</p>
                 </div>
                 <div>
                    <h4 className="text-xs font-bold tracking-[.4em] uppercase mb-4 text-accent">Timelessness</h4>
                    <p className="text-[10px] text-zinc-400 font-light uppercase tracking-widest leading-relaxed">Designs that stand the test of time, beyond seasonal trends.</p>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="max-w-7xl mx-auto py-20 text-center flex flex-col items-center">
            <div className="w-[1px] h-32 bg-accent mb-12"></div>
            <h3 className="text-3xl font-light italic text-zinc-400 lowercase mb-12">"Experience the pinnacle of luxury."</h3>
        </div>
      </div>
    </PageTransition>
  );
}
