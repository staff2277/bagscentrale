import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      
      {/* Premium Story Section */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <div className="relative aspect-square bg-zinc-900 overflow-hidden border border-white/10 group">
             <img 
               src="https://placehold.co/1000x1000/111/fff?text=Artisanal+Process" 
               alt="Crafting Process" 
               className="object-cover w-full h-full opacity-60 scale-105 group-hover:scale-100 transition-transform duration-1000" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          <div className="max-w-xl">
             <h5 className="text-accent text-xs font-bold tracking-[.4em] uppercase mb-6">Our Legacy</h5>
             <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase mb-8 leading-tight">
                Authenticity <br />
                <span className="text-zinc-500 italic font-light lowercase font-serif">in every stitch.</span>
             </h2>
             <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10">
                Born in the heart of artisanal excellence, BagsCentrale is a tribute to 
                the timeless beauty of handcrafted leather. We believe that true luxury 
                is not just seen, but felt in the quality of the materials and the 
                precision of the hands that shape them.
             </p>
             <button className="px-12 py-5 border border-accent text-accent font-bold tracking-widest text-sm hover:bg-accent hover:text-black transition-all duration-500 uppercase">
                DISCOVER OUR STORY
             </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section with Staggered animations placeholder */}
      <section className="py-24 px-8 bg-zinc-50 border-t border-black/5">
         <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h3 className="text-4xl font-light italic text-zinc-400 mb-12">"Luxury is the quality of life, not the quantity of things."</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 w-full">
               <div className="p-12 bg-white flex flex-col items-center">
                  <div className="w-12 h-12 border border-accent rounded-full mb-8 flex items-center justify-center text-accent">01</div>
                  <h4 className="text-lg font-bold tracking-widest uppercase mb-4">Ethical Sourcing</h4>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed uppercase tracking-tighter">Premium leather from sustainable sources.</p>
               </div>
               <div className="p-12 bg-white flex flex-col items-center border-x border-zinc-100">
                  <div className="w-12 h-12 border border-accent rounded-full mb-8 flex items-center justify-center text-accent">02</div>
                  <h4 className="text-lg font-bold tracking-widest uppercase mb-4">Master Craft</h4>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed uppercase tracking-tighter">Ensuring longevity with precise craftsmanship.</p>
               </div>
               <div className="p-12 bg-white flex flex-col items-center">
                  <div className="w-12 h-12 border border-accent rounded-full mb-8 flex items-center justify-center text-accent">03</div>
                  <h4 className="text-lg font-bold tracking-widest uppercase mb-4">Eternal Design</h4>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed uppercase tracking-tighter">Style that stands the test of time.</p>
               </div>
            </div>
         </div>
      </section>

      <footer className="bg-black text-white py-20 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tighter mb-8 uppercase">BAGS<span className="text-accent">CENTRALE</span></h3>
            <p className="text-zinc-500 font-light max-w-sm mb-8">
              Redefining premium lifestyle through curated leather essentials. 
              Join our mailing list to receive exclusive updates and early access to our limited drops.
            </p>
            <div className="flex items-center gap-4 border-b border-white/20 pb-4 max-w-sm">
               <input type="text" placeholder="ENTER YOUR EMAIL" className="bg-transparent border-none outline-none text-xs font-bold tracking-widest flex-1 uppercase" />
               <button className="text-accent hover:text-white transition-colors text-xs font-bold tracking-[.3em]">JOIN</button>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[.4em] uppercase mb-8 text-accent">COLLECTIONS</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-light tracking-widest uppercase">
              <li><Link href="/shop" className="hover:text-white transition-colors">THE SIGNATURE</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">EVENING WEAR</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">WORKFORCE</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">LIMITED DROP</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[.4em] uppercase mb-8 text-accent">SUPPORT</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-light tracking-widest uppercase">
              <li><Link href="/about" className="hover:text-white transition-colors">SHIPPING</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">RETURNS</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">WARRANTY</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">CONTACT</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-[.4em] text-zinc-600 font-bold">
           <span>© 2026 BAGSCENTRALE. ALL RIGHTS RESERVED.</span>
           <div className="flex gap-8 mt-4 md:mt-0">
             <span>INSTAGRAM</span>
             <span>PINTEREST</span>
             <span>LOOKBOOK</span>
           </div>
        </div>
      </footer>
    </>
  );
}
