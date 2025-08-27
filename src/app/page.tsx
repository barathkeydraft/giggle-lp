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
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between py-10">
        {/* Top logo */}
        <div className="pt-4">
          <Image src="/TopLogo.png" alt="Top logo" width={72} height={72} priority />
        </div>

        {/* Center copy with sequential typewriter effect aligned similar to reference */}
        <div className="px-6 w-full max-w-6xl text-center" style={{ lineHeight: '50px' }}>
          <p className="type-line text-xl sm:text-2xl md:text-3xl font-light text-white/90" style={{
            ['--tw-steps' as any]: 86,
            ['--tw-duration' as any]: '3.2s',
            ['--tw-delay' as any]: '0s',
          }}>
            Every part of the lifestyle we live started with just a handful of people;
          </p>
          <p className="type-line text-xl sm:text-2xl md:text-3xl font-light text-white/90" style={{
            ['--tw-steps' as any]: 58, ['--tw-duration' as any]: '2.4s', ['--tw-delay' as any]: '3.35s',
          }}>
            crazy enough to dream it, bold enough to try.
          </p>
          <p className="type-line text-xl sm:text-2xl md:text-3xl font-light text-white/90" style={{
            ['--tw-steps' as any]: 100, ['--tw-duration' as any]: '3.8s', ['--tw-delay' as any]: '6s',
          }}>
            What started as a vision became the way the world works, connects, and thrives.
          </p>

          <div className="h-6" />

          <p className="type-line text-2xl md:text-4xl font-light" style={{
            ['--tw-steps' as any]: 18, ['--tw-duration' as any]: '1.5s', ['--tw-delay' as any]: '10s',
          }}>
            Now it's our turn.
          </p>
          <p className="type-line text-2xl md:text-3xl font-light" style={{
            ['--tw-steps' as any]: 22, ['--tw-duration' as any]: '1.7s', ['--tw-delay' as any]: '11.7s',
          }}>
            And we want you in it.
          </p>
          <p className="type-line text-2xl md:text-3xl font-light" style={{
            ['--tw-steps' as any]: 41, ['--tw-duration' as any]: '2s', ['--tw-delay' as any]: '13.5s',
          }}>
            Not as a customer,  as a fellow visionary.
          </p>

          <div className="h-6" />

          <p className="type-line text-xl sm:text-2xl md:text-3xl font-light text-white/90" style={{
            ['--tw-steps' as any]: 52, ['--tw-duration' as any]: '2.4s', ['--tw-delay' as any]: '16s',
          }}>
            Together, we're not just changing the way we live.
          </p>
          <p className="type-line text-xl sm:text-2xl md:text-3xl font-light text-white/90" style={{
            ['--tw-steps' as any]: 54, ['--tw-duration' as any]: '2.6s', ['--tw-delay' as any]: '18.5s',
          }}>
            We're creating something so big, it becomes culture.
          </p>
        </div>

        {/* Bottom wordmark */}
        <div className="pb-8 flex flex-col items-center gap-4">
          <Image src="/NameLogo.png" alt="Name logo" width={160} height={48} priority />
          {/* CTA */}
          <a href="/home" className="scroll-indicator inline-flex items-center gap-3 text-white font-medium select-none rounded-full px-6 py-3 bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition">
            I'm in!
          </a>
        </div>
      </div>
      {/* End of landing hero */}

    </section>
  );
}
