import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
  as = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  const HeadingTag = as;

  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
      ) : null}
      <HeadingTag className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</HeadingTag>
      {text ? <p className="mt-5 text-pretty text-base leading-8 text-slate-300 sm:text-lg">{text}</p> : null}
    </div>
  );
}
