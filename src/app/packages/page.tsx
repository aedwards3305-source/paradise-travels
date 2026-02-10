import { Metadata } from "next";
import Packages from "@/components/Packages";
import Link from "next/link";
import { Check, ArrowRight, Heart, Sparkles, Palmtree, PartyPopper } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Packages | ParadiseTravels",
  description: "Hand-crafted Caribbean travel packages for every budget — from Island Explorer to Luxury Escape.",
};

const specialPackages = [
  {
    title: "Honeymoon Paradise",
    description: "Celebrate your love in the most romantic Caribbean settings. Private dinners on the beach, couples spa, sunset sailings.",
    price: "$2,199",
    duration: "7 Nights",
    icon: Heart,
    includes: ["Overwater bungalow", "Couples spa day", "Private beach dinner", "Sunset catamaran cruise", "Champagne welcome"],
  },
  {
    title: "Family Fun Package",
    description: "Create unforgettable family memories with kid-friendly resorts, exciting activities, and all-inclusive dining.",
    price: "$3,499",
    duration: "7 Nights (Family of 4)",
    icon: Sparkles,
    includes: ["Family suite", "Kids' club access", "Water park entry", "Family island tour", "All meals included"],
  },
  {
    title: "Adventure Seeker",
    description: "For the thrill-seekers. Zip-line through rainforests, dive coral reefs, hike volcanic peaks, explore waterfalls.",
    price: "$1,799",
    duration: "7 Nights",
    icon: Palmtree,
    includes: ["Zip-line adventure", "Scuba diving (2 dives)", "Waterfall hike", "Kayak tour", "Snorkeling excursion"],
  },
  {
    title: "Group Getaway",
    description: "Perfect for bachelor parties, birthdays, or friend reunions. Group discounts and custom party planning.",
    price: "$899",
    duration: "5 Nights (per person, min 6)",
    icon: PartyPopper,
    includes: ["Group villa", "Private pool party", "VIP club entry", "Catamaran day trip", "Group dinner"],
  },
];

export default function PackagesPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-24 bg-navy-light relative overflow-hidden">
        <div className="absolute top-10 left-20 w-64 h-64 bg-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-light">Find Your Perfect Trip</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mt-4 mb-6">
            Travel <span className="text-gradient-teal italic">Packages</span>
          </h1>
          <div className="line-accent-center" />
          <p className="text-cream/40 max-w-2xl mx-auto text-lg font-light mt-6 leading-relaxed">
            From budget-friendly escapes to luxury indulgence — the perfect Caribbean package for every occasion.
          </p>
        </div>
      </section>

      <Packages />

      {/* Special Packages */}
      <section className="py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-teal text-xs uppercase tracking-[0.3em] font-light">Special Occasions</span>
            <h2 className="text-4xl sm:text-5xl font-light text-white mt-4 mb-6">
              Themed <span className="text-gradient-gold italic">Experiences</span>
            </h2>
            <div className="line-accent-center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialPackages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div key={pkg.title} className="bg-navy-card rounded-2xl border border-navy-border p-10 hover:border-gold/15 transition-all duration-500 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gold/8 border border-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/12 transition-colors duration-500">
                      <Icon className="w-6 h-6 text-gold/70" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-white group-hover:text-gold transition-colors duration-500">{pkg.title}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-teal-light font-light text-lg">{pkg.price}</span>
                        <span className="text-cream/25 text-sm font-light">{pkg.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-cream/35 font-light mb-6 leading-relaxed">{pkg.description}</p>

                  <ul className="space-y-2.5 mb-8">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-teal/50 flex-shrink-0" />
                        <span className="text-cream/40 text-sm font-light">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="inline-flex items-center gap-2 text-gold/60 text-sm uppercase tracking-wider font-light hover:text-gold hover:gap-3 transition-all duration-500">
                    Inquire Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-light relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-border to-transparent" />
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
            Don&apos;t see what you&apos;re looking for?
          </h2>
          <p className="text-cream/35 text-lg font-light mb-10 leading-relaxed">
            Every traveler is unique. Contact us for a completely custom package built around your vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold text-navy px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-all duration-500 group"
          >
            Get a Custom Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
