import { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Globe, Calendar, ArrowRight, Heart, Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | ParadiseTravels",
  description: "Learn about ParadiseTravels — our story, our team, and our mission to craft unforgettable Caribbean experiences.",
};

const stats = [
  { icon: Globe, value: "50+", label: "Destinations" },
  { icon: Users, value: "15,000+", label: "Happy Travelers" },
  { icon: Calendar, value: "12+", label: "Years Experience" },
  { icon: Award, value: "25+", label: "Industry Awards" },
];

const team = [
  { name: "Marcus Johnson", role: "Founder & CEO", bio: "Born in Kingston, Jamaica, Marcus founded ParadiseTravels to share Caribbean magic with the world.", initials: "MJ" },
  { name: "Keisha Williams", role: "Head of Travel Planning", bio: "15 years in luxury travel. Keisha crafts itineraries that exceed every expectation.", initials: "KW" },
  { name: "Devon Clarke", role: "Destination Specialist", bio: "Devon has visited every island in the Caribbean and brings first-hand knowledge to every trip.", initials: "DC" },
  { name: "Alicia Brown", role: "Customer Experience", bio: "Alicia ensures every traveler receives world-class service from inquiry to journey home.", initials: "AB" },
];

const values = [
  { icon: Heart, title: "Passion", description: "We genuinely love what we do. Every trip carries the enthusiasm of people who live for travel." },
  { icon: Target, title: "Excellence", description: "Good enough isn't in our vocabulary. We obsess over every detail to deliver extraordinary experiences." },
  { icon: Eye, title: "Authenticity", description: "We connect travelers with real Caribbean culture — the heart and soul of each island." },
];

export default function AboutPage() {
  return (
    <div className="pt-16 sm:pt-24">
      {/* Header */}
      <section className="py-12 sm:py-24 bg-navy-light relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gold/3 rounded-full blur-3xl pointer-events-none hidden sm:block" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-teal/3 rounded-full blur-3xl pointer-events-none hidden sm:block" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <span className="text-teal text-xs uppercase tracking-[0.3em] font-light">Our Story</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mt-4 mb-6">
            About <span className="text-gradient-gold italic">ParadiseTravels</span>
          </h1>
          <div className="line-accent-center" />
          <p className="text-cream/40 max-w-2xl mx-auto text-lg font-light mt-6 leading-relaxed">
            More than a travel agency — a team of Caribbean-born experts sharing the beauty of our islands with the world.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 sm:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-20 items-center">
            <div>
              <h2 className="text-4xl font-light text-white mb-8">
                Born in the <span className="text-gradient-teal italic">Caribbean</span>
              </h2>
              <div className="space-y-5 text-cream/40 font-light leading-relaxed">
                <p>
                  ParadiseTravels was born from a simple idea: the Caribbean is the most beautiful place on Earth, and everyone deserves to experience it. Founded in 2014 by Marcus Johnson in Kingston, Jamaica, we started as a small operation helping friends and family plan trips home.
                </p>
                <p>
                  Word spread quickly. Our deep local knowledge, personal connections across the islands, and obsessive attention to detail set us apart from everything else on the market.
                </p>
                <p>
                  Today, we partner with the finest resorts, airlines, and local guides across 50+ Caribbean destinations. But our mission hasn&apos;t changed: to create authentic, unforgettable travel experiences that go beyond the ordinary.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy-lighter to-teal-dark/10 flex items-center justify-center border border-navy-border relative overflow-hidden">
              <div className="text-center">
                <div className="text-8xl mb-6">🌴</div>
                <p className="text-gold font-light text-2xl">Est. 2014</p>
                <p className="text-cream/30 mt-2 font-light">Kingston, Jamaica</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal via-gold to-teal" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold via-teal to-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-20 bg-navy-light border-y border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-gold/8 border border-gold/15 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-gold/70" />
                  </div>
                  <div className="text-3xl font-light text-white">{stat.value}</div>
                  <div className="text-cream/30 mt-1 text-xs uppercase tracking-wider font-light">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-10 sm:mb-20">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-light">What Drives Us</span>
            <h2 className="text-4xl font-light text-white mt-4 mb-6">
              Our <span className="text-gradient-teal italic">Values</span>
            </h2>
            <div className="line-accent-center" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-navy-card rounded-2xl border border-navy-border p-6 sm:p-10 text-center hover:border-gold/15 transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-teal/8 border border-teal/15 flex items-center justify-center mx-auto mb-8">
                    <Icon className="w-7 h-7 text-teal-light" />
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">{v.title}</h3>
                  <p className="text-cream/35 font-light leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-24 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-10 sm:mb-20">
            <span className="text-teal text-xs uppercase tracking-[0.3em] font-light">The People Behind Paradise</span>
            <h2 className="text-4xl font-light text-white mt-4 mb-6">
              Meet Our <span className="text-gradient-gold italic">Team</span>
            </h2>
            <div className="line-accent-center" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m) => (
              <div key={m.name} className="bg-navy rounded-2xl border border-navy-border p-6 sm:p-10 text-center group hover:border-gold/15 transition-all duration-500">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-dark to-teal flex items-center justify-center text-white/80 font-light text-xl tracking-wider mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                  {m.initials}
                </div>
                <h3 className="text-lg font-light text-white">{m.name}</h3>
                <p className="text-gold/60 text-xs uppercase tracking-wider font-light mb-3">{m.role}</p>
                <p className="text-cream/30 text-sm font-light">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-navy relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-border to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
            Ready to experience the difference?
          </h2>
          <p className="text-cream/35 text-lg font-light mb-10">
            Let our team of Caribbean experts craft your perfect vacation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold text-navy px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-all duration-500 group"
          >
            Start Planning
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
