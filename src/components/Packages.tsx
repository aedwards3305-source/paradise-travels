import Link from "next/link";
import { Check, Star, Crown, Gem } from "lucide-react";

const packages = [
  {
    name: "Island Explorer",
    price: "$899",
    duration: "5 Nights",
    icon: Star,
    description: "Perfect for first-time visitors seeking a taste of Caribbean magic.",
    features: [
      "Round-trip flights included",
      "4-star beachfront hotel",
      "Daily breakfast buffet",
      "Airport transfers",
      "One guided island tour",
      "Welcome cocktail reception",
    ],
    popular: false,
    accent: "green",
  },
  {
    name: "Paradise Premium",
    price: "$1,499",
    duration: "7 Nights",
    icon: Crown,
    description: "Our most popular package with the best value for couples and families.",
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
    accent: "gold",
  },
  {
    name: "Luxury Escape",
    price: "$2,999",
    duration: "10 Nights",
    icon: Gem,
    description: "The ultimate luxury experience for discerning travelers.",
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
    accent: "gold",
  },
];

export default function Packages() {
  return (
    <section className="py-24 bg-dark-card relative" id="packages">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Choose Your Adventure</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Travel <span className="text-gradient-green">Packages</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hand-crafted travel packages designed to give you the ultimate Caribbean experience at every budget level.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.name}
                className={`relative bg-dark rounded-2xl border ${
                  pkg.popular ? "border-gold/50 shadow-lg shadow-gold/10" : "border-dark-border"
                } p-8 flex flex-col hover:border-gold/30 transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold to-gold-dark text-dark px-6 py-1.5 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    pkg.popular ? "bg-gold/10" : "bg-green/10"
                  }`}>
                    <Icon className={`w-6 h-6 ${pkg.popular ? "text-gold" : "text-green"}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    <span className="text-gray-500 text-sm">{pkg.duration}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${pkg.popular ? "text-gold" : "text-green-light"}`}>{pkg.price}</span>
                  <span className="text-gray-500 text-sm ml-2">per person</span>
                </div>

                <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-gold" : "text-green"}`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`block text-center py-3.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-gold to-gold-dark text-dark hover:shadow-lg hover:shadow-gold/30"
                      : "border-2 border-green text-green hover:bg-green hover:text-white"
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
