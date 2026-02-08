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
        <div className="w-20 h-20 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          We&apos;ve received your inquiry. One of our travel experts will reach out within 24 hours to start planning your dream vacation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Full Name *</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Email Address *</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Travel Date */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Preferred Travel Date</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Destination */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Desired Destination</label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl bg-dark border border-dark-border text-white focus:outline-none focus:border-gold transition-colors"
          >
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

        {/* Number of Travelers */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Number of Travelers</label>
          <select
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl bg-dark border border-dark-border text-white focus:outline-none focus:border-gold transition-colors"
          >
            <option value="1">1 Traveler</option>
            <option value="2">2 Travelers</option>
            <option value="3">3 Travelers</option>
            <option value="4">4 Travelers</option>
            <option value="5+">5+ Travelers</option>
          </select>
        </div>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-gray-300 text-sm font-medium mb-2">Budget Range</label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-xl bg-dark border border-dark-border text-white focus:outline-none focus:border-gold transition-colors"
        >
          <option value="">Select a budget range</option>
          <option value="under1000">Under $1,000 per person</option>
          <option value="1000-2000">$1,000 - $2,000 per person</option>
          <option value="2000-3000">$2,000 - $3,000 per person</option>
          <option value="3000+">$3,000+ per person</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-gray-300 text-sm font-medium mb-2">Tell Us About Your Dream Trip</label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us what your ideal vacation looks like — activities, accommodation preferences, special occasions..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors resize-none"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-dark py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all hover:-translate-y-0.5"
      >
        Send Inquiry
        <Send className="w-5 h-5" />
      </button>

      <p className="text-gray-600 text-sm text-center">
        We&apos;ll respond within 24 hours. No obligation, no pressure.
      </p>
    </form>
  );
}
