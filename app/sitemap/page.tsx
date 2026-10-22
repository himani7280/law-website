import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { footer, nav, services, slugify } from "@/data/data";

export const metadata: Metadata = { title: "Sitemap" };

const groups = [
  { title: "Pages", items: [...nav, { label: "Get A Quote", href: "/book-a-consultation" }] },
  { title: "Practice Areas", items: services.items.map((s) => ({ label: s.title, href: `/practice-areas/${slugify(s.title)}` })) },
  { title: "Legal", items: footer.legal },
];

export default function Page() {
  return (
    <LegalPage title="Sitemap">
      {groups.map((g) => (
        <div key={g.title}>
          <h2 className="font-title text-xl font-semibold text-forest-900">{g.title}</h2>
          <ul className="mt-3 space-y-2">
            {g.items.map((i) => (
              <li key={i.href}><Link href={i.href} className="hover:text-gold-600">{i.label}</Link></li>
            ))}
          </ul>
        </div>
      ))}
    </LegalPage>
  );
}
