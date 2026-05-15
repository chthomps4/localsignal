import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Local Signal Websites. Tell us about your project and we'll reply within 24 hours with a plan and a clear price.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Contact | Local Signal Websites",
    description:
      "Tell us about your project. We'll reply within 24 hours with a plan and a clear price.",
    url: absoluteUrl("/contact"),
    siteName: "Local Signal Websites",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
