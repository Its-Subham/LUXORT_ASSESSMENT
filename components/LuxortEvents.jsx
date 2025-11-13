"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LuxortEvents() {
  const AUTO_ADVANCE_MS = 4000; // milliseconds per slide 

  const [currentSlide, setCurrentSlide] = useState(0);

  // simplified events array (no image nodes)
  const events = [
    { id: 1, label: "WEDDINGS" },
    { id: 2, label: "CORPORATE EVENTS" },
    { id: 3, label: "PRIVATE CELEBRATIONS" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  // Auto-advance when the timer ends. Clearing and restarting on slide change.
  useEffect(() => {
    const t = setTimeout(() => {
      nextSlide();
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(t);
  }, [currentSlide]);

  // keyboard left/right navigation (optional)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen px-12 py-16">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-sm tracking-widest text-gray-700 mb-8 border-l-2 border-black pl-3">
          UNFORGETTABLE EVENTS AT LUXORT
        </h2>

        <div className="max-w-2xl">
          <h1 className="text-5xl leading-tight text-gray-900 mb-6 font-light">
            Celebrate Life's Finest Moments in Style and Elegance
          </h1>

          <p className="text-sm text-gray-600 leading-relaxed">
            At Luxort, we create extraordinary settings for unforgettable events. Whether you're
            planning an intimate gathering or a grand celebration.
          </p>
        </div>
      </div>

      {/* Carousel / Cards */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="relative">
          <div className="flex items-stretch justify-center gap-6">
            {events.map((item, i) => {
              const isActive = i === currentSlide;
              const cardScale = isActive ? 1 : 0.86;
              const zIndex = isActive ? 20 : 10;
              const cardWidth = isActive ? 520 : 340;

              const imageBgClass = isActive ? "bg-luxort-activeContainer" : "bg-luxort-darkgreen bg-opacity-[40%]";
              // labelColor won't matter for inactive because label isn't rendered
              const labelColor = isActive ? "text-gray-700" : "text-white";

              return (
                <motion.div
                  key={item.id}
                  layout
                  onClick={() => {
                    if (!isActive) setCurrentSlide(i);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: isActive ? 0 : 6,
                    scale: cardScale,
                    boxShadow: isActive
                      ? "0 20px 40px rgba(15,43,34,0.18)"
                      : "0 6px 16px rgba(15,43,34,0.06)",
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="rounded-lg overflow-hidden cursor-pointer relative"
                  style={{
                    width: cardWidth,
                    zIndex,
                    minHeight: 260,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* colored "image" area */}
                  <div
                    className={`${imageBgClass} flex-1 flex items-center justify-center relative`}
                    style={{ minHeight: 160 }}
                  >
                    

                    {/* Progress bar moved INSIDE image area and shows only for active */}
                    {isActive && (
                      <div className="absolute bottom-3 left-3 right-3 h-2 rounded bg-gray-200 overflow-hidden">
                        <motion.div
                          key={`progress-${currentSlide}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                          className="h-full bg-[#FFFFFF]"
                        />
                      </div>
                    )}
                  </div>

                  {/* bottom area: render only for active (inactive -> nothing) */}
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key={`active-${item.id}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-sm text-gray-500">{`0${i + 1}`}</div>
                            <div className="text-sm font-medium">{item.label}</div>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextSlide();
                            }}
                            className="text-sm flex items-center gap-2"
                            aria-label="Next"
                          >
                            NEXT <ArrowRight size={16} />
                          </button>
                        </div>

                        {/* progress removed from here (it's inside image now) */}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
