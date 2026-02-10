import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Jamaica",
    location: "Montego Bay",
    description: "White sand beaches, reggae rhythms, and the warmth of island soul.",
    emoji: "🇯🇲",
    price: "$899",
  },
  {
    name: "Bahamas",
    location: "Nassau",
    description: "Crystal waters, luxury islands, and nature like nowhere else.",
    emoji: "🏝️",
    price: "$1,199",
  },
  {
    name: "Barbados",
    location: "Bridgetown",
    description: "Rich heritage, stunning coastlines, and world-class rum.",
    emoji: "🌴",
    price: "$999",
  },
  {
    name: "St. Lucia",
    location: "Castries",
    description: "Iconic Pitons, volcanic shores, and lush rainforests.",
    emoji: "🌋",
    price: "$1,099",
  },
  {
    name: "Cancun",
    location: "Mexico",
    description: "Ancient ruins, turquoise seas, and vibrant nightlife.",
    emoji: "🏛️",
    price: "$799",
  },
  {
    name: "Trinidad & Tobago",
    location: "Port of Spain",
    description: "Carnival spirit, diverse flavors, and tropical biodiversity.",
    emoji: "🎭",
    price: "$849",
  },
];

export default function Destinations() {
  return (
    <section className="py-32 bg-navy relative" id="destinations">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-teal text-xs uppercase tracking-[0.3em] font-light">Explore The World</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mt-4 mb-6">
            Popular <span className="text-gradient-gold italic">Destinations</span>
          </h2>
          <div className="line-accent-center" />
          <p className="text-cream/40 max-w-2xl mx-auto text-lg font-light mt-6 leading-relaxed">
            From the rhythmic shores of Jamaica to the pristine sands of the Bahamas — discover your perfect Caribbean escape.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              href="/destinations"
              className="group relative bg-navy-card rounded-2xl border border-navy-border overflow-hidden hover:border-gold/20 transition-all duration-700 hover:-translate-y-1"
            >
              {/* Image area */}
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-lighter to-teal-dark/20 flex items-center justify-center relative overflow-hidden">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-700">{dest.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-card via-transparent to-transparent" />
                <div className="absolute top-4 right-4 glass rounded-full px-4 py-1.5 text-gold text-sm font-light tracking-wider">
                  from {dest.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-2 text-teal text-xs uppercase tracking-wider mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{dest.location}</span>
                </div>
                <h3 className="text-xl font-light text-white mb-2 group-hover:text-gold transition-colors duration-500">{dest.name}</h3>
                <p className="text-cream/35 text-sm font-light leading-relaxed mb-5">{dest.description}</p>
                <div className="flex items-center gap-2 text-gold/60 text-xs uppercase tracking-wider font-light group-hover:text-gold group-hover:gap-3 transition-all duration-500">
                  <span>Discover</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-3 border border-gold/30 text-gold px-10 py-3.5 text-sm uppercase tracking-[0.15em] font-light hover:bg-gold hover:text-navy transition-all duration-500"
          >
            View All Destinations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
