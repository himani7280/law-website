import type { Metadata } from "next";
import ThankYou from "@/components/ThankYou";

export const metadata: Metadata = { title: "Thank You" };

export default function ThankYouPage() {
  return <ThankYou />;
}
