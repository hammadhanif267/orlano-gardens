import { buildMetadata } from "@/lib/metadata";
import TermsAndConditionsPage from "../terms-and-conditions/page";

export const metadata = buildMetadata({
  title: "Terms of Service | Orlano Gardens",
  description: "Terms governing the Orlano Gardens website inquiry flow and remote digital outdoor design service.",
  path: "/terms-of-service"
});

export default function Page() {
  return <TermsAndConditionsPage />;
}
