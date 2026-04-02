import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Hero />
      <section className="bg-black py-32 px-12 flex flex-col items-center justify-center">
        <h2 className="text-white text-3xl font-light tracking-[0.2em] uppercase">The Collection</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {/* Minimalist product placeholders to show the flow */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[3/4] border border-white/5 bg-white/[0.02]" />
            ))}
        </div>
      </section>
    </main>
  );
}
