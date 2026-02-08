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
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-green/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-green font-semibold text-sm uppercase tracking-widest">Stay Connected</span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
          Get Exclusive <span className="text-gradient-gold">Deals</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg mb-10">
          Subscribe to our newsletter and be the first to know about flash sales, new destinations, and exclusive member-only offers.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-green text-lg font-semibold animate-fade-in-up">
            <CheckCircle className="w-6 h-6" />
            <span>Welcome aboard! Check your inbox for a special welcome offer.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-6 py-4 rounded-full bg-dark-card border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-dark px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-gold/30 transition-all hover:-translate-y-0.5"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-gray-600 text-sm mt-6">No spam, unsubscribe anytime. We respect your privacy.</p>
      </div>
    </section>
  );
}
