"use client";

import { useState } from "react";

export default function Highlights() {
  const tabs = [
    "SWIMMING POOL",
    "FINE DINING RESTAURANTS",
    "LUXURY ROOMS & SUITES",
    "SPA & WELLNESS",
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f5f3ec] py-10 px-4">
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        {/* Small header above title */}
        <p className="text-center text-xs tracking-widest text-gray-500 mb-4">
          HOTEL HIGHLIGHTS
        </p>

        {/* Main Title */}
        <h2 className="text-center text-4xl md:text-5xl font-light text-gray-800 mb-4">
          Experience the Extraordinary
        </h2>

        {/* Description */}
        <p className="text-center text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Experience elegance and comfort in our Luxury Rooms & Suites, where modern
          amenities and timeless design create the perfect retreat.
        </p>

        {/* Tabs */}
        <div className="relative">
          <div className="flex items-start justify-around  space-x-4 overflow-x-auto">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActive(i)}
                className={
                  "text-xs md:text-sm tracking-wider py-3 px-5 rounded-t-lg transition-all " +
                  (active === i
                    ? "bg-white shadow-md text-gray-800"
                    : "text-gray-500 hover:text-gray-700")
                }
                aria-pressed={active === i}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* large content area (the grey rounded box) */}
          <div className="">
            <div className="bg-gray-300 rounded-md h-82 md:h-96 border border-gray-200 shadow-inner p-6">
              
              <div className="w-full h-full flex items-center justify-center text-gray-700">
                <div className="text-center">
                  <p className="font-medium text-sm uppercase text-gray-600 mb-2">
                    {tabs[active]}
                  </p>
                  <div className="text-xs md:text-sm max-w-xl mx-auto">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end container */}
    </section>
  );
}
