"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, AtSign, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { brand, navLinks, services } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.75fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo.png"
              alt={brand.name}
              width={220}
              height={89}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            Premium AI marketing consulting for brands that want smarter systems, sharper content, and measurable growth.
          </p>
          <div className="mt-6 flex gap-3">
            {[Share2, MessageCircle, AtSign].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                <Icon className="h-5 w-5" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Quick Links</h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-300 hover:text-cyan-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-slate-300 hover:text-cyan-200">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</h2>
          <ul className="mt-5 space-y-4 text-slate-300">
            <li className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 text-cyan-200" aria-hidden />
              <a href={`mailto:${brand.email}`} className="hover:text-cyan-200">
                {brand.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 text-cyan-200" aria-hidden />
              <a href={`tel:${brand.phone}`} className="hover:text-cyan-200">
                {brand.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 text-cyan-200" aria-hidden />
              <span>{brand.location}</span>
            </li>
          </ul>
          <form className="mt-6 flex gap-2" aria-label="Newsletter signup">
            <input
              type="email"
              placeholder="Email for insights"
              className="min-h-12 min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
            />
            <button className="min-h-12 rounded-lg bg-cyan-300 px-4 text-sm font-semibold text-slate-950" type="submit">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/contact" variant="secondary" className="min-h-10 px-4">
            Book Consultation
          </Button>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:border-cyan-300/40"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  );
}
