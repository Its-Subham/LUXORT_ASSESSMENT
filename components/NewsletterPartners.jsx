"use client";

import { useId } from "react";

export default function NewsletterPartners() {
  const id = useId();

  const partners = [
    { id: 1, name: "Capsule", src: null },
    { id: 2, name: "Biosynthesis", src: null },
    { id: 3, name: "Galileo", src: null },
    { id: 4, name: "Spherule", src: null },
    { id: 5, name: "FocalPoint", src: null },
    { id: 6, name: "Nietzsche", src: null },
    { id: 7, name: "Galileo", src: null },
    { id: 8, name: "Capsule", src: null },
    { id: 5, name: "FocalPoint", src: null },
    { id: 6, name: "Nietzsche", src: null },
  ];

  // duplicate items for seamless marquee
  const duplicated = [...partners, ...partners];

  return (
    <div className="w-full">
      {/* Marquee: trusted partners */}
      <div className="bg-[#F5F3EC]">
        <div className="max-w-8xl mx-auto px-6 py-6 relative">
          <div className="text-center text-xs text-gray-500 tracking-wider">
            TRUSTED PARTNERS
          </div>

          {/* marquee wrapper */}
          <div className="mt-4 overflow-hidden">
            <div className="marquee-track will-change-transform">
              <div className="flex items-center gap-12">
                {duplicated.map((p, i) => (
                  <div
                    key={`${p.name}-${i}`}
                    className="flex items-center gap-3 opacity-80 select-none"
                    aria-hidden
                  >
                    {/* logo placeholder circle */}
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-700">
                      {p.name[0]}
                    </div>
                    <div className="text-sm text-gray-700 whitespace-nowrap">
                      {p.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter*/}
      <section className="bg-[#44504c] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* big serif-like heading */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-tight font-light tracking-wide uppercase"
            style={{ letterSpacing: "0.02em" }}
          >
            Get exclusive offers,
            <br />
            event updates, and insider news
          </h2>

          {/* email form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const email = form.elements.namedItem("email")?.value;
              // handle submission
              console.log("submit", email);
              form.reset();
            }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <input
              name="email"
              type="email"
              placeholder="Your email address..."
              required
              className="w-[420px] max-w-full px-4 py-3 rounded-md border border-white/30 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Email address"
            />

            <button
              type="submit"
              className="w-[240px] max-w-full bg-[#163726] hover:bg-[#0f2a1d] transition-all text-white px-4 py-3 rounded-md shadow-md"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>

      {/* Inline styles for marquee animation */}
      <style>{`
        :root { --marquee-speed: 18s; } /* lower = faster */

        /* marquee-track: we move the inner content left by 50% to loop seamlessly */
        .marquee-track {
          position: relative;
        }

        .marquee-track > div {
          display: inline-flex;
          align-items: center;
          gap: 3rem;
        }

        /* the animation moves the whole inner flex row left */
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* duplicated content -> -50% lands at equivalent start */
        }

        /* apply animation to the direct inner flex row */
        .marquee-track > div {
          animation: marqueeLeft linear infinite;
          animation-duration: var(--marquee-speed);
        }

        /* pause on hover */
        .marquee-track > div:hover {
          animation-play-state: paused;
        }

        /* accessibility: respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track > div { animation: none; }
        }
      `}</style>
    </div>
  );
}
