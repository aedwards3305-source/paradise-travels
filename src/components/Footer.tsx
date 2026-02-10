import Link from "next/link";
import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-card border-t border-navy-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center">
                <Plane className="w-5 h-5 text-navy" />
              </div>
              <div className="tracking-wide">
                <span className="text-lg font-light text-gold uppercase tracking-[0.2em]">Paradise</span>
                <span className="text-lg font-light text-cream/40 uppercase tracking-[0.2em]">Travels</span>
              </div>
            </Link>
            <p className="text-cream/30 font-light leading-relaxed mb-8 text-sm">
              Your gateway to unforgettable Caribbean adventures. Bespoke travel experiences crafted with care and intention.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-navy border border-navy-border flex items-center justify-center text-cream/30 hover:text-gold hover:border-gold/30 transition-all duration-500"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "Destinations", "Packages", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-cream/30 hover:text-gold transition-colors duration-500 text-sm font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-8">Destinations</h4>
            <ul className="space-y-3">
              {["Jamaica", "Bahamas", "Barbados", "Trinidad & Tobago", "St. Lucia", "Cancun"].map((dest) => (
                <li key={dest}>
                  <Link href="/destinations" className="text-cream/30 hover:text-gold transition-colors duration-500 text-sm font-light">
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-8">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                <span className="text-cream/30 text-sm font-light">123 Tropical Lane, Kingston, Jamaica</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal flex-shrink-0" />
                <span className="text-cream/30 text-sm font-light">+1 (876) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal flex-shrink-0" />
                <span className="text-cream/30 text-sm font-light">info@paradisetravels.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-navy-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/20 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} ParadiseTravels. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-cream/20 uppercase tracking-wider">
            <a href="#" className="hover:text-gold transition-colors duration-500">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors duration-500">Terms</a>
            <a href="#" className="hover:text-gold transition-colors duration-500">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
