"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, ChevronLeft, CreditCard } from "lucide-react";

export default function Checkout() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePaystackCheckout = () => {
    setIsLoading(true);
    // Placeholder for Paystack Integration
    alert("Paystack checkout integration is pending setup. Redirecting to payment gateway... (Mock)");
    setTimeout(() => {
       setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Order Form */}
        <div className="p-8 lg:p-24 bg-white border-r border-black/5">
          <Link href="/cart" className="flex items-center gap-2 text-[10px] tracking-[.4em] font-bold uppercase mb-16 text-zinc-400 hover:text-black transition-colors">
            <ChevronLeft size={14} /> BACK TO CART
          </Link>
          
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-12">CHECKOUT</h2>
          
          <div className="space-y-12">
            <section>
              <h3 className="text-xs font-bold tracking-[.3em] uppercase mb-8 border-b border-black pb-4">01. CONTACT DETAILS</h3>
              <div className="grid grid-cols-1 gap-6">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-50 border-none px-6 py-5 text-xs font-bold tracking-widest uppercase focus:ring-1 focus:ring-accent outline-none" 
                />
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold tracking-[.3em] uppercase mb-8 border-b border-black pb-4">02. SHIPPING ADDRESS</h3>
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="FIRST NAME" className="col-span-1 bg-zinc-50 border-none px-6 py-5 text-xs font-bold tracking-widest uppercase outline-none focus:ring-1 focus:ring-accent" />
                <input type="text" placeholder="LAST NAME" className="col-span-1 bg-zinc-50 border-none px-6 py-5 text-xs font-bold tracking-widest uppercase outline-none focus:ring-1 focus:ring-accent" />
                <input type="text" placeholder="STREET ADDRESS" className="col-span-2 bg-zinc-50 border-none px-6 py-5 text-xs font-bold tracking-widest uppercase outline-none focus:ring-1 focus:ring-accent" />
                <input type="text" placeholder="PO BOX / APARTMENT" className="col-span-2 bg-zinc-50 border-none px-6 py-5 text-xs font-bold tracking-widest uppercase outline-none focus:ring-1 focus:ring-accent" />
                <input type="text" placeholder="CITY" className="col-span-1 bg-zinc-50 border-none px-6 py-5 text-xs font-bold tracking-widest uppercase outline-none focus:ring-1 focus:ring-accent" />
                <input type="text" placeholder="POSTAL CODE" className="col-span-1 bg-zinc-50 border-none px-6 py-5 text-xs font-bold tracking-widest uppercase outline-none focus:ring-1 focus:ring-accent" />
              </div>
            </section>

            <section>
               <h3 className="text-xs font-bold tracking-[.3em] uppercase mb-8 border-b border-black pb-4">03. PAYMENT METHOD</h3>
               <div className="p-8 border-2 border-accent bg-zinc-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <CreditCard className="text-accent" />
                     <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase">Paystack Secure</h4>
                        <p className="text-[10px] text-zinc-400 mt-1">Cards, Bank, USSD, and Apple Pay</p>
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <div className="w-8 h-5 bg-white border border-zinc-100 rounded"></div>
                     <div className="w-8 h-5 bg-white border border-zinc-100 rounded"></div>
                  </div>
               </div>
            </section>

            <button 
              onClick={handlePaystackCheckout}
              disabled={isLoading}
              className="w-full bg-black py-6 text-white text-[10px] font-bold tracking-[.5em] uppercase hover:bg-accent hover:text-black transition-all duration-500 flex items-center justify-center gap-3"
            >
              {isLoading ? "PROCESING..." : <><Lock size={14} /> COMPLETE PURCHASE</>}
            </button>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="p-8 lg:p-24 bg-zinc-50 lg:h-screen lg:sticky lg:top-0 overflow-y-auto">
           <h4 className="text-xs font-bold tracking-[.4em] uppercase mb-12 text-zinc-400">Order Summary (2)</h4>
           <div className="space-y-8 mb-16">
              {[
                { name: "The Classic Satchel", price: "2450.00", qty: 1, image: "https://placehold.co/100x120/222/fff?text=Satchel" },
                { name: "Midnight Clutch", price: "1890.00", qty: 1, image: "https://placehold.co/100x120/111/fff?text=Clutch" }
              ].map((item, id) => (
                <div key={id} className="flex gap-6 items-center">
                  <div className="relative w-20 h-24 bg-zinc-200 border border-black/5">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xs font-bold tracking-widest uppercase mb-1">{item.name}</h5>
                    <p className="text-[10px] text-zinc-400 tracking-tighter uppercase">Qty: {item.qty} | Midnight Black</p>
                  </div>
                  <span className="text-xs font-bold tracking-[.2em]">${item.price}</span>
                </div>
              ))}
           </div>

           <div className="space-y-4 pt-8 border-t border-black/5 uppercase tracking-[.2em] text-[10px] font-bold">
              <div className="flex justify-between">
                 <span className="text-zinc-400">Subtotal</span>
                 <span>$4,340.00</span>
              </div>
              <div className="flex justify-between">
                 <span className="text-zinc-400">Shipping</span>
                 <span className="text-accent underline cursor-pointer">Calculated at next step</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-black/10 text-base tracking-tighter text-black font-semibold">
                 <span>Total</span>
                 <span>$4,340.00</span>
              </div>
           </div>

           <div className="mt-16 p-6 bg-white border border-black/5 text-[10px] tracking-widest text-zinc-400 uppercase leading-relaxed">
              *By completing your purchase you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Refund Policy</span>.
           </div>
        </div>
      </div>
    </div>
  );
}
