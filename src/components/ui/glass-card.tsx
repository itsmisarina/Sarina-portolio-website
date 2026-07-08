import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-[0_16px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.07]",
        className,
      )}
    >
      {children}
    </div>
  );
}
