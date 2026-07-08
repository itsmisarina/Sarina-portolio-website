import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-cyan-300/20 bg-[linear-gradient(120deg,rgba(34,211,238,0.16),rgba(139,92,246,0.18),rgba(56,189,248,0.12))] p-8 shadow-[0_0_80px_rgba(34,211,238,0.12)] sm:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Ready to Grow with AI?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">Build your next marketing advantage.</h2>
          </div>
          <Button href="/contact" className="w-full sm:w-fit">
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
