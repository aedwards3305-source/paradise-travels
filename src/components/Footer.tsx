import Link from "next/link";
import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <Plane className="w-5 h-5 text-dark" />
              </div>
              <div>
                <span className="text-xl font-bold text-gold">Paradise</span>
                <span className="text-xl font-bold text-green-light">Travels</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your gateway to unforgettable Caribbean adventures. We craft personalized travel experiences that create lasting memories.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter border border-dark-border flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter border border-dark-border flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter border border-dark-border flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Destinations", "Packages", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-green-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-gold font-semibold text-lg mb-6">Top Destinations</h4>
            <ul className="space-y-3">
              {["Jamaica", "Bahamas", "Barbados", "Trinidad & Tobago", "St. Lucia", "Cancun"].map((dest) => (
                <li key={dest}>
                  <Link href="/destinations" className="text-gray-400 hover:text-green-light transition-colors">
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">123 Tropical Lane, Kingston, Jamaica</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green flex-shrink-0" />
                <span className="text-gray-400">+1 (876) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green flex-shrink-0" />
                <span className="text-gray-400">info@paradisetravels.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ParadiseTravels. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
