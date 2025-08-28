import Image from "next/image";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/unsplash_tZCrFpSNiIQ (1).png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black/30" /> */}
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between py-8">
        {/* Top logo */}
        <div className="pt-6">
          <Image src="/TopLogo.png" alt="Top logo" width={72} height={72} priority />
        </div>

        {/* Center copy with updated typography styles */}
        <div className="px-6 w-full max-w-6xl text-center mt-4" style={{ 
          fontFamily: 'Neue Montreal, sans-serif',
          fontWeight: 400,
          fontSize: '34px',
          lineHeight: '50px',
          letterSpacing: '0%'
        }}>
          <p className="text-white/90">
            Every part of the lifestyle we live started with just a handful of people;
          </p>
          <p className="text-white/90 mt-4">
            crazy enough to dream it, bold enough to try.
          </p>
          <p className="text-white/90 mt-4">
            What started as a vision became the way the world works, connects, and thrives.
          </p>

          <div className="h-6 mt-8" />

          <p className="mt-8">
            Now it&#39;s our turn.
          </p>
          <p className="mt-4">
            And we want you in it.
          </p>
          <p className="mt-4">
            Not as a customer,  as a fellow visionary.
          </p>
         

          <div className="h-6" />


          <p className="text-white/90 mt-4">
            Together, we&#39;re not just changing the way we live.
          </p>
          <p className="text-white/90 mt-4">
            We&#39;re creating something so big, it becomes <span className="italic">culture</span>.
          </p>
        </div>

        {/* Bottom wordmark */}
        <div className="pb-8 flex flex-col items-center gap-4">
          <Image src="/NameLogo.png" alt="Name logo" width={160} height={48} priority />
          {/* CTA */}
          <a href="/home" className="scroll-indicator inline-flex items-center gap-3 text-white font-medium select-none rounded-full px-6 py-3 bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition">
            I&#39;m in!
          </a>
        </div>
      </div>
      {/* End of landing hero */}

    </section>
  );
}
