"use client";
import { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Fingerprint } from "lucide-react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-8">
      <div className="max-w-md w-full bg-zinc-50 p-12 lg:p-16 border border-black/5">
        <div className="flex flex-col items-center mb-12">
          <Fingerprint size={48} strokeWidth={1} className="text-accent mb-6" />
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-2">
            {isLogin ? "SIGN IN" : "JOIN US"}
          </h2>
          <p className="text-[10px] tracking-[.4em] font-bold text-zinc-400 uppercase">
             Access your premium account
          </p>
        </div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="relative border-b border-black/10 flex items-center gap-4 py-4 group">
               <User size={16} className="text-zinc-400 group-focus-within:text-accent" />
               <input 
                 type="text" 
                 placeholder="FULL NAME" 
                 className="bg-transparent border-none outline-none text-[10px] tracking-widest font-bold uppercase w-full" 
               />
            </div>
          )}
          
          <div className="relative border-b border-black/10 flex items-center gap-4 py-4 group">
             <Mail size={16} className="text-zinc-400 group-focus-within:text-accent" />
             <input 
               type="email" 
               placeholder="EMAIL ADDRESS" 
               className="bg-transparent border-none outline-none text-[10px] tracking-widest font-bold uppercase w-full" 
             />
          </div>

          <div className="relative border-b border-black/10 flex items-center gap-4 py-4 group">
             <Lock size={16} className="text-zinc-400 group-focus-within:text-accent" />
             <input 
               type="password" 
               placeholder="PASSWORD" 
               className="bg-transparent border-none outline-none text-[10px] tracking-widest font-bold uppercase w-full" 
             />
          </div>

          <button className="w-full bg-black py-6 text-white text-[10px] font-bold tracking-[.4em] uppercase hover:bg-accent hover:text-black transition-all duration-500 mt-12">
            {isLogin ? "LOG IN" : "CONTINUE"}
          </button>
        </form>

        <div className="mt-12 flex flex-col items-center gap-4 text-[10px] tracking-[.2em] font-bold uppercase text-zinc-400">
           <p>
             {isLogin ? "NEW TO BAGSCENTRALE?" : "ALREADY HAVE AN ACCOUNT?"}{" "}
             <button 
               onClick={() => setIsLogin(!isLogin)} 
               className="text-accent underline cursor-pointer"
             >
                {isLogin ? "REGISTER HERE" : "SIGN IN HERE"}
             </button>
           </p>
           {isLogin && <button className="underline opacity-60 hover:opacity-100">FORGOT PASSWORD?</button>}
        </div>
      </div>
      
      <Link href="/" className="mt-12 text-[10px] tracking-[.4em] font-bold uppercase text-zinc-400 hover:text-black transition-colors">
         ← RETURN TO GLOBAL STORE
      </Link>
    </div>
  );
}
