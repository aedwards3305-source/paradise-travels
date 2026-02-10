import { Shield, Headphones, Heart, Wallet, Award, Clock } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Bank-level encryption protects your data. Book with complete confidence and peace of mind.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    description: "Our travel experts are available around the clock — before, during, and after your trip.",
  },
  {
    icon: Heart,
    title: "Bespoke Itineraries",
    description: "No templates. Every journey is custom-crafted to match your unique travel style and desires.",
  },
  {
    icon: Wallet,
    title: "Price Guarantee",
    description: "Found a lower price? We match it plus 5% off. Luxury travel without the premium markup.",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description: "Voted #1 Caribbean travel agency three years running by Travel Weekly Magazine.",
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    description: "Plans change. Enjoy free cancellation up to 48 hours before departure on most packages.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-navy-light relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-10 sm:mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-light">The Difference</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mt-4 mb-6">
            Why <span className="text-gradient-teal italic">Choose</span> Us
          </h2>
          <div className="line-accent-center" />
          <p className="text-cream/40 max-w-2xl mx-auto text-lg font-light mt-6 leading-relaxed">
            We don&apos;t just book trips — we create experiences backed by trust, expertise, and genuine care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-navy rounded-2xl border border-navy-border p-6 sm:p-10 group hover:border-gold/15 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-teal/8 border border-teal/15 flex items-center justify-center mb-8 group-hover:bg-teal/12 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-teal-light" />
                </div>
                <h3 className="text-lg font-light text-white mb-3 group-hover:text-gold transition-colors duration-500">
                  {reason.title}
                </h3>
                <p className="text-cream/35 font-light leading-relaxed text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
