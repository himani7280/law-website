import { redirect } from "next/navigation";
import { services, slugify } from "@/data/data";

export function generateStaticParams() {
  return services.items.map((s) => ({ slug: slugify(s.title) }));
}

export default function ServiceDetailRedirect({ params }: { params: { slug: string } }) {
  redirect(`/practice-areas/${params.slug}`);
}
