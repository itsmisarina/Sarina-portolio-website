import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/data";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] backdrop-blur-xl transition hover:border-purple-300/30 hover:bg-white/[0.07]">
      <Link href={`/blog/${post.slug}`} className={featured ? "grid gap-0 lg:grid-cols-[1.05fr_0.95fr]" : "block"}>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <Image
            src={post.image}
            alt=""
            fill
            sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400">
            <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-cyan-200">{post.category}</span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden />
              {new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(post.date))}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {post.readTime}
            </span>
          </div>
          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white group-hover:text-cyan-100">{post.title}</h3>
          <p className="mt-3 leading-7 text-slate-300">{post.excerpt}</p>
          <p className="mt-5 text-sm font-semibold text-cyan-200">Read More</p>
        </div>
      </Link>
    </article>
  );
}
