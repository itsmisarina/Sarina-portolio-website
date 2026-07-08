import Link from "next/link";

export function MobileStickyCta() {
  return (
    <Link
      href="/contact"
      className="fixed inset-x-4 bottom-4 z-40 flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(110deg,#22d3ee,#8b5cf6,#38bdf8)] px-5 text-sm font-bold text-white shadow-[0_0_30px_rgba(34,211,238,0.3)] lg:hidden"
    >
      Book Consultation
    </Link>
  );
}
