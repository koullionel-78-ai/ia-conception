import { identity } from "@/data/content";
import WovenPattern from "./WovenPattern";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-24"
    >
      <WovenPattern
        seed={7}
        rows={11}
        cols={16}
        animated
        className="absolute inset-0 h-full w-full opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/75 to-ink" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
          {identity.brand} — studio créatif &amp; technique
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-sand sm:text-6xl md:text-7xl">
          {identity.name}
        </h1>

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 font-mono text-sm uppercase tracking-wide text-sand-dim">
          {identity.roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              {role}
              {i < identity.roles.length - 1 && (
                <span className="text-gold">•</span>
              )}
            </span>
          ))}
        </div>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-sand-dim">
          {identity.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#services"
            className="rounded-full bg-gold px-7 py-3 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:bg-gold-soft"
          >
            Voir mes services
          </a>
          <a
            href="#devis"
            className="rounded-full border border-gold/60 px-7 py-3 font-mono text-xs uppercase tracking-wider text-gold transition-colors hover:bg-gold/10"
          >
            Demander un devis
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-float font-mono text-[11px] uppercase tracking-widest text-sand-dim/70 sm:block">
        Faire défiler ↓
      </div>
    </section>
  );
}