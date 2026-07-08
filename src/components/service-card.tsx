import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <GlassCard className="flex h-full flex-col">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-300">{service.short}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"
      >
        Learn More <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Link>
    </GlassCard>
  );
}
