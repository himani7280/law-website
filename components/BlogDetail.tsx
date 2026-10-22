"use client";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { blog, slugify } from "@/data/data";
import { fadeLeft, fadeRight } from "@/lib/variants";
import Img from "./ui/Img";
import Reveal from "./ui/Reveal";

export default function BlogDetail({ slug }: { slug: string }) {
  const post = blog.posts.find((p) => slugify(p.title) === slug)!;
  const recent = blog.posts;

  return (
    <section className="section-pad bg-cream">
      <div className="container-x grid gap-8 lg:gap-12 lg:grid-cols-[1.8fr_1fr] min-w-0 w-full">
        <article className="min-w-0 w-full">
          <Reveal variants={fadeLeft}>
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-forest-900/10 shadow-lg bg-forest-950">
              <Img src={post.image} alt={post.title} priority sizes="(max-width:1024px) 100vw, 65vw" />
            </div>
          </Reveal>
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-forest-800/75">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-900/5 px-3 py-1 font-medium">
              <Calendar size={13} className="text-gold-600" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-900/5 px-3 py-1 font-medium">
              <Clock size={13} className="text-gold-600" /> {post.read} read
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/20 px-3 py-1 font-semibold text-forest-950">
              <Tag size={13} className="text-gold-600" /> {post.tag}
            </span>
          </div>
          <Reveal>
            <h1 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950 mt-3 sm:mt-4 mb-2 leading-tight sm:leading-snug break-words">
              {post.title}
            </h1>
            <p className="mt-3 border-l-4 border-gold-500 pl-3.5 sm:pl-5 font-title text-base sm:text-xl italic text-forest-800/85 leading-relaxed break-words">
              {post.excerpt}
            </p>
          </Reveal>
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-forest-800/80 break-words">
            {post.body.map((p, i) => (
              <Reveal key={i}><p>{p}</p></Reveal>
            ))}
          </div>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl sm:rounded-3xl bg-forest-900 p-5 sm:p-7 text-white shadow-xl min-w-0">
            <div className="min-w-0">
              <p className="font-title text-lg sm:text-xl font-semibold leading-snug">Want personalised advice on this topic?</p>
              <p className="mt-1 text-xs text-white/70">Consult directly with our Senior Advocates under statutory privilege.</p>
            </div>
            <Link href="/book-a-consultation" className="btn-gold w-full sm:w-auto text-center shrink-0">Talk To An Expert</Link>
          </div>
        </article>

        {/* Right Sticky Sidebar Column */}
        <aside className="min-w-0 w-full lg:sticky lg:top-24 xl:top-28 lg:self-start">
          <div className="space-y-6">
            <div className="rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 border border-forest-900/10 shadow-lg shadow-forest-900/5 min-w-0">
              <div className="flex items-center justify-between pb-3 border-b border-forest-900/10">
                <h3 className="font-title text-lg sm:text-xl font-bold text-forest-950">Recent Posts</h3>
                <span className="text-[11px] sm:text-xs font-semibold text-gold-600 bg-gold-400/15 px-2.5 py-1 rounded-full">{recent.length} Articles</span>
              </div>
              <ul className="divide-y divide-forest-900/10">
                {recent.map((r) => {
                  const isCurrent = slugify(r.title) === slug;
                  return (
                    <li key={r.title} className="py-3 sm:py-3.5 first:pt-3">
                      <Link href={`/legal-insights/${slugify(r.title)}`} className="group flex items-center gap-3 sm:gap-3.5 min-w-0">
                        <span className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-xl border border-forest-900/10 shadow-sm bg-forest-900/10">
                          <Img src={r.image} alt={r.title} sizes="64px" className="transition-transform duration-700 group-hover:scale-110 object-cover" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className={`block text-xs sm:text-sm font-semibold leading-snug line-clamp-2 transition ${isCurrent ? "text-gold-600 font-bold" : "text-forest-950 group-hover:text-gold-600"}`}>
                            {r.title}
                          </span>
                          <span className="mt-1 flex items-center gap-1.5 sm:gap-2 text-[11px] text-forest-800/60">
                            <span>{r.date}</span>
                            <span>·</span>
                            <span className="text-gold-600 font-medium">{r.tag}</span>
                            {isCurrent && (
                              <span className="ml-auto text-[9px] uppercase font-bold tracking-wider text-gold-600 bg-gold-400/20 px-2 py-0.5 rounded-full shrink-0">
                                Current
                              </span>
                            )}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
