import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      {/* Header with background image */}
      <div className="relative min-h-[40vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gradient.png"
            alt="Background"
            fill
            className="object-cover scale-100"
            priority
          />
          {/* Dark overlay for better text readability
            <div className="absolute inset-0 bg-black/30" /> */}
        </div>
        {/* Transparent, slimmer menu bar */}
        <div className="relative z-10 w-full px-0 pt-4">
          <div className="w-full rounded-[24px] border border-white/20 bg-white/12 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] flex items-center justify-between px-5 sm:px-8 py-2 entrance-slide-in-top">
            <div className="flex items-center gap-3">
              <Image src="/NameLogo.png" alt="giggle" width={110} height={32} className="entrance-scale-in entrance-stagger-1" />
            </div>
            <nav className="flex items-center gap-6 text-white/90">
              <a href="#about" className="rounded-full px-3 py-1.5 hover:bg-white/15 hover:text-white transition entrance-scale-in entrance-stagger-2">About</a>
              <a href="#contact" className="rounded-full px-3 py-1.5 hover:bg-white/15 hover:text-white transition entrance-scale-in entrance-stagger-3">Contact Us</a>
            </nav>
          </div>
        </div>

        {/* First section: copy + card stack right after menu */}
        <div className="relative z-10 mt-20 px-6 sm:px-10 pb-12">
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <div className="entrance-fade-in-left entrance-stagger-2">
              <h2 className="text-xl sm:text-3xl font-light leading-tight text-white/95 font-poppins">
                Work doesn&#39;t wait, neither should <span className="text-white">you</span>.
              </h2>
              <h2 className="mt-6 text-xl sm:text-3xl font-light leading-tight text-white/95 font-poppins">
                Welcome to <span className="font-semibold">giggle</span>, a unified place to
              </h2>
              <p className="mt-4 text-lg sm:text-3xl font-black tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)] font-poppins" style={{ marginLeft: '17rem', fontWeight: '700' }}>
                GET SH*T DONE
              </p>
              <p className="mt-8 text-lg text-white max-w-xl font-poppins italic " style={{ fontWeight: '500' }}>
                Find prospects, organize work, create teams; <br />all in a single place.
              </p>
                             <div className="text-center">
                 <a href="#contact" className="mt-10 inline-flex items-center rounded-[20px] bg-black hover:bg-black text-white px-8 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition entrance-scale-in entrance-stagger-4 font-poppins" style={{ fontWeight: '600', borderRadius: '35px' }}>
                   Join wait-list
                 </a>
               </div>
            </div>

            {/* Right card stack */}
            <div className="relative group entrance-fade-in-right entrance-stagger-3">
              <div className="relative rounded-[28px] bg-white/25 border border-white/30 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.35)] p-4 md:p-6 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_35px_80px_rgba(0,0,0,0.45)]">
                {/* Top dark bar */}
                <div className="h-14 rounded-[14px] bg-[#1f1b27] flex items-center gap-3 px-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6a5acd] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7f6df2] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#a092ff] inline-block" />
                </div>

                {/* Cards */}
                <div className="mt-4 space-y-4">
                  <div className="rounded-[14px] bg-white text-[#0f1231] shadow-[0_10px_25px_rgba(0,0,0,0.18)] flex items-center justify-between px-5 py-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] hover:-translate-y-1 cursor-pointer group/card entrance-scale-in entrance-stagger-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#e8e9ff] text-[#5b5bf1] font-bold transition-transform duration-300 group-hover/card:scale-110">📄</span>
                      <span className="font-medium font-poppins">Contract Signed</span>
                    </div>
                    <span className="text-sm text-black/50 font-poppins">2 days ago</span>
                  </div>
                  <div className="rounded-[14px] bg-white text-[#0f1231] shadow-[0_10px_25px_rgba(0,0,0,0.18)] flex items-center justify-between px-5 py-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] hover:-translate-y-1 cursor-pointer group/card entrance-scale-in entrance-stagger-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#fff1db] text-[#ff8f23] font-bold transition-transform duration-300 group-hover/card:scale-110">🧩</span>
                      <span className="font-medium font-poppins">Design Phase Started</span>
                    </div>
                    <span className="text-sm text-black/50 font-poppins">1 days ago</span>
                  </div>
                  <div className="rounded-[14px] bg-white text-[#0f1231] shadow-[0_10px_25px_rgba(0,0,0,0.18)] flex items-center justify-between px-5 py-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] hover:-translate-y-1 cursor-pointer group/card entrance-scale-in entrance-stagger-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#eef2ff] text-[#5960ff] font-bold transition-transform duration-300 group-hover/card:scale-110">⏲️</span>
                      <span className="font-medium font-poppins">Client Review Pending</span>
                    </div>
                    <span className="text-sm text-black/50 font-poppins" style={{ fontWeight: '400' }}>Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional spacing before fade transition */}
        <div className="h-24" />

        {/* Fade transition overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1C1B1F] to-transparent" />
      </div>

      {/* Pilot, Progress and Handover : Simplified */}
      <section className="bg-[#1C1B1F] text-white px-6 sm:px-10 py-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-center text-3xl sm:text-4xl font-semibold scroll-fade-in-up">
            Pilot, Progress and Handover :
            <br />
            <span className="inline-block mt-2">Simplified</span>
          </h3>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 text-center hover:bg-white/7 transition scroll-fade-in-up">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/endless-email.svg"
                  alt="Endless email threads"
                  width={100}
                  height={100}
                />
              </div>
              <h4 className="text-xl font-semibold">Endless email
                <br />threads & missed files</h4>
              <p className="mt-4 text-white/70 text-sm">Important project updates buried in cluttered inboxes</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 text-center hover:bg-white/7 transition scroll-fade-in-up">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/invoice.svg"
                  alt="Endless email threads"
                  width={100}
                  height={100}
                />
              </div>
              <h4 className="text-xl font-semibold">Disconnected invoicing
                <br />& payment status</h4>
              <p className="mt-4 text-white/70 text-sm">Chasing payments across multiple platforms and spreadsheets</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8 text-center hover:bg-white/7 transition scroll-fade-in-up">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/followup.svg"
                  alt="Manual follow-ups"
                  width={100}
                  height={100}
                />
              </div>
              <h4 className="text-xl font-semibold">Manual follow-ups
                <br />draining billable hours</h4>
              <p className="mt-4 text-white/70 text-sm">Time wasted on admin tasks instead of actual work</p>
            </div>
          </div>
        </div>
      </section>

      {/* One workspace—zero friction */}
      <section className="relative py-20 px-6 sm:px-10 overflow-hidden">
        {/* Same background image as header */}
        <div className="absolute inset-0">
          <Image
            src="/gradient.png"
            alt="Background"
            fill
            className="object-cover scale-125"
            priority
          />
          {/* Dark overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-black/30" /> */}
        </div>
        {/* <div className="absolute -inset-[25%] blur-3xl animate-gradientMove bg-[radial-gradient(80rem_60rem_at_15%_20%,rgba(255,154,158,0.55)_0%,transparent_50%),radial-gradient(70rem_50rem_at_80%_25%,rgba(184,134,255,0.55)_0%,transparent_48%),radial-gradient(60rem_48rem_at_35%_85%,rgba(105,179,255,0.55)_0%,transparent_52%),radial-gradient(70rem_60rem_at_90%_75%,rgba(253,230,138,0.45)_0%,transparent_50%)]" /> */}

        <div className="relative z-10">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 scroll-fade-in-up font-poppins" style={{ fontWeight: '700' }}>
              One workspace—zero friction
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Contract-to-Cash */}
              <div className="text-center scroll-fade-in-up">
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/contract-agreement.svg"
                    alt="Contract-to-Cash"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-poppins">
                  Contract-to-Cash in a click
                </h3>
                <p className="text-white/80 text-lg font-poppins" style={{ fontWeight: '500' }}>
                  Auto-generated agreements + Stripe billing integration for seamless payments
                </p>
              </div>

              {/* Live project timeline */}
              <div className="text-center scroll-fade-in-up">
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/project-timeline.svg"
                    alt="Live project timeline"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-poppins">
                  Live project timeline
                </h3>
                <p className="text-white/80 text-lg font-poppins">
                  Tasks, revisions, approvals in Kanban view with real-time updates
                </p>
              </div>

              {/* Smart nudges */}
              <div className="text-center scroll-fade-in-up">
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/smart-nudges.svg"
                    alt="Smart nudges"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-poppins">
                  Smart nudges
                </h3>
                <p className="text-white/80 text-lg font-poppins">
                  Remind clients to review & pay on time with automated follow-ups
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient transition to white section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/60 to-white" />
      </section>

      {/* Built by a team that has walked the talk */}
      <section className="bg-white text-black px-6 sm:px-10 py-20 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl sm:text-5xl font-bold mb-16 scroll-fade-in-up">
            Built by a team that has walked the talk
          </h2>

          {/* Comparison box */}
          <div className="rounded-3xl overflow-hidden shadow-2xl scroll-fade-in-up">
            <div className="grid md:grid-cols-2">
              {/* Left: Pieced-together toolchain */}
              <div className="bg-white p-12 group">
                <h3 className="text-2xl font-bold mb-8 animate-fade-in-up stagger-3">Pieced-together toolchain</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up stagger-4 group/item">
                    <span className="text-gray-700">Email + Google Drive</span>
                    <span className="text-red-500 text-xl group-hover/item:scale-125 transition-transform duration-300">✕</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up stagger-5 group/item">
                    <span className="text-gray-700">Separate invoicing tool</span>
                    <span className="text-red-500 text-xl group-hover/item:scale-125 transition-transform duration-300">✕</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up stagger-6 group/item">
                    <span className="text-gray-700">Manual payment tracking</span>
                    <span className="text-red-500 text-xl group-hover/item:scale-125 transition-transform duration-300">✕</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up stagger-7 group/item">
                    <span className="text-gray-700">Scattered communication</span>
                    <span className="text-red-500 text-xl group-hover/item:scale-125 transition-transform duration-300">✕</span>
                  </div>
                </div>
              </div>

              {/* Right: BridgeWork Platform */}
              <div className="bg-black text-white p-12 group">
                <h3 className="text-2xl font-bold mb-8 animate-fade-in-up stagger-3">BridgeWork Platform</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-gray-200 rounded-lg px-4 py-3 hover:bg-gray-300 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up stagger-4 group/item">
                    <span className="text-gray-800">Unified file management</span>
                    <span className="text-green-500 text-xl group-hover/item:scale-125 transition-transform duration-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-200 rounded-lg px-4 py-3 hover:bg-gray-300 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up stagger-5 group/item">
                    <span className="text-gray-800">Integrated billing system</span>
                    <span className="text-green-500 text-xl group-hover/item:scale-125 transition-transform duration-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-200 rounded-lg px-4 py-3 hover:bg-gray-300 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up stagger-6 group/item">
                    <span className="text-gray-800">Automated payment flows</span>
                    <span className="text-green-500 text-xl group-hover/item:scale-125 transition-transform duration-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-200 rounded-lg px-4 py-3 hover:bg-gray-300 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up stagger-7 group/item">
                    <span className="text-gray-800">Centralized messaging</span>
                    <span className="text-green-500 text-xl group-hover/item:scale-125 transition-transform duration-300">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Be first in line—get 3 months free & shape the roadmap */}
      <section className="bg-black text-white px-6 sm:px-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 scroll-fade-in-up font-poppins">
            Early bird gets the worm; join the waitlist now and get exclusive early access.
          </h2>

          {/* Waitlist form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl scroll-fade-in-up">
            <form className="space-y-6">
              {/* Name and Email inputs */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 font-poppins text-black rounded-lg bg-gray-100 border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:bg-gray-200 animate-fade-in-up stagger-3"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-4 py-3 font-poppins text-black rounded-lg bg-gray-100 border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:bg-gray-200 animate-fade-in-up stagger-4"
                />
              </div>

              {/* Looking for selection */}
              <div className="flex items-center justify-center gap-8 animate-fade-in-up stagger-5">
                <span className="text-gray-700 font-medium font-poppins">Looking for :</span>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="looking-for"
                      value="to-work"
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 font-poppins">to work</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="looking-for"
                      value="to-hire"
                      defaultChecked
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 font-poppins">to hire</span>
                  </label>
                </div>
              </div>

              {/* Join waitlist button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up stagger-6 font-poppins"
              >
                Join wait-list
              </button>

              {/* Social proof */}
              <p className="text-gray-500 text-sm mt-4 animate-fade-in-up stagger-7 font-poppins">
                2,147 professionals already joined
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1B1F] text-white px-6 sm:px-10 py-0" style={{ backgroundImage: 'url(/gradient.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Left: Brand wordmark */}
            <div >
              <Image src="/NameLogo.png" alt="giggle" width={160} height={48} />
              <p className="text-white/80 text-sm max-w-xs -mt-4 mb-8 font-neue-montreal">
                The all-in-one platform that transforms chaotic team relationships into streamlined partnerships with clear communication, transparent progress tracking, and seamless collaboration.
              </p>
            </div>

            {/* Center: About, Contact, Email */}
            <div className="space-y-4 text-center">
              <a href="#about" className="block text-white hover:text-white/80 transition-colors duration-300 text-xl font-medium">
                About
              </a>
              <a href="#contact" className="block text-white hover:text-white/80 transition-colors duration-300 text-xl font-medium">
                Contact Us
              </a>
              <a href="mailto:gogo@giggle.global" className="block text-white hover:text-white/80 transition-colors duration-300 text-xl font-medium">
                Email: gogo@giggle.global
              </a>
            </div>

            {/* Right: GET SH*T DONE
            <div className="text-center md:text-right">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                GET SH*T DONE
              </h2>
            </div> */}
          </div>
        </div>
      </footer>

      {/* Scroll animation script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Handle scroll-triggered animations
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };
              
              const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    // Add 'active' class to trigger scroll animations
                    if (entry.target.classList.contains('scroll-fade-in-up') ||
                        entry.target.classList.contains('scroll-fade-in-left') ||
                        entry.target.classList.contains('scroll-fade-in-right') ||
                        entry.target.classList.contains('scroll-scale-in')) {
                      entry.target.classList.add('active');
                    }
                  }
                });
              }, observerOptions);
              
              // Observe all elements with scroll animation classes
              document.querySelectorAll('.scroll-fade-in-up, .scroll-fade-in-left, .scroll-fade-in-right, .scroll-scale-in').forEach(el => {
                observer.observe(el);
              });
              
              console.log('Scroll animations ready - elements will animate when they come into view');
            });
          `
        }}
      />
    </main>
  );
}


