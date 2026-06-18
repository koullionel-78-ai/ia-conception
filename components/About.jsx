"use client";

import { motion } from "framer-motion";
import { about, identity } from "@/data/content";
import WovenPattern from "./WovenPattern";

export default function About() {
  const initials = identity.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section id="a-propos" className="bg-ink px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-ink-line bg-ink-soft"
        >
          <WovenPattern seed={11} rows={9} cols={9} className="absolute inset-0 h-full w-full opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-7xl font-semibold text-sand">
              {initials}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
            À propos
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-sand sm:text-5xl">
            Entre les maths, le code et le visuel.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-sand-dim">
            {about.bio}
          </p>

          <dl className="mt-8 divide-y divide-ink-line border-t border-ink-line">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8">
                <dt className="w-48 shrink-0 font-mono text-xs uppercase tracking-wider text-sand-dim">
                  {fact.label}
                </dt>
                <dd className="text-sand">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}