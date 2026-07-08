import { Metadata } from "next";
import { CTA } from "@/components/cta";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Marketing Services",
  description:
    "Explore AI marketing strategy, consulting, prompt engineering, automation, SEO, content creation, personal branding, and training services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            as="h1"
            title="AI marketing services built for clarity, speed, and measurable growth."
            text="From strategy to implementation, each service helps you use AI with purpose instead of adding another disconnected tool."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.025}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
