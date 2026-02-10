"use client";

import { useState } from "react";
import { Send, CheckCircle, User, Mail, Phone, MessageSquare, Calendar } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: "2",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 animate-fade-in-up">
        <div className="w-20 h-20 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-teal-light" />
        </div>
        <h3 className="text-3xl font-light text-white mb-4">Thank You</h3>
        <p className="text-cream/40 text-lg font-light max-w-md mx-auto leading-relaxed">
          We&apos;ve received your inquiry. A travel expert will reach out within 24 hours to begin crafting your journey.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full pl-12 pr-4 py-4 bg-navy border border-navy-border text-white placeholder-cream/20 focus:outline-none focus:border-gold/40 transition-colors font-light tracking-wide";
  const selectClasses =
    "w-full px-4 py-4 bg-navy border border-navy-border text-white focus:outline-none focus:border-gold/40 transition-colors font-light";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-cream/40 text-xs uppercase tracking-[0.15em] mb-3 font-light">Full Name *</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/20" />
            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Smith" className={inputClasses} />
          </div>
        </div>
        <div>
          <label className="block text-cream/40 text-xs uppercase tracking-[0.15em] mb-3 font-light">Email *</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/20" />
            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputClasses} />
          </div>
        </div>
        <div>
          <label className="block text-cream/40 text-xs uppercase tracking-[0.15em] mb-3 font-light">Phone</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/20" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClasses} />
          </div>
        </div>
        <div>
          <label className="block text-cream/40 text-xs uppercase tracking-[0.15em] mb-3 font-light">Travel Date</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/20" />
            <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} className={inputClasses} />
          </div>
        </div>
        <div>
          <label className="block text-cream/40 text-xs uppercase tracking-[0.15em] mb-3 font-light">Destination</label>
          <select name="destination" value={formData.destination} onChange={handleChange} className={selectClasses}>
            <option value="">Select a destination</option>
            <option value="jamaica">Jamaica</option>
            <option value="bahamas">Bahamas</option>
            <option value="barbados">Barbados</option>
            <option value="stlucia">St. Lucia</option>
            <option value="cancun">Cancun</option>
            <option value="trinidad">Trinidad & Tobago</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
        <div>
          <label className="block text-cream/40 text-xs uppercase tracking-[0.15em] mb-3 font-light">Travelers</label>
          <select name="travelers" value={formData.travelers} onChange={handleChange} className={selectClasses}>
            <option value="1">1 Traveler</option>
            <option value="2">2 Travelers</option>
            <option value="3">3 Travelers</option>
            <option value="4">4 Travelers</option>
            <option value="5+">5+ Travelers</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-cream/40 text-xs uppercase tracking-[0.15em] mb-3 font-light">Budget Range</label>
        <select name="budget" value={formData.budget} onChange={handleChange} className={selectClasses}>
          <option value="">Select budget</option>
          <option value="under1000">Under $1,000 per person</option>
          <option value="1000-2000">$1,000 - $2,000 per person</option>
          <option value="2000-3000">$2,000 - $3,000 per person</option>
          <option value="3000+">$3,000+ per person</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      <div>
        <label className="block text-cream/40 text-xs uppercase tracking-[0.15em] mb-3 font-light">Your Dream Trip</label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-cream/20" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your ideal vacation..."
            className="w-full pl-12 pr-4 py-4 bg-navy border border-navy-border text-white placeholder-cream/20 focus:outline-none focus:border-gold/40 transition-colors font-light tracking-wide resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-3 bg-gold text-navy py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-all duration-500"
      >
        Send Inquiry
        <Send className="w-4 h-4" />
      </button>

      <p className="text-cream/15 text-xs text-center uppercase tracking-wider">
        We respond within 24 hours. No obligation.
      </p>
    </form>
  );
}
