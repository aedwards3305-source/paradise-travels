import { Metadata } from "next";
import Packages from "@/components/Packages";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Palmtree, Heart, PartyPopper } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Packages | ParadiseTravels",
  description: "Explore our hand-crafted Caribbean travel packages for every budget — from Island Explorer to Luxury Escape.",
};

const specialPackages = [
  {
    title: "Honeymoon Paradise",
    emoji: "💑",
    description: "Celebrate your love in the most romantic Caribbean settings. Private dinners on the beach, couples spa treatments, and sunset sailings.",
    price: "$2,199",
    duration: "7 Nights",
    icon: Heart,
    includes: ["Overwater bungalow", "Couples spa day", "Private beach dinner", "Sunset catamaran cruise", "Champagne welcome"],
  },
  {
    title: "Family Fun Package",
    emoji: "👨‍👩‍👧‍👦",
    description: "Create unforgettable family memories with kid-friendly resorts, exciting activities, and all-inclusive dining everyone will love.",
    price: "$3,499",
    duration: "7 Nights (Family of 4)",
    icon: Sparkles,
    includes: ["Family suite accommodation", "Kids' club access", "Water park entry", "Family island tour", "All meals included"],
  },
  {
    title: "Adventure Seeker",
    emoji: "🤿",
    description: "For the thrill-seekers! Zip-line through rainforests, dive coral reefs, hike volcanic peaks, and explore hidden waterfalls.",
    price: "$1,799",
    duration: "7 Nights",
    icon: Palmtree,
    includes: ["Zip-line adventure", "Scuba diving (2 dives)", "Waterfall hike", "Kayak tour", "Snorkeling excursion"],
  },
  {
    title: "Group Getaway",
    emoji: "🎉",
    description: "Perfect for bachelor/bachelorette parties, birthdays, or friend reunions. Group discounts and custom party planning included.",
    price: "$899",
    duration: "5 Nights (per person, min 6)",
    icon: PartyPopper,
    includes: ["Group villa accommodation", "Private pool party", "VIP club entry", "Catamaran day trip", "Group dinner reservation"],
  },
];

export default function PackagesPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-dark-card to-dark relative overflow-hidden">
        <div className="absolute top-10 left-20 w-64 h-64 bg-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Find Your Perfect Trip</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-4 mb-6">
            Travel <span className="text-gradient-green">Packages</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From budget-friendly escapes to luxury indulgence — we have the perfect Caribbean package for every traveler and every occasion.
          </p>
        </div>
      </section>

      {/* Main Packages */}
      <Packages />

      {/* Special Occasion Packages */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green font-semibold text-sm uppercase tracking-widest">Special Occasions</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Themed <span className="text-gradient-gold">Experiences</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Celebrating something special? We&apos;ve curated unique packages for life&apos;s biggest moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialPackages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.title}
                  className="bg-dark-card rounded-2xl border border-dark-border p-8 hover:border-gold/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors">{pkg.title}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-green-light font-bold text-lg">{pkg.price}</span>
                        <span className="text-gray-500 text-sm">{pkg.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">{pkg.description}</p>

                  <ul className="space-y-2 mb-6">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
                  >
                    Inquire Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-card relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Don&apos;t See What You&apos;re Looking For?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Every traveler is unique. Contact us for a completely custom package built around your dream vacation, budget, and travel style.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-dark px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all hover:-translate-y-1"
          >
            Get a Custom Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
