"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      imageRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5 }
    )
    .fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.8"
    )
    .fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.6"
    )
    .fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.4"
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-[85vh] w-full flex items-center overflow-hidden bg-black">
      {/* Background Image Placeholder */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/1a1a1a/ffffff?text=Premium+Collection+2026"
          alt="Luxury Backdrop"
          fill
          sizes="100vw"
          className="object-cover opacity-60 brightness-75 grayscale"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl bg-black/40 backdrop-blur-sm p-12 border-l border-accent border-l-4">
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-[.9]"
          >
            Crafted for <br />
            <span className="text-accent">Elegance</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="mt-6 text-xl text-zinc-300 font-light tracking-wide max-w-lg"
          >
            Experience the pinnacle of luxury with our curated collection of handcrafted leather bags. 
            Timeless design meet modern functionality.
          </p>
          <div ref={ctaRef} className="mt-10 flex gap-6">
            <Link 
              href="/shop" 
              className="px-10 py-4 bg-accent text-black font-semibold tracking-widest text-sm hover:bg-white transition-colors duration-500 uppercase"
            >
              SHOP COLLECTION
            </Link>
            <Link 
              href="/collections" 
              className="px-10 py-4 border border-white/20 text-white font-medium tracking-widest text-sm hover:border-accent hover:text-accent transition-colors duration-500 uppercase"
            >
              BROWSE LOOKBOOK
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator animation placeholder */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
         <span className="text-white/40 text-[10px] tracking-[.4em] font-medium uppercase translate-y-2">DISCOVER MORE</span>
         <div className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  );
}
