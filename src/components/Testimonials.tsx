import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James Mitchell",
    location: "New York, USA",
    rating: 5,
    text: "ParadiseTravels made our honeymoon absolutely magical! The all-inclusive resort in Jamaica exceeded every expectation. From the moment we landed, everything was handled perfectly.",
    trip: "Jamaica Honeymoon Package",
    avatar: "SM",
  },
  {
    name: "David Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "I've used many travel agencies before, but none compare to the personalized service here. They planned a surprise birthday trip for my wife to St. Lucia and it was flawless!",
    trip: "St. Lucia Luxury Escape",
    avatar: "DC",
  },
  {
    name: "The Williams Family",
    location: "London, UK",
    rating: 5,
    text: "Travelling with three kids can be stressful, but ParadiseTravels thought of everything. The family resort in Bahamas was perfect — kids' club, activities, and gorgeous beaches.",
    trip: "Bahamas Family Adventure",
    avatar: "WF",
  },
  {
    name: "Maria Rodriguez",
    location: "Miami, USA",
    rating: 5,
    text: "As a solo traveler, I was a bit nervous about Caribbean trips. The team paired me with a small group tour in Barbados and I had the time of my life. Already booking my next trip!",
    trip: "Barbados Explorer Package",
    avatar: "MR",
  },
  {
    name: "Robert & Lisa Clarke",
    location: "Sydney, Australia",
    rating: 5,
    text: "We flew halfway across the world for our anniversary and it was worth every mile. The private villa in Jamaica with a personal butler was an experience we'll never forget.",
    trip: "Jamaica Luxury Villa",
    avatar: "RC",
  },
  {
    name: "Michael Thompson",
    location: "Atlanta, USA",
    rating: 5,
    text: "Third time booking with ParadiseTravels and they keep getting better. This time it was Trinidad Carnival — the energy, the music, the food! An absolutely incredible cultural experience.",
    trip: "Trinidad Carnival Package",
    avatar: "MT",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark relative" id="testimonials">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green font-semibold text-sm uppercase tracking-widest">What Our Travelers Say</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Real <span className="text-gradient-gold">Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it — hear from travelers who&apos;ve experienced the ParadiseTravels difference.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-dark-card rounded-2xl border border-dark-border p-8 hover:border-gold/20 transition-all duration-300 group"
            >
              <Quote className="w-8 h-8 text-gold/20 mb-4 group-hover:text-gold/40 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green to-green-light flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.location}</p>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-gold text-xs font-medium bg-gold/10 px-3 py-1 rounded-full">{t.trip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
