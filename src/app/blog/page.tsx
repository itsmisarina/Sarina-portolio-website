import { Metadata } from "next";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { CTA } from "@/components/cta";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Marketing Blog",
  description:
    "Read practical insights on AI marketing strategy, prompt engineering, automation, SEO, content systems, and growth consulting.",
};

export default function BlogPage() {
  const featured = blogPosts[0];

  return (
    <>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Blog"
            as="h1"
            title="AI marketing insights for sharper growth."
            text="Practical ideas for using AI, automation, content, SEO, and analytics in a way that supports real business decisions."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.36fr]">
            <BlogCard post={featured} featured />
            <GlassCard>
              <h2 className="text-xl font-bold text-white">Find an insight</h2>
              <label className="mt-5 flex min-h-12 items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 text-slate-300">
                <Search className="h-4 w-4 text-cyan-200" aria-hidden />
                <input className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-500" placeholder="Search articles" />
              </label>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Categories</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[...new Set(blogPosts.map((post) => post.category))].map((category) => (
                  <span key={category} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200">
                    {category}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
                <h3 className="font-semibold text-white">Newsletter</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">Get practical AI marketing notes in your inbox.</p>
                <Button href="/contact" className="mt-5 w-full">
                  Join List
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-2" aria-label="Pagination">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-slate-200"
                type="button"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
