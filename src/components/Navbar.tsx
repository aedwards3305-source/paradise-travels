"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-xl border-b border-navy-border shadow-lg shadow-navy/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Plane className="w-5 h-5 text-navy" />
            </div>
            <div className="tracking-wide">
              <span className="text-xl font-light text-gold uppercase tracking-[0.2em]">Paradise</span>
              <span className="text-xl font-light text-cream/60 uppercase tracking-[0.2em]">Travels</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-light"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="border border-gold/40 text-gold px-7 py-2.5 text-sm uppercase tracking-[0.15em] font-light hover:bg-gold hover:text-navy transition-all duration-500"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gold"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-xl border-t border-navy-border animate-fade-in">
          <div className="px-6 py-8 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-cream/60 hover:text-gold transition-colors py-3 text-sm uppercase tracking-[0.15em] font-light border-b border-navy-border/50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-center border border-gold/40 text-gold px-6 py-3 text-sm uppercase tracking-[0.15em] font-light mt-6 hover:bg-gold hover:text-navy transition-all duration-500"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
