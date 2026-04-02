"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "@/lib/gsap";
import { ShoppingBag, ArrowRight } from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "The Classic Satchel", price: "$2,450", category: "Leather Essentials", image: "https://placehold.co/600x800/222/fff?text=The+Classic+Satchel" },
  { id: 2, name: "Midnight Clutch", price: "$1,890", category: "Evening Wear", image: "https://placehold.co/600x800/333/fff?text=Midnight+Clutch" },
  { id: 3, name: "Urban Backpack", price: "$3,100", category: "Minimalist Series", image: "https://placehold.co/600x800/444/fff?text=Urban+Backpack" },
  { id: 4, name: "Signature Tote", price: "$2,750", category: "Workforce Premium", image: "https://placehold.co/600x800/555/fff?text=Signature+Tote" },
];

export default function FeaturedProducts() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-8 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 px-4">
          <div className="max-w-xl">
            <h5 className="text-accent text-xs font-bold tracking-[.4em] uppercase mb-4">The Selection</h5>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-black uppercase leading-tight">
              Featured <span className="font-light italic text-zinc-500 lowercase">Collections</span>
            </h2>
            <p className="mt-4 text-zinc-500 font-light text-lg">
              Each piece is a testament to our commitment to quality, 
              designed to transcend trends and last a lifetime.
            </p>
          </div>
          <Link 
            href="/shop" 
            className="hidden md:flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors"
          >
            VIEW ALL <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {PRODUCTS.map((product, idx) => (
            <div 
              key={product.id} 
              ref={el => cardsRef.current[idx] = el}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-white text-black flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-black hover:text-white">
                  <ShoppingBag size={18} strokeWidth={1.5} />
                </button>
              </div>
              <div className="mt-8 px-2">
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="text-[10px] tracking-[.3em] font-bold text-accent uppercase">{product.category}</span>
                  <span className="text-sm font-semibold tracking-widest">{product.price}</span>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-zinc-800 uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                  {product.name}
                </h3>
                <div className="w-0 h-[1px] bg-accent mt-2 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
