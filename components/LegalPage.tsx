import Link from "next/link";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-cream pb-24 pt-36">
      <div className="container-x max-w-3xl">
        <Link href="/" className="eyebrow">Home</Link>
        <h1 className="section-title mt-4">{title}</h1>
        <div className="mt-8 space-y-5 leading-relaxed text-forest-900/80">{children}</div>
      </div>
    </section>
  );
}
