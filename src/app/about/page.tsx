import { Metadata } from "next";
import { Award, HeartHandshake } from "lucide-react";
import { CTA } from "@/components/cta";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { brand, certifications, skills, timeline, tools, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Sarina Potrel",
  description:
    "Meet Sarina Potrel, AI Marketing Expert and Consultant helping brands grow with AI strategy, automation, content systems, and digital marketing.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">About Digital Sarina</p>
            <h1 className="mt-4 text-balance text-5xl font-black tracking-tight text-white sm:text-6xl">
              Marketing expertise shaped for the AI era.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {brand.owner} helps businesses translate AI possibility into marketing systems that are clear, elegant, and commercially useful.
            </p>
            <div className="mt-8">
              <Button href="/contact">Book Consultation</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard className="p-8">
              <div className="aspect-[16/12] rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.2),rgba(139,92,246,0.16),rgba(255,255,255,0.06))]" />
              <h2 className="mt-6 text-2xl font-bold text-white">{brand.owner}</h2>
              <p className="mt-2 text-cyan-200">{brand.title}</p>
              <p className="mt-4 leading-7 text-slate-300">
                Based in Kathmandu, serving ambitious brands with strategic AI marketing, automation, and growth consulting.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <GlassCard>
            <HeartHandshake className="h-8 w-8 text-cyan-200" aria-hidden />
            <h2 className="mt-5 text-2xl font-bold text-white">Mission</h2>
            <p className="mt-4 leading-7 text-slate-300">
              To help brands adopt AI in practical, ethical, and results-driven ways that improve marketing clarity, speed, and customer experience.
            </p>
          </GlassCard>
          <GlassCard>
            <Award className="h-8 w-8 text-purple-200" aria-hidden />
            <h2 className="mt-5 text-2xl font-bold text-white">Vision</h2>
            <p className="mt-4 leading-7 text-slate-300">
              To become a trusted AI marketing partner for modern businesses that want innovation without losing strategic focus or human connection.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Journey" title="A timeline of digital growth and AI transformation." />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {timeline.map((item) => (
              <GlassCard key={item.year}>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">{item.year}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Skills" title="Specialist skills across AI, marketing, automation, and growth." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skills.map(([skill, value]) => (
              <div key={skill} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-white">{skill}</h3>
                  <span className="text-sm text-cyan-200">{value}%</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#22d3ee,#8b5cf6,#38bdf8)]"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Tools" title="AI tools and marketing platforms." />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {tools.map((tool) => (
                <div key={tool} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-center font-semibold text-slate-100">
                  {tool}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Values" title="How the work feels in practice." />
            <div className="mt-8 space-y-3">
              {values.map((value) => (
                <div key={value} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-slate-200">
                  {value}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white">Certifications</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {certifications.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
