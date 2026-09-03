import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/metadata";
import { EMAIL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Orlano Gardens handles website visits, Etsy orders, email, project media, external links, and future advertising technologies.",
  path: "/privacy-policy",
});

const sections = [
  {
    id: "current-site",
    title: "Current website setup",
    content: (
      <>
        <p>
          This is a static informational website. It does not create user
          accounts, accept payment, submit contact forms, upload files, or
          install analytics or advertising scripts. Messages are sent only when
          a visitor chooses an external contact option such as Etsy, Instagram
          or email.
        </p>
        <p>
          Standard hosting infrastructure may process technical request data
          such as IP address, browser information, requested URL, timestamp, and
          security logs to deliver and protect the site.
        </p>
      </>
    ),
  },
  {
    id: "etsy",
    title: "Etsy orders and client communication",
    content: (
      <>
        <p>
          Official orders, payment, and order specific messages take place
          through the Orlano Gardens Etsy shop. Etsy controls its own collection
          and use of account, order, payment, device, and communication data
          under Etsy’s privacy policy and settings.
        </p>
        <p>
          Do not send payment card details, passwords, government identifiers,
          or unnecessary sensitive information through Etsy messages or email.
        </p>
      </>
    ),
  },
  {
    id: "email",
    title: "Email and business inquiries",
    content: (
      <p>
        If you choose to email, Orlano Gardens receives the address, message,
        attachments, and other information you provide. This may be used to
        answer the inquiry, manage a collaboration, respond to a privacy or
        accessibility request, prevent abuse, or maintain necessary business
        records.
      </p>
    ),
  },
  {
    id: "project-media",
    title: "Project photos and creative files",
    content: (
      <>
        <p>
          Project photos, videos, measurements, and preferences shared through
          Etsy or email are used to understand and deliver the requested
          service. Remove faces, license plates, addresses, or private details
          that are not needed.
        </p>
        <p>
          Client property media will not be published as portfolio, editorial,
          advertising, or social content without separate permission.
        </p>
      </>
    ),
  },
  {
    id: "advertising",
    title: "Future analytics and advertising",
    content: (
      <>
        <p>
          If analytics or Google AdSense is added, this notice and the cookie
          policy will be updated before activation. Where required, a Google
          certified consent management platform will request or record choices
          before eligible advertising or measurement technologies operate.
        </p>
        <p>
          Third party vendors may then use cookies, web beacons, IP addresses,
          or similar technologies for ad delivery, fraud prevention, frequency
          control, and measurement. Visitors will be given the controls required
          for their location.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Providers, transfers, and retention",
    content: (
      <p>
        Information may be processed by hosting, email, Etsy, security, storage,
        professional advisers, or legal compliance providers only as reasonably
        necessary. Providers may operate in different countries. Records are
        retained only as needed for the inquiry, service, accounting, security,
        dispute, or legal purpose that applies.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your choices and rights",
    content: (
      <p>
        Depending on your location, you may have rights to request access,
        correction, deletion, restriction, objection, portability, withdrawal of
        consent, or an opt out from certain targeted advertising uses. Email{" "}
        <a href={`mailto:${EMAIL}?subject=Privacy%20request`}>{EMAIL}</a> with
        enough context to identify the relevant record. Rights may be limited by
        applicable law.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children, security, and external links",
    content: (
      <>
        <p>
          The website and service are not directed to children under 13.
          Reasonable safeguards are used, but no website, email, or external
          platform can guarantee absolute security.
        </p>
        <p>
          Links to Etsy, Instagram, Facebook, extension services, and other
          sources lead to independent services with their own policies.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Changes and contact",
    content: (
      <p>
        This notice will be updated when the website’s actual technology or
        legal obligations change. Privacy questions and requests can be sent to{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      summary="A plain language account of what this website does today and what must change before analytics or advertising is activated."
      sections={sections}
    />
  );
}
