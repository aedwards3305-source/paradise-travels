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
      "Jamaica is more than a destination — it's a feeling. From the powdery white sands of Negril's Seven Mile Beach to the lush Blue Mountains, from the pulsing energy of Kingston to the luxury resorts of Montego Bay. Experience world-famous jerk cuisine, dance to reggae under the stars, and swim in bioluminescent waters.",
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
    gradient: "from-green/30 to-gold/30",
  },
  {
    name: "Bahamas",
    tagline: "700 Islands of Pure Paradise",
    description:
      "The Bahamas is the ultimate tropical escape with 700 islands and cays to explore. Swim with nurse sharks at Compass Cay, visit the famous swimming pigs of Exuma, or simply relax on some of the world's most beautiful pink sand beaches. Nassau offers vibrant nightlife and culture.",
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
    gradient: "from-cyan-500/30 to-green/30",
  },
  {
    name: "Barbados",
    tagline: "Where British Charm Meets Caribbean Soul",
    description:
      "Barbados blends British colonial heritage with Caribbean warmth. The east coast offers dramatic Atlantic waves for surfing, while the west coast — the Platinum Coast — is home to calm turquoise waters. Don't miss the underground Harrison's Cave or the world-famous Mount Gay rum distillery.",
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
    gradient: "from-gold/30 to-orange-500/30",
  },
  {
    name: "St. Lucia",
    tagline: "Nature's Masterpiece",
    description:
      "St. Lucia is a natural wonder with its iconic twin Pitons rising dramatically from the sea. Hike through lush rainforests, soak in volcanic mud baths, snorkel through pristine coral reefs, and witness some of the most breathtaking sunsets in the Caribbean from your luxury resort.",
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
    gradient: "from-green/30 to-emerald-500/30",
  },
  {
    name: "Cancun",
    tagline: "Ancient Wonders Meet Beach Paradise",
    description:
      "Cancun delivers the perfect blend of relaxation and adventure. Explore ancient Mayan ruins at Chichen Itza and Tulum, swim in mystical cenotes, snorkel in the world's second-largest coral reef, and enjoy world-class nightlife along the famous Hotel Zone strip.",
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
    gradient: "from-red-500/30 to-green/30",
  },
  {
    name: "Trinidad & Tobago",
    tagline: "The Land of Carnival & Calypso",
    description:
      "Experience the twin-island republic where culture explodes in color and sound. Trinidad's Carnival is the greatest show on Earth, while Tobago offers pristine beaches and the oldest protected rainforest in the Western Hemisphere. A foodie's dream with Indian, African, and Chinese influences.",
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
    gradient: "from-red-500/30 to-gold/30",
  },
];

export default function DestinationsPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-dark-card to-dark relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-green/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green font-semibold text-sm uppercase tracking-widest">Explore The Caribbean</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-4 mb-6">
            Our <span className="text-gradient-gold">Destinations</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Each destination offers a unique blend of culture, adventure, and relaxation. Let us help you find your perfect Caribbean paradise.
          </p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {destinations.map((dest, index) => (
            <div
              key={dest.name}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              {/* Image Card */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${dest.gradient} flex items-center justify-center border border-dark-border relative overflow-hidden group`}>
                  <span className="text-8xl group-hover:scale-125 transition-transform duration-700">{dest.emoji}</span>
                  <div className="absolute bottom-6 left-6 bg-dark/80 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <span className="text-gold font-bold">{dest.price}</span>
                    <span className="text-gray-400 text-sm ml-2">per person</span>
                  </div>
                  <div className="absolute top-6 right-6 bg-dark/80 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <Sun className="w-4 h-4 text-gold inline mr-2" />
                    <span className="text-gray-300 text-sm">Best: {dest.bestTime}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="text-4xl font-bold text-white mb-2">{dest.name}</h2>
                <p className="text-gold font-medium text-lg mb-4">{dest.tagline}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{dest.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {dest.highlights.map((h) => (
                    <span key={h} className="flex items-center gap-1 bg-dark-card border border-dark-border px-3 py-1.5 rounded-full text-sm text-gray-300">
                      <MapPin className="w-3 h-3 text-green" />
                      {h}
                    </span>
                  ))}
                </div>

                {/* Activities */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {dest.activities.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div key={a.label} className="flex items-center gap-3 bg-dark-card border border-dark-border rounded-xl px-4 py-3">
                        <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{a.label}</span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-dark px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-gold/30 transition-all hover:-translate-y-0.5"
                >
                  Plan Your Trip
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
