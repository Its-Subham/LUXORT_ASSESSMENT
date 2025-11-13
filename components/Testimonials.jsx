"use client";

import React from "react";

const TESTIMONIALS = [
  { id: 1, name: "Jerome Bell", country: "Israel", text: "Luxort is pure perfection. From the stunning décor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!" },
  { id: 2, name: "Savannah Nguyen", country: "Poland", text: "My stay was wonderful! The staff was kind, the room was spotless, and the overall experience felt luxurious yet warm and welcoming." },
  { id: 3, name: "Ronald Richards", country: "Guinea", text: "Every corner of the hotel radiates comfort and sophistication. The food, the service, everything was simply perfect!" },
  { id: 4, name: "Courtney Henry", country: "Monaco", text: "A truly memorable experience. The view, the ambiance, and the atmosphere were beyond expectations. Highly recommend to anyone looking for a luxury retreat." },
  { id: 5, name: "Arlene McCoy", country: "Saint Barthélemy", text: "The hotel team goes above and beyond to make your stay magical. Every moment felt personal and unforgettable." },
  { id: 6, name: "Eleanor Pena", country: "Sao Tome and Principe", text: "Elegant interiors, warm hospitality, and a touch of perfection in every detail. I’m already planning my next visit!" },
];

export default function TestimonialsMarquee() {
  const duplicated = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-[#F5F3EC] py-20 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-start relative z-10 items-center">
        {/* Left heading column */}
        <div className="col-span-12 lg:col-span-4 ">
          <p className="text-xs tracking-widest text-gray-500 mb-6 border-l-2 border-black pl-3">TESTIMONIALS</p>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-800 leading-tight mb-6">
            What Our Guests Say
          </h2>
          <p className="text-sm text-gray-600 mb-8 max-w-md">
            Exceptional Experiences, Shared by Those Who've Lived Them.
          </p>
          <button className="inline-block bg-luxort-btnGreen text-white px-6 py-3 rounded shadow-lg text-sm tracking-wide hover:bg-[#0f2a1d] transition-all">
            READ MORE TESTIMONIALS
          </button>
        </div>

        {/* Right columns */}
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Fading overlays (soft blur effect) */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F5F3EC] to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F5F3EC] to-transparent" />
            </div>

            {/* Left column – upward scroll */}
            <div className="overflow-hidden h-[700px] relative">
              <div className="marquee-up will-change-transform">
                {duplicated.map((t, idx) => (
                  <article
                    key={`up-${idx}`}
                    className="bg-white rounded-md p-5 shadow-sm mb-6 last:mb-0"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300" />
                      <div>
                        <div className="text-sm font-medium text-gray-800">{t.name}</div>
                        <div className="text-xs text-gray-400">{t.country}</div>
                      </div>
                    </div>
                    <p className="text-[15px] text-gray-700 leading-relaxed">{t.text}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Right column – downward scroll */}
            <div className="overflow-hidden h-[700px] relative">
              <div className="marquee-down will-change-transform">
                {duplicated.map((t, idx) => (
                  <article
                    key={`down-${idx}`}
                    className="bg-white rounded-md p-5 shadow-sm mb-6 last:mb-0"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300" />
                      <div>
                        <div className="text-sm font-medium text-gray-800">{t.name}</div>
                        <div className="text-xs text-gray-400">{t.country}</div>
                      </div>
                    </div>
                    <p className="text-[15px] text-gray-700 leading-relaxed">{t.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        :root { --speed: 22s; } /* adjust for slower/faster scroll */

        .marquee-up, .marquee-down {
          display: flex;
          flex-direction: column;
        }

        @keyframes scrollUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }

        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }

        .marquee-up {
          animation: scrollUp linear infinite;
          animation-duration: var(--speed);
        }
        .marquee-down {
          animation: scrollDown linear infinite;
          animation-duration: var(--speed);
        }

        .marquee-up:hover,
        .marquee-down:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-up, .marquee-down { animation: none; }
        }
      `}</style>
    </section>
  );
}
