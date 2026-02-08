import Link from "next/link";
import { ArrowRight, Star, Users, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-card to-dark" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-green/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold rounded-full animate-pulse" />
      <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-green rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-gold/60 rounded-full animate-pulse" />

      {/* Diagonal stripe accent (Jamaica flag inspired) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-full h-[200%] rotate-12 opacity-[0.03]"
          style={{ background: "repeating-linear-gradient(90deg, #FED100 0px, #FED100 2px, transparent 2px, transparent 60px)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">#1 Rated Caribbean Travel Agency</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-white">Discover</span>
              <br />
              <span className="text-gradient-gold">Paradise</span>
              <br />
              <span className="text-white">Awaits You</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              Experience the vibrant culture, pristine beaches, and breathtaking adventures of the Caribbean. We craft dream vacations tailored just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/packages"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-dark px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-1 animate-pulse-gold"
              >
                Explore Packages
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center gap-2 border-2 border-green text-green px-8 py-4 rounded-full font-bold text-lg hover:bg-green hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                View Destinations
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 sm:gap-12">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-5 h-5 text-green" />
                  <span className="text-3xl font-bold text-white">50+</span>
                </div>
                <span className="text-gray-500 text-sm">Destinations</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-gold" />
                  <span className="text-3xl font-bold text-white">15K+</span>
                </div>
                <span className="text-gray-500 text-sm">Happy Travelers</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 text-gold" />
                  <span className="text-3xl font-bold text-white">4.9</span>
                </div>
                <span className="text-gray-500 text-sm">Rating</span>
              </div>
            </div>
          </div>

          {/* Right - Hero visual card */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-dark-card to-dark-lighter rounded-3xl border border-dark-border p-8 overflow-hidden">
                {/* Jamaica-inspired diagonal gold/green cross pattern */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-gold/20 via-transparent to-green/20 transform -translate-x-1/2 rotate-45" />
                  <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-green/20 via-transparent to-gold/20 transform -translate-x-1/2 -rotate-45" />
                </div>

                <div className="relative space-y-6">
                  {/* Image placeholder with gradient */}
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green/20 via-green/10 to-gold/20 flex items-center justify-center border border-dark-border">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏝️</div>
                      <p className="text-gold font-semibold text-lg">Montego Bay, Jamaica</p>
                      <p className="text-gray-500 text-sm mt-1">Crystal clear waters await</p>
                    </div>
                  </div>

                  {/* Trip details */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Starting from</p>
                      <p className="text-3xl font-bold text-gold">$899</p>
                      <p className="text-gray-500 text-sm">per person</p>
                    </div>
                    <Link
                      href="/packages"
                      className="bg-gradient-to-r from-green to-green-light text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-green/30 transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-gold text-dark px-4 py-2 rounded-xl font-bold text-sm shadow-lg shadow-gold/20 rotate-[-3deg]">
                HOT DEAL 🔥
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg shadow-green/20 rotate-[3deg]">
                7 Nights All-Inclusive
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
