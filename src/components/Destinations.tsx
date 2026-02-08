import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Jamaica",
    location: "Montego Bay",
    description: "White sand beaches, reggae vibes, and jerk cuisine paradise.",
    emoji: "🇯🇲",
    price: "$899",
    color: "from-green/20 to-gold/20",
  },
  {
    name: "Bahamas",
    location: "Nassau",
    description: "Crystal clear waters, swimming pigs, and luxury island life.",
    emoji: "🏝️",
    price: "$1,199",
    color: "from-blue-500/20 to-green/20",
  },
  {
    name: "Barbados",
    location: "Bridgetown",
    description: "Rich culture, stunning coastlines, and world-class rum.",
    emoji: "🌴",
    price: "$999",
    color: "from-gold/20 to-orange-500/20",
  },
  {
    name: "St. Lucia",
    location: "Castries",
    description: "Iconic Pitons, volcanic beaches, and lush rainforests.",
    emoji: "🌋",
    price: "$1,099",
    color: "from-green/20 to-emerald-500/20",
  },
  {
    name: "Cancun",
    location: "Mexico",
    description: "Ancient ruins, turquoise waters, and vibrant nightlife.",
    emoji: "🏛️",
    price: "$799",
    color: "from-red-500/20 to-green/20",
  },
  {
    name: "Trinidad & Tobago",
    location: "Port of Spain",
    description: "Carnival culture, diverse cuisine, and tropical biodiversity.",
    emoji: "🎭",
    price: "$849",
    color: "from-red-500/20 to-gold/20",
  },
];

export default function Destinations() {
  return (
    <section className="py-24 bg-dark relative" id="destinations">
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green font-semibold text-sm uppercase tracking-widest">Explore The World</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Popular <span className="text-gradient-gold">Destinations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From the rhythmic shores of Jamaica to the pristine beaches of the Bahamas — discover your perfect Caribbean getaway.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              href="/destinations"
              className="group relative bg-dark-card rounded-2xl border border-dark-border overflow-hidden hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/5"
            >
              {/* Image area */}
              <div className={`aspect-[3/2] bg-gradient-to-br ${dest.color} flex items-center justify-center relative`}>
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{dest.emoji}</span>
                <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-sm text-gold font-bold px-3 py-1 rounded-full text-sm">
                  from {dest.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-green text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{dest.location}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{dest.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{dest.description}</p>
                <div className="flex items-center gap-2 text-gold text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold hover:text-dark transition-all duration-300"
          >
            View All Destinations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
