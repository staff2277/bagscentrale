"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ShoppingBag, User, Search, Menu } from "lucide-react";
import gsap from "@/lib/gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 px-8 py-4 backdrop-blur-md bg-white/70 border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold tracking-tighter uppercase whitespace-nowrap">
            Bags<span className="text-accent">Centrale</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide border-l border-black/10 pl-8">
            <Link href="/shop" className="hover:text-accent transition-colors">SHOP</Link>
            <Link href="/collections" className="hover:text-accent transition-colors">COLLECTIONS</Link>
            <Link href="/about" className="hover:text-accent transition-colors">STORY</Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block hover:text-accent transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link href="/auth" className="hover:text-accent transition-colors">
            <User size={20} strokeWidth={1.5} />
          </Link>
          <Link href="/cart" className="relative group hover:text-accent transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full group-hover:bg-accent transition-colors">
              0
            </span>
          </Link>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
