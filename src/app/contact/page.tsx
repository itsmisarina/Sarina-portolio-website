import { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Digital Sarina for AI marketing strategy, automation, prompt engineering, SEO, content, and growth consulting.",
};

export default function ContactPage() {
  const cards = [
    { label: "Email", value: brand.email, href: `mailto:${brand.email}`, icon: Mail },
    { label: "Phone", value: brand.phone, href: `tel:${brand.phone}`, icon: Phone },
    { label: "Location", value: brand.location, href: "#map", icon: MapPin },
    { label: "Business Hours", value: "Sun-Fri, 10:00 AM - 6:00 PM", href: "#", icon: Clock },
  ];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          as="h1"
          title="Book a consultation and map your AI marketing next step."
          text="Share what you are building, where marketing feels stuck, and what kind of growth you want next."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.65fr_0.35fr]">
          <GlassCard className="p-6 sm:p-8">
            <ContactForm />
          </GlassCard>

          <div className="space-y-5">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <GlassCard key={card.label}>
                  <Icon className="h-6 w-6 text-cyan-200" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-white">{card.label}</h2>
                  <a href={card.href} className="mt-2 block leading-7 text-slate-300 hover:text-cyan-200">
                    {card.value}
                  </a>
                </GlassCard>
              );
            })}
          </div>
        </div>

        <div id="map" className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <div className="flex min-h-[320px] items-center justify-center rounded-lg border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(139,92,246,0.12))] text-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Google Map Placeholder</p>
              <h2 className="mt-3 text-2xl font-bold text-white">{brand.location}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
