"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-border to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <span className="text-teal text-xs uppercase tracking-[0.3em] font-light">Stay Connected</span>
        <h2 className="text-4xl sm:text-5xl font-light text-white mt-4 mb-6">
          Exclusive <span className="text-gradient-gold italic">Offers</span>
        </h2>
        <div className="line-accent-center" />
        <p className="text-cream/40 max-w-xl mx-auto text-lg font-light mt-6 mb-12 leading-relaxed">
          Be the first to know about flash sales, new destinations, and member-only travel deals.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-teal-light text-lg font-light animate-fade-in-up">
            <CheckCircle className="w-5 h-5" />
            <span>Welcome aboard. Check your inbox for a special offer.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-6 py-4 bg-navy-card border border-navy-border text-white placeholder-cream/25 focus:outline-none focus:border-gold/40 transition-colors font-light tracking-wide"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-all duration-500"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-cream/20 text-xs mt-8 uppercase tracking-wider">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
