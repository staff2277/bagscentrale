import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BagsCentrale | Premium Luxury Bags",
  description: "Exquisite craftsmanship, timeless design. Discover the world of luxury with BagsCentrale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fff] m-0 p-0 selection:bg-[#c5a059] selection:text-white antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-24 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
