import Link from "next/link";
import { Check, Star, Crown, Gem } from "lucide-react";

const packages = [
  {
    name: "Island Explorer",
    price: "$899",
    duration: "5 Nights",
    icon: Star,
    description: "A perfect introduction to Caribbean magic for first-time visitors.",
    features: [
      "Round-trip flights included",
      "4-star beachfront hotel",
      "Daily breakfast buffet",
      "Airport transfers",
      "Guided island tour",
      "Welcome cocktail reception",
    ],
    popular: false,
  },
  {
    name: "Paradise Premium",
    price: "$1,499",
    duration: "7 Nights",
    icon: Crown,
    description: "Our signature package — the perfect balance of luxury and value.",
    features: [
      "Round-trip flights included",
      "5-star all-inclusive resort",
      "All meals & premium drinks",
      "Airport VIP transfers",
      "Three guided excursions",
      "Spa day for two",
      "Sunset catamaran cruise",
      "24/7 concierge service",
    ],
    popular: true,
  },
  {
    name: "Luxury Escape",
    price: "$2,999",
    duration: "10 Nights",
    icon: Gem,
    description: "The ultimate indulgence for discerning travelers seeking the extraordinary.",
    features: [
      "Business class flights",
      "Private villa or suite",
      "Personal butler service",
      "Private airport transfers",
      "Unlimited premium excursions",
      "Private chef experience",
      "Helicopter island tour",
      "Exclusive VIP experiences",
    ],
    popular: false,
  },
];

export default function Packages() {
  return (
    <section className="py-32 bg-navy-light relative" id="packages">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-light">Curated Experiences</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mt-4 mb-6">
            Travel <span className="text-gradient-teal italic">Packages</span>
          </h2>
          <div className="line-accent-center" />
          <p className="text-cream/40 max-w-2xl mx-auto text-lg font-light mt-6 leading-relaxed">
            Hand-crafted packages designed to give you the ultimate Caribbean experience at every level.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.name}
                className={`relative bg-navy rounded-2xl border ${
                  pkg.popular
                    ? "border-gold/30 shadow-2xl shadow-gold/5"
                    : "border-navy-border"
                } p-10 flex flex-col hover:border-gold/20 transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-6 py-1.5 text-xs uppercase tracking-[0.2em] font-medium">
                    Most Popular
                  </div>
                )}

                {/* Icon & Name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    pkg.popular ? "bg-gold/10 border border-gold/20" : "bg-teal/10 border border-teal/20"
                  }`}>
                    <Icon className={`w-6 h-6 ${pkg.popular ? "text-gold" : "text-teal-light"}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white">{pkg.name}</h3>
                    <span className="text-cream/30 text-xs uppercase tracking-wider">{pkg.duration}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-navy-border">
                  <span className={`text-4xl font-light ${pkg.popular ? "text-gold" : "text-teal-light"}`}>{pkg.price}</span>
                  <span className="text-cream/30 text-sm ml-2 font-light">per person</span>
                </div>

                <p className="text-cream/40 text-sm font-light mb-8 leading-relaxed">{pkg.description}</p>

                {/* Features */}
                <ul className="space-y-3.5 mb-10 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-gold/60" : "text-teal/60"}`} />
                      <span className="text-cream/50 text-sm font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`block text-center py-4 text-sm uppercase tracking-[0.15em] font-light transition-all duration-500 ${
                    pkg.popular
                      ? "bg-gold text-navy hover:bg-gold-light"
                      : "border border-cream/15 text-cream/60 hover:border-gold/40 hover:text-gold"
                  }`}
                >
                  Book This Package
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
