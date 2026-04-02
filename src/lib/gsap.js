"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  
  // Custom Ease
  gsap.defaults({
    ease: "power2.out",
    duration: 0.8,
  });
}

export const staggerText = (target) => {
  gsap.fromTo(
    target, 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, stagger: 0.05 }
  );
};

export const revealOnScroll = (target) => {
  gsap.fromTo(
    target,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export default gsap;
