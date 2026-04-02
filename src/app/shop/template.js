"use client";
import PageTransition from "@/components/PageTransition";

export default function Template({ children }) {
  return <PageTransition transitionType="reveal">{children}</PageTransition>;
}
