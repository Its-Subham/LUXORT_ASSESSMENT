// components/Footer.jsx
"use client";

import Link from "next/link";
import { GrSun } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="bg-[#0f2a22] text-[#cfe3d8]">
      {/* main content */}
      <div className="max-w-7xl mx-auto px- py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* left: logo + description (spans 6 on lg) */}
          <div className="lg:col-span-6">
            <div className="flex items-start gap-4">
              {/* Logo placeholder: replace with <Image /> or svg */}
              <div className="w-12 h-12 rounded-full  flex items-center justify-center shrink-0">
                <GrSun size={40} className="text-white" />
              </div>

              <div>
                <div className="text-xl font-semibold text-white tracking-wide">LUXORT</div>
                <p className="mt-3 text-sm text-[#bfcfc6] max-w-md">
                  Luxort combines timeless elegance with modern luxury, offering unparalleled comfort
                  and unforgettable experiences.
                </p>
              </div>
            </div>
          </div>

          {/* right: two columns (Quick Links, Social Media) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-0 justify-end">
              {/* Quick Links */}
              <div>
                <h4 className="text-sm text-[#d7e8df] mb-4 font-medium">Quick Links</h4>
                <ul className="space-y-3 text-sm text-[#bfcfc6]">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                  </li>
                  <li>
                    <Link href="/events" className="hover:text-white transition-colors">Events</Link>
                  </li>
                  <li>
                    <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-sm text-[#d7e8df] mb-4 font-medium">Social Media</h4>
                <ul className="space-y-3 text-sm text-[#bfcfc6]">
                  <li>
                    <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">X</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">Facebook</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* thin divider */}
      <div className="border-t border-white/20" />

      {/* bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-[#9fb1a8]">
        <div className="mb-3 md:mb-0">
          <span>© {new Date().getFullYear()} Luxort, All Right Reserved</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
