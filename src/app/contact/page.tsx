import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | ParadiseTravels",
  description: "Get in touch with our Caribbean travel experts. Plan your dream vacation today.",
};

const contactInfo = [
  { icon: MapPin, title: "Visit Us", details: ["123 Tropical Lane", "Kingston, Jamaica"] },
  { icon: Phone, title: "Call Us", details: ["+1 (876) 555-0199", "+1 (876) 555-0200"] },
  { icon: Mail, title: "Email Us", details: ["info@paradisetravels.com", "bookings@paradisetravels.com"] },
  { icon: Clock, title: "Office Hours", details: ["Mon - Fri: 8AM - 8PM EST", "Sat - Sun: 9AM - 5PM EST"] },
];

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-24">
      {/* Header */}
      <section className="py-12 sm:py-24 bg-navy-light relative overflow-hidden">
        <div className="absolute top-10 left-20 w-64 h-64 bg-teal/3 rounded-full blur-3xl pointer-events-none hidden sm:block" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-gold/3 rounded-full blur-3xl pointer-events-none hidden sm:block" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-light">Get In Touch</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mt-4 mb-6">
            Contact <span className="text-gradient-teal italic">Us</span>
          </h1>
          <div className="line-accent-center" />
          <p className="text-cream/40 max-w-2xl mx-auto text-lg font-light mt-6 leading-relaxed">
            Ready to plan your dream Caribbean vacation? Our travel experts will be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="bg-navy-card rounded-2xl border border-navy-border p-6 hover:border-gold/15 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-teal/8 border border-teal/15 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-teal-light" />
                      </div>
                      <div>
                        <h3 className="text-white font-light mb-2">{info.title}</h3>
                        {info.details.map((d) => (
                          <p key={d} className="text-cream/30 text-sm font-light">{d}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Live chat CTA */}
              <div className="bg-navy-card rounded-2xl border border-gold/15 p-6 sm:p-8 text-center">
                <MessageCircle className="w-10 h-10 text-gold/50 mx-auto mb-4" />
                <h3 className="text-white font-light mb-2">Prefer Live Chat?</h3>
                <p className="text-cream/30 text-sm font-light mb-5">
                  Chat with a travel expert right now.
                </p>
                <button className="bg-gold text-navy px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-all duration-500">
                  Start Chat
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-navy-card rounded-2xl border border-navy-border p-5 sm:p-8 md:p-12">
                <h2 className="text-2xl font-light text-white mb-2">Plan Your Dream Trip</h2>
                <p className="text-cream/30 font-light mb-10">
                  Tell us about your travel plans and we&apos;ll create a personalized itinerary just for you.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 bg-navy-light flex items-center justify-center border-t border-navy-border">
        <div className="text-center">
          <MapPin className="w-10 h-10 text-gold/30 mx-auto mb-3" />
          <p className="text-cream/30 font-light">123 Tropical Lane, Kingston, Jamaica</p>
          <p className="text-cream/15 text-xs mt-2 uppercase tracking-wider">Interactive map coming soon</p>
        </div>
      </section>
    </div>
  );
}
