import { Shield, Headphones, Heart, Wallet, Award, Clock } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "100% Secure Booking",
    description: "Your payments and personal data are protected with bank-level encryption. Book with complete confidence.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated travel experts are available around the clock. Need help at 3am? We've got you covered.",
  },
  {
    icon: Heart,
    title: "Personalized Trips",
    description: "No cookie-cutter vacations. Every itinerary is custom-crafted to match your unique travel style and preferences.",
  },
  {
    icon: Wallet,
    title: "Best Price Guarantee",
    description: "Found a lower price? We'll match it and give you an extra 5% off. Quality travel shouldn't break the bank.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Voted #1 Caribbean travel agency three years running by Travel Weekly Magazine.",
  },
  {
    icon: Clock,
    title: "Flexible Cancellation",
    description: "Plans change — we get it. Enjoy free cancellation up to 48 hours before departure on most packages.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-dark-card relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Why ParadiseTravels</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Why <span className="text-gradient-green">Choose Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don&apos;t just book trips — we create unforgettable experiences backed by trust, expertise, and genuine care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-dark rounded-2xl border border-dark-border p-8 group hover:border-green/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                  <Icon className="w-7 h-7 text-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
