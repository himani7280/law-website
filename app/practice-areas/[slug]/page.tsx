import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageHeads, services, slugify } from "@/data/data";
import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetail";

export function generateStaticParams() {
  return services.items.map((s) => ({ slug: slugify(s.title) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = services.items.find((s) => slugify(s.title) === params.slug);
  return { title: item ? `${item.title} | Practice Areas` : "Practice Area Detail" };
}

export default function PracticeAreaDetailPage({ params }: { params: { slug: string } }) {
  const item = services.items.find((s) => slugify(s.title) === params.slug);
  if (!item) notFound();
  return (
    <>
      <PageHero
        title={item.title}
        crumb={item.title}
        image={pageHeads.services.image}
        parent={{ label: "Practice Areas", href: "/practice-areas" }}
      />
      <ServiceDetail slug={params.slug} />
    </>
  );
}
