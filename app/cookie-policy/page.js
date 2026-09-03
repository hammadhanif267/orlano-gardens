import LegalPage from "@/components/LegalPage";
import { buildMetadata } from "@/lib/metadata";
import { EMAIL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "Current cookie status for Orlano Gardens and the consent requirements that will apply before analytics or Google AdSense is enabled.",
  path: "/cookie-policy",
});

const sections = [
  {
    id: "meaning",
    title: "Cookies and similar technologies",
    content: (
      <p>
        Cookies, local storage, pixels, and similar technologies can remember
        information on a device, deliver core functions, measure use, prevent
        fraud, or support advertising.
      </p>
    ),
  },
  {
    id: "current",
    title: "Current status",
    content: (
      <>
        <p>
          The current static site does not install analytics or advertising
          scripts and does not set a custom preference cookie. Messages are sent
          only when a visitor chooses an external contact option such as Etsy,
          Instagram or email.
        </p>
        <p>
          The hosting provider may use essential security or delivery
          technologies under its own terms.
        </p>
      </>
    ),
  },
  {
    id: "future",
    title: "Before analytics or ads are activated",
    content: (
      <p>
        This policy will be revised to name each provider, purpose, storage
        duration, and control. Where consent is required, optional technologies
        will remain inactive until the visitor makes a valid choice. For Google
        advertising in regions that require it, Orlano Gardens will use a Google
        certified consent management platform rather than a decorative custom
        banner.
      </p>
    ),
  },
  {
    id: "google",
    title: "Google advertising disclosure",
    content: (
      <p>
        If Google AdSense is enabled, Google and participating vendors may use
        cookies or similar technologies to serve, limit, secure, and measure
        ads. Personalized advertising will only operate when the applicable
        consent and policy requirements are satisfied. Visitors may also use
        browser and Google ad settings.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Changes and contact",
    content: (
      <p>
        Revisit this page after advertising or analytics is launched. Questions
        can be sent to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    ),
  },
];

export default function CookiePage() {
  return (
    <LegalPage
      eyebrow="Legal · Cookies"
      title="Cookie Policy"
      summary="No optional analytics or advertising technology is active in the current build. This notice defines the activation boundary."
      sections={sections}
    />
  );
}
