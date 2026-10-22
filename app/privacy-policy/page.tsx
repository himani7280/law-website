import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/data";

export const metadata: Metadata = { title: "Privacy Policy & Confidentiality" };

export default function Page() {
  return (
    <LegalPage title="Privacy Policy & Confidentiality">
      <p>
        {site.name} Advocates &amp; Legal Consultants holds client confidentiality and professional privilege paramount. Case information, corporate disclosures, and matter briefs shared through our consultation forms or chambers correspondence are protected under legal professional privilege pursuant to Section 126 of the Indian Evidence Act.
      </p>
      <p>
        We collect only the details you provide (name, organization, telephone, email, and preliminary matter summary) to evaluate conflict of interest and coordinate consultations. We do not sell or monetize client data.
      </p>
      <p>
        All digital transmissions are encrypted. To request review or deletion of your records, contact our compliance officer at{" "}
        <a className="font-semibold text-gold-600" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
