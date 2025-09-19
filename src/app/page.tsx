"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close when clicking outside the rings
  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) setMenuOpen(false);
  };

  // Close when a menu link is chosen
  const onChoose = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#f9f7f3] text-black font-serif">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center min-h-screen relative">
        <div className="flex items-center gap-3 select-none">
          {/* DOT = MENU TRIGGER */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`hero-dot ${menuOpen ? "ring" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
          />
          <h1 className="text-5xl md:text-6xl font-extrabold leading-none">.kay</h1>
        </div>
        <p className="mt-2 text-gray-600 italic text-sm md:text-base tracking-wide">
          fragments of chaos, framed
        </p>

        {/* RADIAL MENU OVERLAY */}
        {menuOpen && (
          <div
            ref={backdropRef}
            onClick={onBackdropClick}
            className="radial-wrap"
            aria-modal="true"
            role="dialog"
          >
            {/* Concentric rings */}
            <div className="ring ring-3" />
            <div className="ring ring-2" />
            <div className="ring ring-1">
              <nav className="radial-items">
                <a href="#works" onClick={onChoose}>
                  works
                </a>
                <a href="#manifesto" onClick={onChoose}>
                  manifesto
                </a>
                <a href="#editions" onClick={onChoose}>
                  editions
                </a>
                <a href="#process" onClick={onChoose}>
                  about
                </a>
              </nav>
            </div>
          </div>
        )}
      </section>

      {/* INVITATION */}
      <section className="py-24 text-center max-w-3xl mx-auto">
        <h2 className="h2">invitation</h2>
        <p className="para">patterns arrive like breath, unplanned and instinctive.</p>
        <p className="para">
          a single line unfolds into rhythm, into tension between chaos and order.
        </p>
        <p className="para">
          each work hardens accident into geometry — fragments of chaos framed into
          permanence.
        </p>
        <a href="#works" className="cta">
          explore <span className="arrow">→</span>
        </a>
      </section>

      {/* WORKS (accordion gallery comes later) */}
      <section id="works" className="py-16">
        <h2 className="h2 text-center mb-10">works</h2>
        <div className="flex justify-center gap-4 px-4">
          <div className="w-24 h-48 bg-red-200" />
          <div className="w-24 h-48 bg-yellow-300" />
          <div className="w-24 h-48 bg-purple-400" />
          <div className="w-24 h-48 bg-red-500" />
          <div className="w-24 h-48 bg-gray-300" />
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="py-24 text-center max-w-xl mx-auto">
        <h2 className="h2">manifesto</h2>
        <p className="para">i draw to understand.</p>
        <p className="para">to map the unplanned.</p>
        <p className="para">to find form in the noise.</p>
        <a href="#editions" className="cta">
          read <span className="arrow">→</span>
        </a>
      </section>

      {/* EDITIONS */}
      <section id="editions" className="py-24 text-center max-w-2xl mx-auto">
        <h2 className="h2">editions</h2>
        <p className="para">finite, archival, never reissued.</p>
        <p className="para">signed verso, numbered by hand.</p>
        <p className="para">
          certificate of authenticity, private ledger with opt-in public register.
        </p>
        <a href="#process" className="cta">
          view <span className="arrow">→</span>
        </a>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 max-w-2xl mx-auto">
        <h2 className="h2">process</h2>
        <p className="para">accident becomes rhythm.</p>
        <p className="para">repetition becomes surface.</p>
        <p className="para">the surface is the art.</p>
        <a href="#top" className="cta">
          learn <span className="arrow">→</span>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        o.kay — a happy accident
      </footer>
    </main>
  );
}
