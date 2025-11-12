"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { GrSun } from "react-icons/gr";


const GALLERY = [
  { id: 1, title: "GREEN AREA", subtitle: "A calm garden space", img: "/room1.jpg" },
  { id: 2, title: "SEA VIEW", subtitle: "Breathtaking ocean views", img: "/room2.jpg" },
  { id: 3, title: "GARDEN SUITE", subtitle: "Luxury next to nature", img: "/room3.jpg" },
];

export default function Home() {
  const [active, setActive] = useState(0); // index of active card
  const AUTO_ADVANCE_MS = 5000;
  const timerRef = useRef(null);
  const progressKeyRef = useRef(0); // to reset animation when active changes

  useEffect(() => {
    startTimer();
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  function startTimer() {
    stopTimer();
    progressKeyRef.current += 1;
    timerRef.current = setTimeout(() => {
      setActive((p) => (p + 1) % GALLERY.length);
    }, AUTO_ADVANCE_MS);
  }

  function stopTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function goNext() {
    stopTimer();
    setActive((p) => (p + 1) % GALLERY.length);
  }

  return (
    <div className="bg-[#F3F1E9] min-h-screen text-[#1A2B1A] font-serif">
      {/* ===== Navbar ===== */}
      <nav className="flex justify-between items-center px-8 py-5">
        <div className="flex gap-8 text-[15px] font-light">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">EVENTS</a>
        </div>

        <div className="font-bold flex items-center gap-2 text-lg tracking-wide"> <GrSun size={20}/>LUXORT</div>

        <div className="flex items-center gap-6 text-[15px]">
          <span className="flex items-center gap-1">
            <TbWorld size={18} /> EN <span className="text-gray-500"><MdKeyboardArrowDown size={20} /></span>
          </span>
          <span>|</span>
          <span>+123 7564 8970</span>
          <button
            className="flex items-center gap-1 border-b-2 py-1 border-black hover:border-black transition"
            
          >
            LOGIN <MdOutlineArrowOutward size={18} />
          </button>
        </div>
      </nav>

      {/* ===== Offer Bar ===== */}
      <div className="bg-[#1A2B1A] text-white text-sm py-2 overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block"
        >
          <span className="mx-12">
            ✦ EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY!
          </span>
          <span className="mx-12">
            ✦ EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY!
          </span>
          <span className="mx-12">
            ✦ EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY!
          </span>
          <span className="mx-12">
            ✦ EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY!
          </span>
        </motion.div>
      </div>

      {/* ===== Hero Section ===== */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl leading-tight font-light">
            WELCOME TO <br />
            <span className="italic font-normal">LUXORT</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-gray-600 text-[15px] mb-8 leading-relaxed">
            Discover a world where luxury and comfort blend seamlessly,
            offering unforgettable experiences in a setting of elegance and
            tranquility.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#1A2B1A] text-white px-6 py-3 rounded-md hover:opacity-80 transition">
              BOOK YOUR STAY
            </button>
            <button className="border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-200 transition">
              EXPLORE OUR SUITES
            </button>
          </div>
        </motion.div>
      </section>

      {/* ===== Gallery Section ===== */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
      <div className="relative">
        {/* Horizontal flex container */}
        <div className="flex items-stretch justify-center gap-6">
          {GALLERY.map((item, i) => {
            const isActive = i === active;
            const cardScale = isActive ? 1 : 0.86;
            const z = isActive ? 20 : 10;
            const cardWidth = isActive ? 520 : 340;

            // Active = light gray, Inactive = dark gray
            const bgColor = isActive ? "bg-gray-300" : "bg-gray-600";
            const textColor = isActive ? "text-gray-800" : "text-white";

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: isActive ? 0 : 6,
                  scale: cardScale,
                  boxShadow: isActive
                    ? "0 20px 40px rgba(15,43,34,0.18)"
                    : "0 6px 16px rgba(15,43,34,0.06)",
                }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className={`rounded-lg overflow-hidden cursor-pointer relative ${bgColor}`}
                style={{
                  width: cardWidth,
                  zIndex: z,
                  minHeight: 260,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* image/color area */}
                <div
                  className={`flex-1 flex items-center justify-center ${bgColor}`}
                  style={{ minHeight: 160 }}
                >
                  <span className={`uppercase tracking-wider text-sm ${textColor}`}>
                    {item.title}
                  </span>
                </div>

                {/* bottom area */}
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
                          <div className="text-sm text-gray-500">0{i + 1}</div>
                          <div className="text-sm font-medium">{item.title}</div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            goNext();
                          }}
                          className="text-sm flex items-center gap-2"
                          aria-label="Next"
                        >
                          NEXT <FiArrowRight />
                        </button>
                      </div>

                      {/* progress bar */}
                      <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          key={`progress-${active}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: AUTO_ADVANCE_MS / 1000,
                            ease: "linear",
                          }}
                          className="h-full bg-[#1A2B1A]"
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`inactive-${item.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-white p-3"
                    >
                      <div className="text-sm text-gray-500">
                        0{i + 1} — {item.title}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom-right next button */}
        <div className="absolute right-4 bottom-6">
          <button
            onClick={goNext}
            className="bg-white/90 px-3 py-2 rounded shadow hover:bg-white transition"
            aria-label="Advance"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}
