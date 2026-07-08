import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ href, children, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300",
    variant === "primary" &&
      "bg-[linear-gradient(110deg,#22d3ee,#8b5cf6,#38bdf8)] text-white shadow-[0_0_30px_rgba(34,211,238,0.28)] hover:-translate-y-0.5 hover:shadow-[0_0_42px_rgba(139,92,246,0.38)]",
    variant === "secondary" &&
      "border border-cyan-300/30 bg-white/[0.04] text-cyan-100 hover:border-cyan-200/60 hover:bg-cyan-300/10",
    variant === "ghost" && "text-slate-200 hover:bg-white/10",
    className,
  );

  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
