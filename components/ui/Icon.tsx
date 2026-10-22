import {
  Calculator,
  FileCheck2,
  ShieldCheck,
  Building2,
  LineChart,
  Landmark,
  Scale,
  Gavel,
  Briefcase,
  FileText,
  Award,
  BookOpen,
  type LucideProps,
} from "lucide-react";

const map = {
  Calculator,
  FileCheck2,
  ShieldCheck,
  Building2,
  LineChart,
  Landmark,
  Scale,
  Gavel,
  Briefcase,
  FileText,
  Award,
  BookOpen,
};

export default function Icon({ name, ...rest }: { name: string } & LucideProps) {
  const C = map[name as keyof typeof map] ?? Scale;
  return <C {...rest} />;
}
