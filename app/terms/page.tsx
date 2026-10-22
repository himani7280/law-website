import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/data";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Page() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        The content published on this website is intended solely for general informational purposes in compliance with Bar Council of India regulations and does not constitute formal legal advice, solicitation, or legal opinion.
      </p>
      <p>
        Transmission or receipt of information through this website does not create or constitute an advocate-client relationship between {site.name} Advocates &amp; Legal Consultants and any user. Formal legal engagements commence only upon execution of a written Vakalatnama, engagement letter, or retainer agreement.
      </p>
      <p>
        Interactive estimation tools on this site provide preliminary, indicative budgetary ranges. Final retainers and fee schedules depend upon specific matter complexity, forum jurisdiction, and case merits.
      </p>
      <p>
        For inquiries regarding representation or terms, contact our chambers at{" "}
        <a className="font-semibold text-gold-600" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
