import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blog, pageHeads, slugify } from "@/data/data";
import PageHero from "@/components/PageHero";
import BlogDetail from "@/components/BlogDetail";

export function generateStaticParams() {
  return blog.posts.map((p) => ({ slug: slugify(p.title) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blog.posts.find((p) => slugify(p.title) === params.slug);
  return {
    title: post ? `${post.title} | Legal Insights` : "Legal Analysis",
    description: post?.excerpt ?? "Legal insights and jurisprudential analysis by Veyra Legal.",
  };
}

export default function LegalInsightsDetailPage({ params }: { params: { slug: string } }) {
  const post = blog.posts.find((p) => slugify(p.title) === params.slug);
  if (!post) notFound();
  return (
    <>
      <PageHero
        title={post.title}
        crumb={post.title}
        image={pageHeads.blog.image}
        parent={{ label: "Legal Insights", href: "/legal-insights" }}
      />
      <BlogDetail slug={params.slug} />
    </>
  );
}
