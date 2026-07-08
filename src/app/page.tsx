import { Metadata } from "next";
import { Star } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { CTA } from "@/components/cta";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { brand, blogPosts, services, stats, testimonials, whyWork } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Marketing Expert & Consultant",
  description:
    "Transform your business with AI marketing strategy, automation, content creation, SEO, and growth consulting from Digital Sarina.",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <Reveal className="flex w-full flex-col items-center">
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              {brand.title}
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block lg:whitespace-nowrap">Transform Your Business with</span>
              <span className="text-gradient mt-2 block">AI Marketing</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
              Helping brands leverage Artificial Intelligence, Automation, and Digital Marketing to grow faster.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/contact">Book a Consultation</Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
            <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="aspect-[4/5] rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(34,211,238,0.16),rgba(139,92,246,0.18),rgba(255,255,255,0.05))] p-6">
              <div className="flex h-full items-end rounded-lg border border-white/10 bg-[#0B1120]/70 p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Professional Photo</p>
                  <h2 className="mt-3 text-3xl font-bold text-white">{brand.owner}</h2>
                  <p className="mt-2 text-slate-300">{brand.title}</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="About"
              title="Practical AI strategy with a human marketing brain."
              text="Sarina helps brands move from AI curiosity to reliable systems: clearer campaigns, faster content, sharper automation, and better decisions across the customer journey."
            />
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Learn More
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="AI-powered marketing services for modern growth."
            text="Choose focused consulting, strategy, automation, content, and training support built for real-world execution."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.03}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading centered eyebrow="Why Work With Me" title="Premium thinking, practical execution, measurable progress." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyWork.map((item) => {
              const Icon = item.icon;
              return (
                <GlassCard key={item.title}>
                  <Icon className="h-8 w-8 text-cyan-200" aria-hidden />
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Testimonials" title="Trusted by ambitious brands and experts." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <GlassCard key={item.name}>
                <div className="flex gap-1 text-cyan-200" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="mt-5 leading-7 text-slate-200">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-6 font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Insights" title="Latest AI marketing thinking." />
            <Button href="/blog" variant="secondary">
              View Blog
            </Button>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
