import { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Globe, Calendar, ArrowRight, Heart, Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | ParadiseTravels",
  description: "Learn about ParadiseTravels — our story, our team, and our mission to create unforgettable Caribbean travel experiences.",
};

const stats = [
  { icon: Globe, value: "50+", label: "Destinations" },
  { icon: Users, value: "15,000+", label: "Happy Travelers" },
  { icon: Calendar, value: "12+", label: "Years Experience" },
  { icon: Award, value: "25+", label: "Industry Awards" },
];

const team = [
  {
    name: "Marcus Johnson",
    role: "Founder & CEO",
    bio: "Born in Kingston, Jamaica, Marcus founded ParadiseTravels with a vision to share Caribbean magic with the world.",
    initials: "MJ",
  },
  {
    name: "Keisha Williams",
    role: "Head of Travel Planning",
    bio: "With 15 years in luxury travel, Keisha crafts personalized itineraries that exceed every expectation.",
    initials: "KW",
  },
  {
    name: "Devon Clarke",
    role: "Destination Specialist",
    bio: "Devon has visited every island in the Caribbean and brings first-hand knowledge to every trip he plans.",
    initials: "DC",
  },
  {
    name: "Alicia Brown",
    role: "Customer Experience",
    bio: "Alicia ensures every traveler receives world-class service from the first inquiry to the journey home.",
    initials: "AB",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We genuinely love what we do. Every trip we plan carries the enthusiasm and care of people who live for travel.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Good enough isn't in our vocabulary. We obsess over every detail to deliver extraordinary experiences.",
  },
  {
    icon: Eye,
    title: "Authenticity",
    description: "We connect travelers with real Caribbean culture — not just tourist hotspots, but the heart and soul of each island.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-dark-card to-dark relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-green/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green font-semibold text-sm uppercase tracking-widest">Our Story</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-4 mb-6">
            About <span className="text-gradient-gold">ParadiseTravels</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We&apos;re more than a travel agency — we&apos;re a team of Caribbean-born experts dedicated to sharing the beauty and vibrancy of our islands with the world.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Born in the <span className="text-gradient-green">Caribbean</span>, Built for the World
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  ParadiseTravels was born from a simple idea: that the Caribbean is the most beautiful place on Earth, and everyone deserves to experience it. Founded in 2014 by Marcus Johnson in Kingston, Jamaica, we started as a small operation helping friends and family plan trips home.
                </p>
                <p>
                  Word spread quickly. Our deep local knowledge, personal connections across the islands, and obsessive attention to detail set us apart. What started as a passion project grew into a full-service travel agency serving thousands of travelers from around the globe.
                </p>
                <p>
                  Today, we partner with the finest resorts, airlines, and local guides across 50+ Caribbean destinations. But our mission hasn&apos;t changed: to create authentic, unforgettable travel experiences that go beyond the ordinary.
                </p>
              </div>
            </div>

            <div className="aspect-square rounded-3xl bg-gradient-to-br from-green/20 via-gold/10 to-green/20 flex items-center justify-center border border-dark-border relative overflow-hidden">
              <div className="text-center">
                <div className="text-8xl mb-6">🌴</div>
                <p className="text-gold font-bold text-2xl">Est. 2014</p>
                <p className="text-gray-400 mt-2">Kingston, Jamaica</p>
              </div>
              {/* Decorative diagonal */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green via-gold to-green" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-green to-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-500 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-6">
              Our <span className="text-gradient-green">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-dark-card rounded-2xl border border-dark-border p-8 text-center hover:border-gold/20 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-green" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green font-semibold text-sm uppercase tracking-widest">The People Behind Paradise</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-6">
              Meet Our <span className="text-gradient-gold">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-dark rounded-2xl border border-dark-border p-8 text-center group hover:border-green/30 transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green to-green-light flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-gold text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Experience the ParadiseTravels Difference?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let our team of Caribbean experts craft your perfect vacation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-dark px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all hover:-translate-y-1"
          >
            Start Planning Your Trip
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
