import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
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
      <div className="relative z-30 flex min-h-screen flex-col items-center justify-between py-6 sm:py-8 px-4 sm:px-0">
        {/* Top logo */}
        <div className="pt-4 sm:pt-6">
          <Image src="/TopLogo.png" alt="Top logo" width={72} height={72} priority />
        </div>

        {/* Center copy with updated typography styles */}
        <div className="px-2 sm:px-6 w-full max-w-6xl text-center mt-4 sm:mt-8" style={{ 
          fontFamily: 'Neue Montreal, sans-serif',
          fontWeight: 400,
          fontSize: 'clamp(24px, 6vw, 34px)',
          lineHeight: 'clamp(32px, 8vw, 42px)',
          letterSpacing: '0%',
          textAlign: 'center',
        }}>
          <p className="text-white/90 mb-3 sm:mb-4">
            Every part of the lifestyle we live started with just a handful of people;
          </p>
          <p className="text-white/90 mb-3 sm:mb-4">
            crazy enough to dream it, bold enough to try.
          </p>
          <p className="text-white/90 mb-3 sm:mb-4 whitespace-nowrap">
            What started as a vision became the way the world works, connects, and thrives.
          </p>

          <div className="h-4 sm:h-6 mt-2" />

          <p className="mb-3 sm:mb-4">
            Now it&#39;s our turn.
          </p>
          <p className="mb-3 sm:mb-4">
            And we want you in it.
          </p>
          <p className="mb-3 sm:mb-4">
            Not as a customer,  as a fellow visionary.
          </p>
         

          <div className="h-4 sm:h-6 mt-4" />


          <p className="text-white/90 mb-3 sm:mb-4">
            Together, we&#39;re not just changing the way we live.
          </p>
          <p className="text-white/90 mb-3 sm:mb-4">
            We&#39;re creating something so big, it becomes <span className="italic">culture</span>.
          </p>
        </div>

        {/* Bottom wordmark */}
        <div className="pb-6 sm:pb-8 flex flex-col items-center relative z-40">
          <Image src="/NameLogo.png" alt="Name logo" width={160} height={48} priority />
          {/* CTA */}
          <Link 
            href="/home" 
            className="inline-flex items-center gap-3 text-white font-medium select-none rounded-full px-6 py-3 bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition cursor-pointer relative z-50"
            style={{ pointerEvents: 'auto' }}
          >
            I&#39;m in!
          </Link>
        </div>
        
        {/* Gradient transition at bottom of page */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1C1B1F] via-[#1C1B1F]/40 via-[#1C1B1F]/20 to-transparent h-48 z-10" />
      </div>
      {/* End of landing hero */}

    </section>
  );
}
