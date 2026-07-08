import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Link2, Mail, MessageCircle, Share2 } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { CTA } from "@/components/cta";
import { GlassCard } from "@/components/ui/glass-card";
import { blogPosts, brand } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [brand.owner],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{post.category}</p>
          <h1 className="mt-4 text-balance text-5xl font-black tracking-tight text-white sm:text-6xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span>{brand.owner}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(post.date))}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-lg border border-white/10">
          <div className="relative aspect-[16/8] bg-slate-900">
            <Image src={post.image} alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[0.32fr_0.68fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <GlassCard>
              <h2 className="font-semibold text-white">Table of Contents</h2>
              <ol className="mt-4 space-y-3 text-sm text-slate-300">
                {post.content.map((section) => (
                  <li key={section.heading}>
                    <a href={`#${section.heading.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-cyan-200">
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
              <h2 className="mt-8 font-semibold text-white">Share</h2>
              <div className="mt-4 flex gap-2">
                {[Share2, Link2, Mail].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label="Share article"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:text-cyan-200"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                ))}
              </div>
            </GlassCard>
          </aside>

          <div className="space-y-9">
            {post.content.map((section) => (
              <section key={section.heading} id={section.heading.toLowerCase().replaceAll(" ", "-")}>
                <h2 className="text-3xl font-bold text-white">{section.heading}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">{section.body}</p>
              </section>
            ))}
            <GlassCard>
              <div className="flex items-start gap-4">
                <MessageCircle className="mt-1 h-5 w-5 text-cyan-200" aria-hidden />
                <div>
                  <h2 className="font-semibold text-white">Comments</h2>
                  <p className="mt-2 text-slate-300">Comments placeholder for future community discussion or CMS integration.</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </article>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white">Related blogs</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
