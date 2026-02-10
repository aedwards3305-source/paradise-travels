import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James Mitchell",
    location: "New York, USA",
    rating: 5,
    text: "ParadiseTravels made our honeymoon absolutely magical. The all-inclusive resort in Jamaica exceeded every expectation. From the moment we landed, everything was handled perfectly.",
    trip: "Jamaica Honeymoon",
    avatar: "SM",
  },
  {
    name: "David Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "I've used many travel agencies before, but none compare to the personalized service here. They planned a surprise birthday trip to St. Lucia and it was flawless.",
    trip: "St. Lucia Luxury Escape",
    avatar: "DC",
  },
  {
    name: "The Williams Family",
    location: "London, UK",
    rating: 5,
    text: "Travelling with three kids can be stressful, but ParadiseTravels thought of everything. The family resort in Bahamas was perfect — kids' club, activities, gorgeous beaches.",
    trip: "Bahamas Family Adventure",
    avatar: "WF",
  },
  {
    name: "Maria Rodriguez",
    location: "Miami, USA",
    rating: 5,
    text: "As a solo traveler, I was nervous about Caribbean trips. The team paired me with a small group tour in Barbados and I had the time of my life. Already booking my next trip.",
    trip: "Barbados Explorer",
    avatar: "MR",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-navy relative" id="testimonials">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-border to-transparent" />

      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-teal text-xs uppercase tracking-[0.3em] font-light">Guest Experiences</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mt-4 mb-6">
            What Our <span className="text-gradient-gold italic">Travelers</span> Say
          </h2>
          <div className="line-accent-center" />
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-navy-card rounded-2xl border border-navy-border p-10 hover:border-gold/15 transition-all duration-500 group"
            >
              <Quote className="w-8 h-8 text-gold/15 mb-6 group-hover:text-gold/25 transition-colors duration-500" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold/80" />
                ))}
              </div>

              <p className="text-cream/50 font-light leading-relaxed mb-8 text-lg italic">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-4 pt-6 border-t border-navy-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-dark to-teal flex items-center justify-center text-white/80 font-light text-sm tracking-wider">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-light">{t.name}</p>
                  <p className="text-cream/30 text-sm font-light">{t.location}</p>
                </div>
                <span className="ml-auto text-gold/40 text-xs font-light uppercase tracking-wider border border-gold/15 px-3 py-1 rounded-full">
                  {t.trip}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
