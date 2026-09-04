import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/metadata";
import { EMAIL } from "@/lib/site";
import {getLegalRecord,legalSections} from "@/lib/cms-legal";
export const dynamic="force-dynamic";

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description:
    "Terms for the Orlano Gardens informational website and remote digital outdoor design service ordered through Etsy.",
  path: "/terms-and-conditions",
});

const sections = [
  {
    id: "service",
    title: "The service",
    content: (
      <p>
        Orlano Gardens provides remote digital outdoor design concepts and
        practical direction from client supplied photos, measurements, location,
        and preferences. It does not include a site visit, survey, engineering,
        permits, physical products, plant supply, construction, landscaping
        labor, or installation.
      </p>
    ),
  },
  {
    id: "scope",
    title: "Scope and client inputs",
    content: (
      <p>
        The client is responsible for accurate, complete photos, measurements,
        location, priorities, and known utilities, access, drainage, boundaries,
        or restrictions. The Etsy listing and confirmed messages control the
        purchased area, concept count, timing, and deliverables. Materially
        expanded areas require new scope.
      </p>
    ),
  },
  {
    id: "payment",
    title: "Etsy order and payment",
    content: (
      <p>
        Orders and payment are completed through the official Etsy shop. Etsy’s
        transaction, cancellation, payment, dispute, and platform rules also
        apply. This website does not accept payment.
      </p>
    ),
  },
  {
    id: "delivery",
    title: "Delivery and revision",
    content: (
      <p>
        The advertised timing begins after complete inputs and confirmed scope.
        Missing information, changed scope, platform interruption, or an agreed
        delay can change delivery. The listing determines concept count and
        revision allowance; a revision refines the selected direction and does
        not create a new project area.
      </p>
    ),
  },
  {
    id: "visual",
    title: "Visualization boundary",
    content: (
      <p>
        Concept images are real space planning mockups and are
        labeled as digital design concepts. They are not photographs of
        completed construction, measured plans, specifications, or guarantees
        that a physical installation will look identical.
      </p>
    ),
  },
  {
    id: "local",
    title: "Local verification and implementation",
    content: (
      <p>
        Before any purchase or site work, the client or qualified local
        professional must verify measurements, property lines, utilities,
        drainage, grading, soil, plant suitability and mature size, product
        availability, quantities, code, permits, structures, fire requirements,
        cost, and safe installation.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Deliverables and project media",
    content: (
      <p>
        The client may use purchased deliverables to plan and implement the
        identified property. Resale, redistribution, template extraction, or
        unrelated commercial reuse requires written permission. Client media
        will not be published without separate permission.
      </p>
    ),
  },
  {
    id: "limits",
    title: "Limitations",
    content: (
      <p>
        Guidance depends on the supplied information. Orlano Gardens cannot
        guarantee plant survival, contractor performance, product availability,
        permit approval, code compliance, exact cost, or physical results.
        Consumer rights that cannot lawfully be excluded remain unaffected.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Changes and contact",
    content: (
      <p>
        Applicable Etsy listing terms and these website terms may be updated.
        Questions before purchase can be sent to{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    ),
  },
];

export default async function TermsPage() {
  const override=await getLegalRecord("Terms and Conditions");
  if(override)return <LegalPage eyebrow="Legal · Service" title={override.title} summary={override.body.slice(0,180)} updated={override.effectiveDate} sections={legalSections(override)}/>;
  return (
    <LegalPage
      eyebrow="Legal · Service"
      title="Terms and Conditions"
      summary="Clear boundaries for a remote visualization service whose official orders and payment take place through Etsy."
      sections={sections}
    />
  );
}
