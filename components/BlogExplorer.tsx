"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blog, slugify } from "@/data/data";
import Img from "./ui/Img";

export default function BlogExplorer() {
  const list = blog.posts;

  return (
    <section className="section-pad bg-cream">
      <div className="container-x">
        <motion.div layout className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group ${i % 3 === 1 ? "lg:mt-12" : ""}`}
            >
              <Link href={`/legal-insights/${slugify(p.title)}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-forest-900/10 shadow-md transition-shadow group-hover:shadow-2xl">
                  <Img
                    src={p.image}
                    alt={p.title}
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="transition-transform duration-[1400ms] group-hover:scale-110 object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/95 backdrop-blur-sm px-3.5 py-1 text-xs font-semibold text-forest-900 shadow">
                    {p.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full bg-gold-400 text-ink shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:bg-forest-900 group-hover:text-gold-400">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
                <p className="mt-4 sm:mt-5 text-xs font-semibold uppercase tracking-widest text-gold-600">
                  {p.date} · {p.read}
                </p>
                <h3 className="mt-2 text-lg sm:text-xl font-semibold leading-snug transition group-hover:text-gold-600 line-clamp-2">
                  {p.title}
                </h3>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
