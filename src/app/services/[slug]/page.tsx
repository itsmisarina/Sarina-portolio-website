import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA } from "@/components/cta";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs, services } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
              <Icon className="h-7 w-7" aria-hidden />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Service</p>
            <h1 className="mt-4 text-balance text-5xl font-black tracking-tight text-white sm:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{service.description}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Book Consultation</Button>
              <Button href="/services" variant="secondary">
                View All Services
              </Button>
            </div>
          </div>
          <GlassCard>
            <h2 className="text-2xl font-bold text-white">Pricing</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Custom packages are available after a discovery call. Pricing depends on scope, timeline, implementation depth, and training needs.
            </p>
            <div className="mt-6 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">Starting Point</p>
              <p className="mt-2 text-3xl font-bold text-white">Consultation-first</p>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <InfoList title="Benefits" items={service.benefits} />
          <InfoList title="Process" items={service.process} ordered />
          <InfoList title="Who It's For" items={service.audience} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Tools Used" title="Built with a practical stack of AI and marketing platforms." />
          <div className="mt-8 flex flex-wrap gap-3">
            {service.tools.map((tool) => (
              <span key={tool} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-slate-200">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="FAQs" title="Common questions before getting started." />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {faqs.map((faq) => (
              <GlassCard key={faq.question}>
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Related Services" title="Explore connected ways to grow." />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function InfoList({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) {
  const ListTag = ordered ? "ol" : "ul";
  return (
    <GlassCard>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <ListTag className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 leading-7 text-slate-300">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-sm font-bold text-cyan-200">
              {ordered ? index + 1 : ""}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ListTag>
    </GlassCard>
  );
}
