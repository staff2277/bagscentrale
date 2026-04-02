import Image from "next/image";
import Link from "next/link";
import { Filter, ChevronDown, ListFilter } from "lucide-react";

const ALL_PRODUCTS = [
  { id: 1, name: "The Classic Satchel", price: "$2,450", category: "Leather", image: "https://placehold.co/600x800/111/fff?text=Satchel" },
  { id: 2, name: "Midnight Clutch", price: "$1,890", category: "Evening", image: "https://placehold.co/600x800/222/fff?text=Clutch" },
  { id: 3, name: "Urban Backpack", price: "$3,100", category: "Work", image: "https://placehold.co/600x800/333/fff?text=Backpack" },
  { id: 4, name: "Signature Tote", price: "$2,750", category: "Travel", image: "https://placehold.co/600x800/444/fff?text=Tote" },
  { id: 5, name: "Heritage Sling", price: "$1,550", category: "Daily", image: "https://placehold.co/600x800/555/fff?text=Sling" },
  { id: 6, name: "Regent Weekender", price: "$4,200", category: "Travel", image: "https://placehold.co/600x800/666/fff?text=Weekender" },
];

export default function Shop() {
  return (
    <div className="bg-white min-h-screen px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl font-bold tracking-tighter uppercase mb-4">The Shop</h1>
          <p className="text-zinc-500 font-light tracking-wide max-w-xl text-lg uppercase cursor-default">
            Exquisite craftsmanship meets timeless design. Discover the world of luxury with BagsCentrale.
          </p>
        </header>

        <div className="flex flex-col md:flex-row items-center justify-between border-y border-black/5 py-8 mb-12 gap-6">
           <div className="flex items-center gap-12 text-[10px] tracking-[.4em] font-bold uppercase overflow-x-auto w-full md:w-auto">
              <span className="text-accent cursor-pointer border-b border-accent pb-1">ALL COLLECTIONS</span>
              <span className="text-zinc-400 hover:text-black transition-colors cursor-pointer pb-1">THE SIGNATURE</span>
              <span className="text-zinc-400 hover:text-black transition-colors cursor-pointer pb-1">EVENING WEAR</span>
              <span className="text-zinc-400 hover:text-black transition-colors cursor-pointer pb-1">TRAVEL</span>
           </div>
           <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-start">
             <button className="flex items-center gap-2 text-[10px] tracking-[.4em] font-bold uppercase group">
                <ListFilter size={14} className="group-hover:text-accent transition-colors" /> FILTER
             </button>
             <button className="flex items-center gap-2 text-[10px] tracking-[.4em] font-bold uppercase group">
                SORT BY: NEWEST <ChevronDown size={14} className="group-hover:text-accent transition-colors" />
             </button>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {ALL_PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-8 left-8 right-8 text-black opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button className="w-full bg-white py-4 text-[10px] font-bold tracking-[.3em] uppercase hover:bg-black hover:text-white transition-colors">QUICK ADD +</button>
                </div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                 <h3 className="text-xl font-medium tracking-tight uppercase mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
                 <span className="text-xs text-zinc-400 font-bold tracking-[.3em] uppercase mb-4">{product.category}</span>
                 <span className="text-lg font-semibold tracking-widest">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center border-t border-black/5 pt-24">
           <h4 className="text-[10px] tracking-[.5em] font-bold uppercase text-zinc-400 mb-6">Showing 6 of 24 pieces</h4>
           <div className="w-64 h-[1px] bg-zinc-100 relative">
              <div className="absolute top-0 left-0 w-1/4 h-full bg-accent"></div>
           </div>
           <button className="mt-12 px-16 py-5 bg-black text-white text-[10px] font-bold tracking-[.4em] uppercase hover:bg-accent hover:text-black transition-all duration-500">
             Load More
           </button>
        </div>
      </div>
    </div>
  );
}
