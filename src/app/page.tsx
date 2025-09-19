export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f7f3] text-black font-serif">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 border border-black rounded-full flex items-center justify-center cursor-pointer">
            {/* This circle will become your menu trigger later */}
          </div>
          <h1 className="text-5xl font-bold">.kay</h1>
        </div>
        <p className="mt-2 text-gray-600 italic">fragments of chaos, framed</p>
      </section>

      {/* Invitation */}
      <section className="py-24 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">invitation</h2>
        <p className="mb-3">
          patterns arrive like breath, unplanned and instinctive.
        </p>
        <p className="mb-3">
          a single line unfolds into rhythm, into tension between chaos and order.
        </p>
        <p>
          each work hardens accident into geometry — fragments of chaos framed
          into permanence.
        </p>
        <a href="#works" className="inline-block mt-6 underline">
          explore →
        </a>
      </section>

      {/* Works (accordion/gallery will come later) */}
      <section id="works" className="py-16">
        <h2 className="text-2xl font-bold text-center mb-12">works</h2>
        <div className="flex justify-center space-x-4 px-4">
          {/* Placeholder stripes */}
          <div className="w-24 h-48 bg-red-200"></div>
          <div className="w-24 h-48 bg-yellow-300"></div>
          <div className="w-24 h-48 bg-purple-400"></div>
          <div className="w-24 h-48 bg-red-500"></div>
          <div className="w-24 h-48 bg-gray-300"></div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">manifesto</h2>
        <p className="mb-3">i draw to understand.</p>
        <p className="mb-3">to map the unplanned.</p>
        <p>to find form in the noise.</p>
        <a href="#editions" className="inline-block mt-6 underline">
          read →
        </a>
      </section>

      {/* Editions */}
      <section id="editions" className="py-24 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">editions</h2>
        <p className="mb-3">finite, archival, never reissued.</p>
        <p className="mb-3">signed verso, numbered by hand.</p>
        <p>certificate of authenticity, private ledger with opt-in public register.</p>
        <a href="#process" className="inline-block mt-6 underline">
          view →
        </a>
      </section>

      {/* Process */}
      <section id="process" className="py-24 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">process</h2>
        <p className="mb-3">accident becomes rhythm.</p>
        <p className="mb-3">repetition becomes surface.</p>
        <p>the surface is the art.</p>
        <a href="#" className="inline-block mt-6 underline">
          learn →
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        o.kay — a happy accident
      </footer>
    </main>
  );
}
