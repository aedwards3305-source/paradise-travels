import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Sun, Waves, Mountain, Music, UtensilsCrossed, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Destinations | ParadiseTravels",
  description: "Explore our Caribbean destinations — Jamaica, Bahamas, Barbados, St. Lucia, Cancun, and more.",
};

const destinations = [
  {
    name: "Jamaica",
    tagline: "Feel the Rhythm of the Island",
    description:
      "Jamaica is more than a destination — it's a feeling. From the powdery white sands of Negril's Seven Mile Beach to the lush Blue Mountains, from the pulsing energy of Kingston to the luxury resorts of Montego Bay.",
    highlights: ["Montego Bay", "Negril", "Ocho Rios", "Kingston", "Port Antonio"],
    activities: [
      { icon: Waves, label: "Beach & Snorkeling" },
      { icon: Mountain, label: "Blue Mountains" },
      { icon: Music, label: "Reggae & Culture" },
      { icon: UtensilsCrossed, label: "Jerk Cuisine" },
    ],
    emoji: "🇯🇲",
    price: "From $899",
    bestTime: "Nov - Apr",
  },
  {
    name: "Bahamas",
    tagline: "700 Islands of Pure Paradise",
    description:
      "The ultimate tropical escape with 700 islands and cays to explore. Swim with nurse sharks at Compass Cay, visit the famous swimming pigs of Exuma, or simply relax on the world's most beautiful pink sand beaches.",
    highlights: ["Nassau", "Paradise Island", "Exuma", "Eleuthera", "Grand Bahama"],
    activities: [
      { icon: Waves, label: "Swimming Pigs" },
      { icon: Sun, label: "Pink Sand Beaches" },
      { icon: Waves, label: "Scuba Diving" },
      { icon: UtensilsCrossed, label: "Conch Salad" },
    ],
    emoji: "🏝️",
    price: "From $1,199",
    bestTime: "Dec - Apr",
  },
  {
    name: "Barbados",
    tagline: "Where British Charm Meets Caribbean Soul",
    description:
      "Barbados blends British colonial heritage with Caribbean warmth. The east coast offers dramatic Atlantic waves for surfing, while the Platinum Coast is home to calm turquoise waters and luxury resorts.",
    highlights: ["Bridgetown", "Platinum Coast", "Bathsheba", "Speightstown", "Oistins"],
    activities: [
      { icon: Waves, label: "Surfing" },
      { icon: UtensilsCrossed, label: "Rum Tasting" },
      { icon: Sun, label: "Beach Hopping" },
      { icon: Mountain, label: "Harrison's Cave" },
    ],
    emoji: "🌴",
    price: "From $999",
    bestTime: "Dec - May",
  },
  {
    name: "St. Lucia",
    tagline: "Nature's Masterpiece",
    description:
      "St. Lucia is a natural wonder with its iconic twin Pitons rising dramatically from the sea. Hike through lush rainforests, soak in volcanic mud baths, and witness the most breathtaking sunsets in the Caribbean.",
    highlights: ["Castries", "Soufriere", "The Pitons", "Marigot Bay", "Rodney Bay"],
    activities: [
      { icon: Mountain, label: "Hike The Pitons" },
      { icon: Waves, label: "Mud Baths" },
      { icon: Sun, label: "Sunset Sailing" },
      { icon: UtensilsCrossed, label: "Creole Cuisine" },
    ],
    emoji: "🌋",
    price: "From $1,099",
    bestTime: "Jan - Apr",
  },
  {
    name: "Cancun",
    tagline: "Ancient Wonders Meet Beach Paradise",
    description:
      "The perfect blend of relaxation and adventure. Explore ancient Mayan ruins at Chichen Itza, swim in mystical cenotes, snorkel in the world's second-largest coral reef, and enjoy world-class nightlife.",
    highlights: ["Hotel Zone", "Chichen Itza", "Tulum", "Isla Mujeres", "Playa del Carmen"],
    activities: [
      { icon: Mountain, label: "Mayan Ruins" },
      { icon: Waves, label: "Cenote Swimming" },
      { icon: Sun, label: "Beach Resorts" },
      { icon: Music, label: "Nightlife" },
    ],
    emoji: "🏛️",
    price: "From $799",
    bestTime: "Dec - Apr",
  },
  {
    name: "Trinidad & Tobago",
    tagline: "The Land of Carnival & Calypso",
    description:
      "Experience the twin-island republic where culture explodes in color and sound. Trinidad's Carnival is the greatest show on Earth, while Tobago offers pristine beaches and the oldest protected rainforest in the Western Hemisphere.",
    highlights: ["Port of Spain", "Tobago", "Maracas Bay", "Caroni Swamp", "Pigeon Point"],
    activities: [
      { icon: Music, label: "Carnival" },
      { icon: Mountain, label: "Rainforest Hikes" },
      { icon: UtensilsCrossed, label: "Street Food" },
      { icon: Waves, label: "Turtle Watching" },
    ],
    emoji: "🎭",
    price: "From $849",
    bestTime: "Jan - May",
  },
];

export default function DestinationsPage() {
  return (
    <div className="pt-16 sm:pt-24">
      {/* Page Header */}
      <section className="py-12 sm:py-24 bg-navy-light relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gold/3 rounded-full blur-3xl pointer-events-none hidden sm:block" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-teal/3 rounded-full blur-3xl pointer-events-none hidden sm:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <span className="text-teal text-xs uppercase tracking-[0.3em] font-light">Explore The Caribbean</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mt-4 mb-6">
            Our <span className="text-gradient-gold italic">Destinations</span>
          </h1>
          <div className="line-accent-center" />
          <p className="text-cream/40 max-w-2xl mx-auto text-lg font-light mt-6 leading-relaxed">
            Each destination offers a unique blend of culture, adventure, and relaxation.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-12 sm:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
          {destinations.map((dest, index) => (
            <div key={dest.name} className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-lighter to-teal-dark/10 flex items-center justify-center border border-navy-border relative overflow-hidden group">
                  <span className="text-6xl sm:text-8xl group-hover:scale-110 transition-transform duration-700">{dest.emoji}</span>
                  <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 glass rounded-xl px-3 py-1.5 sm:px-5 sm:py-2.5">
                    <span className="text-gold font-light text-sm sm:text-base">{dest.price}</span>
                    <span className="text-cream/30 text-xs sm:text-sm ml-2 font-light">per person</span>
                  </div>
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6 glass rounded-xl px-3 py-1.5 sm:px-5 sm:py-2.5">
                    <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold inline mr-1 sm:mr-2" />
                    <span className="text-cream/50 text-xs sm:text-sm font-light">Best: {dest.bestTime}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-4xl font-light text-white mb-2">{dest.name}</h2>
                <p className="text-gold/70 font-light text-lg mb-6 italic">{dest.tagline}</p>
                <p className="text-cream/40 font-light leading-relaxed mb-8">{dest.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {dest.highlights.map((h) => (
                    <span key={h} className="flex items-center gap-1.5 bg-navy-card border border-navy-border px-3 py-1.5 text-xs text-cream/40 uppercase tracking-wider font-light">
                      <MapPin className="w-3 h-3 text-teal" />
                      {h}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-8 sm:mb-10">
                  {dest.activities.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div key={a.label} className="flex items-center gap-3 bg-navy-card border border-navy-border rounded-xl px-4 py-3">
                        <Icon className="w-4 h-4 text-gold/60 flex-shrink-0" />
                        <span className="text-cream/40 text-sm font-light">{a.label}</span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-3.5 text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-all duration-500 group"
                >
                  Plan Your Trip
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
