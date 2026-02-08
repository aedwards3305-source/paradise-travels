import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | ParadiseTravels",
  description: "Get in touch with our Caribbean travel experts. Plan your dream vacation today.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Tropical Lane", "Kingston, Jamaica"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (876) 555-0199", "+1 (876) 555-0200"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@paradisetravels.com", "bookings@paradisetravels.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 8AM - 8PM EST", "Sat - Sun: 9AM - 5PM EST"],
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-dark-card to-dark relative overflow-hidden">
        <div className="absolute top-10 left-20 w-64 h-64 bg-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-4 mb-6">
            Contact <span className="text-gradient-green">Us</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to start planning your dream Caribbean vacation? Fill out the form below and one of our travel experts will be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.title}
                    className="bg-dark-card rounded-2xl border border-dark-border p-6 hover:border-green/20 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-green" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail) => (
                          <p key={detail} className="text-gray-400 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Quick chat CTA */}
              <div className="bg-gradient-to-br from-green/10 to-gold/10 rounded-2xl border border-gold/20 p-6 text-center">
                <MessageCircle className="w-10 h-10 text-gold mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Prefer Live Chat?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Chat with a travel expert right now for instant answers.
                </p>
                <button className="bg-gradient-to-r from-gold to-gold-dark text-dark px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all text-sm">
                  Start Chat
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-dark-card rounded-2xl border border-dark-border p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-2">Plan Your Dream Trip</h2>
                <p className="text-gray-400 mb-8">
                  Tell us about your travel plans and we&apos;ll create a personalized itinerary just for you.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-80 bg-gradient-to-br from-dark-card via-green/5 to-dark-card flex items-center justify-center border-t border-dark-border">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
          <p className="text-gray-400 text-lg">123 Tropical Lane, Kingston, Jamaica</p>
          <p className="text-gray-600 text-sm mt-2">Interactive map coming soon</p>
        </div>
      </section>
    </div>
  );
}
