"use client";
import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";

export default function PageTransition({ children, transitionType = "slide-up" }) {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (transitionType === "slide-up") {
      tl.set(overlayRef.current, { y: "100%" })
        .to(overlayRef.current, { y: "0%", duration: 0.6, ease: "power4.inOut" })
        .to(containerRef.current, { opacity: 1, duration: 0.4 })
        .to(overlayRef.current, { y: "-100%", duration: 0.6, ease: "power4.inOut" });
    } else if (transitionType === "fade") {
      tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    } else if (transitionType === "reveal") {
       tl.set(overlayRef.current, { x: "-100%" })
        .to(overlayRef.current, { x: "0%", duration: 0.7, ease: "expo.inOut" })
        .to(containerRef.current, { opacity: 1, duration: 0.3 })
        .to(overlayRef.current, { x: "100%", duration: 0.7, ease: "expo.inOut" });
    }
  }, [transitionType]);

  return (
    <>
      <div 
        ref={overlayRef} 
        className="fixed inset-0 z-[9999] bg-accent pointer-events-none"
      />
      <div ref={containerRef} className="opacity-0">
        {children}
      </div>
    </>
  );
}
