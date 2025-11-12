"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const FAQ = [
    {
      q: "What are the check-in and check-out times?",
      a: "Our check-in time is from 3:00 PM & check-out is until 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.",
    },
    {
      q: "Does the hotel offer airport transportation?",
      a: "Yes — we offer airport shuttle services on request. Charges may apply depending on distance and time. Please contact the front desk to arrange transportation.",
    },
    {
      q: "Does the hotel have dining options?",
      a: "We have multiple dining options including an all-day dining restaurant, a fine dining option, and 24/7 room service for in-room dining.",
    },
    {
      q: "Do you host weddings or special events?",
      a: "Yes. We host weddings, corporate events, and private celebrations with tailored packages and dedicated event planners to ensure every detail is perfect.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section className="bg-[#f5f3ec] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-xs tracking-widest text-gray-500 mb-6">FAQ</p>

        <h2 className="text-center text-3xl md:text-4xl font-light text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {FAQ.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <div
                key={i}
                className="bg-white rounded-md shadow-sm overflow-hidden border border-transparent"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm md:text-base text-gray-800 ${isOpen ? "font-medium" : "font-normal"}`}>
                    {item.q}
                  </span>

                  {/* chevron */}
                  <span
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-gray-600" : "rotate-0 text-gray-400"
                    }`}
                    aria-hidden
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                {/* content area */}
                <div
                  ref={(el) => (contentRefs.current[i] = el)}
                  style={{
                    maxHeight: isOpen
                      ? `${contentRefs.current[i]?.scrollHeight ?? 0}px`
                      : "0px",
                    transition: "max-height 350ms ease, opacity 250ms ease",
                    opacity: isOpen ? 1 : 0,
                  }}
                  className="px-6 overflow-hidden"
                >
                  <div className="py-4 text-sm text-gray-600">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

