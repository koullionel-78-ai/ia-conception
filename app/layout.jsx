import "./globals.css";
import { identity } from "@/data/content";

export const metadata = {
  title: `${identity.brand} — ${identity.name}`,
  description: identity.tagline,
  metadataBase: undefined,
  openGraph: {
    title: `${identity.brand} — ${identity.name}`,
    description: identity.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="font-body bg-ink text-sand antialiased">{children}</body>
    </html>
  );
}
