'use client';

import { Suspense, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lazy load the 3D Scene to improve performance
const Scene = dynamic(() => import('./3d/Scene'), { 
    ssr: false, 
    loading: () => <div className="w-full h-full flex items-center justify-center text-white/50 text-xs tracking-widest uppercase">Initializing Canvas...</div>
});

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef(null);
  const textGroupRef = useRef(null);

  useGSAP(() => {
    // Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-heading span', {
        y: 100,
        opacity: 0,
        rotateX: -45,
        stagger: 0.1,
        duration: 1.5,
        ease: 'power4.out',
      });

      gsap.from('.hero-subtext', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.2,
        ease: 'power2.out',
      });
      
      // Scroll parallax/transition
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        opacity: 0,
        scale: 0.95,
      });
    }, heroRef);

    return () => ctx.revert();
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>

      {/* Overlay Content */}
      <div ref={textGroupRef} className="relative z-10 flex flex-col items-center text-center px-6 mix-blend-difference pointer-events-none">
        <h1 className="hero-heading text-[12vw] md:text-[10vw] font-black leading-none uppercase tracking-tighter text-white overflow-hidden">
            <span className="inline-block">B</span>
            <span className="inline-block">A</span>
            <span className="inline-block">G</span>
            <span className="inline-block">S</span>
            <span className="inline-block">C</span>
            <span className="inline-block">E</span>
            <span className="inline-block">N</span>
            <span className="inline-block">T</span>
            <span className="inline-block">R</span>
            <span className="inline-block">A</span>
            <span className="inline-block">L</span>
            <span className="inline-block">E</span>
        </h1>
        <p className="hero-subtext mt-6 text-sm md:text-base text-gray-300 font-light tracking-[0.5em] uppercase">
          Curated Luxury. Architectural Design.
        </p>
        <div className="hero-cta mt-12 pointer-events-auto">
            <button className="px-8 py-3 border border-white text-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-500">
                Explore Collection
            </button>
        </div>
      </div>

      {/* Decorative vertical lines for premium feel */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5 z-[1]" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 z-[1]" />
    </section>
  );
}
