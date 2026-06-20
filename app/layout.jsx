import "./globals.css";
import { identity } from "@/data/content";

export const metadata = {
  title: `${identity.brand} — ${identity.name}`,
  description: identity.tagline,
  icons: {
    icon: "/logo-creAitive.png",
  },
  openGraph: {
    title: `${identity.brand} — ${identity.name}`,
    description: identity.tagline,
    type: "website",
    images: ["/logo-creAitive.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="font-body text-sand antialiased bg-ink">
        {children}
      </body>
    </html>
  );
}
