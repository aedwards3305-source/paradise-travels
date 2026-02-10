"use client";

import Link from "next/link";
import { ArrowRight, Star, MapPin, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient — navy with subtle warm tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/40" />

      {/* Bottom fade to seamlessly blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="animate-fade-in-up mb-8" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <span className="inline-block text-gold/80 text-sm uppercase tracking-[0.3em] font-light border-l-2 border-gold/40 pl-4">
              Luxury Caribbean Experiences
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl sm:text-6xl lg:text-8xl font-light text-white leading-[1.1] mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Where Every
            <br />
            <span className="text-gradient-gold font-normal italic">Journey</span> Becomes
            <br />
            a Story
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-cream/50 font-light max-w-xl leading-relaxed mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            Hand-crafted travel experiences across the Caribbean&apos;s most breathtaking destinations.
            Your adventure, designed with intention.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-5 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-3 bg-gold text-navy px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-all duration-500 group"
            >
              Explore Packages
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center gap-3 border border-cream/20 text-cream/80 px-10 py-4 text-sm uppercase tracking-[0.15em] font-light hover:border-gold/40 hover:text-gold transition-all duration-500"
            >
              View Destinations
            </Link>
          </div>

          {/* Floating stats bar */}
          <div
            className="glass rounded-2xl px-8 py-6 inline-flex flex-wrap gap-8 sm:gap-12 animate-fade-in-up"
            style={{ animationDelay: "1s", opacity: 0 }}
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-teal-light" />
              <div>
                <p className="text-white font-medium text-lg">50+</p>
                <p className="text-cream/40 text-xs uppercase tracking-wider">Destinations</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-gold" />
              <div>
                <p className="text-white font-medium text-lg">4.9/5</p>
                <p className="text-cream/40 text-xs uppercase tracking-wider">Guest Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-teal-light" />
              <div>
                <p className="text-white font-medium text-lg">12+ Years</p>
                <p className="text-cream/40 text-xs uppercase tracking-wider">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.5s", opacity: 0 }}>
        <span className="text-cream/30 text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
      </div>
    </section>
  );
}
