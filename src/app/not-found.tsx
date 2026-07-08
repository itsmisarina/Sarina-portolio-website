import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">404</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-white">Page not found</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          This page is not available, but the main AI marketing experience is ready.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Back Home</Button>
        </div>
        <Link href="/contact" className="mt-5 inline-block text-sm font-semibold text-cyan-200 hover:text-white">
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
