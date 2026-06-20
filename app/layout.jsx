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
      <body className="font-body text-sand antialiased bg-gradient-to-br from-purple-950 via-purple-900 to-blue-900">
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-950 via-purple-900 to-blue-900" />
        <div className="fixed inset-0 -z-10 opacity-30 bg-gradient-radial from-purple-500/20 via-transparent to-transparent" />
        {children}
      </body>
    </html>
  );
}
