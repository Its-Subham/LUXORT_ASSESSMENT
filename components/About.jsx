"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const AUTO_ADVANCE_MS = 4000;
  const [currentSlide, setCurrentSlide] = useState(0);
  const progressKeyRef = useRef(0);
  const timerRef = useRef(null);

  const slides = [
    { id: 1, label: "COMFY AREA" },
    { id: 2, label: "DINING SPACE" },
    { id: 3, label: "WELLNESS CENTER" },
  ];

  const goTo = (index) => {
    const next = ((index % slides.length) + slides.length) % slides.length;
    setCurrentSlide(next);
    progressKeyRef.current += 1;
  };

  const nextSlide = () => goTo(currentSlide + 1);
  const prevSlide = () => goTo(currentSlide - 1);

  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const handleManualGo = (index) => {
    clearTimeout(timerRef.current);
    goTo(index);
  };

  return (
    <div className="min-h-screen bg-[#E8E4DC]">
      {/* container is relative so absolute elements (if any later) are scoped */}
      <div className="max-w-[1200px] mx-auto relative">
        {/* TOP-LEFT LABEL on large screens, stacked on mobile */}
        <div className="hidden lg:block absolute left-10 top-10">
          <div className="inline-flex items-center gap-3">
            <span className="text-xs tracking-widest text-gray-700 border-l-2 border-black pl-3">ABOUT LUXORT</span>
          </div>
        </div>


        {/* MAIN ROW */}
        <div className="flex pt-24 lg:pt-12">
          {/* LEFT column */}
          <aside className="hidden lg:block w-2/5 pl-10 pb-16">
            {/* bottom-left aligned block: we'll place it using flex-col and justify-between */}
            <div className="flex flex-col h-[calc(100vh-120px)] justify-end"> 
              <div className="max-w-xs">
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  Luxort is where elegance meets comfort, creating unforgettable moments with every
                  stay. Welcome to your perfect escape.
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <div className="w-14 h-14 rounded-full bg-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Roberto Pollye</p>
                    <p className="text-xs text-gray-600">Founder of Luxort</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right column (main content + carousel) */}
          <main className="w-full lg:w-3/5 px-8 py-8 lg:pl-12 flex flex-col justify-between">
            {/* Headline & description */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4">
                Where Timeless Elegance Meets Exceptional Comfort and Unforgettable Experiences in
                Luxury Hospitality
              </h1>

              <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                At Luxort, we redefine the meaning of luxury hospitality; our hotel offers a seamless
                blend of classic sophistication and modern comfort, providing guests with an
                unparalleled experience.
              </p>
            </div>

            {/* Carousel area */}
            <div className="relative">
              {/* Cards row */}
              <div className="flex items-start gap-6">
                {/* central big card */}
                <div className="flex-1 rounded-md overflow-hidden bg-white">
                  {/* image area */}
                  <div className={`w-full h-64 ${"bg-gray-300"}`} />

                  {/* footer inside card */}
                  <div className="bg-white p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-gray-500">{`0${slides[currentSlide].id}`}</div>
                        <div className="text-sm font-medium text-gray-900">
                          {slides[currentSlide].label}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          clearTimeout(timerRef.current);
                          nextSlide();
                        }}
                        className="flex items-center gap-2 text-sm text-gray-900 hover:text-gray-600 transition-colors"
                        aria-label="Next slide"
                      >
                        NEXT <ArrowRight size={14} />
                      </button>
                    </div>

                    {/* progress inside card */}
                    <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        key={progressKeyRef.current}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: AUTO_ADVANCE_MS / 1000,
                          ease: "linear",
                        }}
                        className="h-full bg-[#1A2B1A]"
                      />
                    </div>
                  </div>
                </div>

                {/* right peeking card */}
                <div className="hidden lg:block w-48 h-64 rounded-md bg-gray-600" />
              </div>

              {/* Controls row: left arrow - dots - right arrow */}
              <div className="mt-6 flex items-center justify-center gap-6">
                {/* left arrow */}
                <button
                  onClick={() => {
                    clearTimeout(timerRef.current);
                    prevSlide();
                  }}
                  className="w-10 h-10 rounded-full  flex items-center justify-center"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} className="text-gray-900" />
                </button>

                {/* dots centered */}
                <div className="flex items-center gap-3">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleManualGo(idx)}
                      className={`h-0.5 transition-all ${idx === currentSlide ? "w-12 bg-gray-900" : "w-6 bg-gray-400"}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* right arrow */}
                <button
                  onClick={() => {
                    clearTimeout(timerRef.current);
                    nextSlide();
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center "
                  aria-label="Next"
                >
                  <ChevronRight size={20} className="text-gray-900" />
                </button>
              </div>
            </div>
          </main>
        </div>

        {/* Mobile: left content stacked below top label for small screens */}
        <div className="lg:hidden px-8 pb-12">
          <div className="mt-6">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Luxort is where elegance meets comfort, creating unforgettable moments with every
              stay. Welcome to your perfect escape.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">Roberto Pollye</p>
                <p className="text-xs text-gray-600">Founder of Luxort</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
