import { identity, contact } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-sand-dim">
          © {new Date().getFullYear()} {identity.name} — {identity.brand}
        </p>
        <p className="font-mono text-xs text-sand-dim">{identity.location}</p>
      </div>
    </footer>
  );
}