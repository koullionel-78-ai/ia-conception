"use client";

import { motion } from "framer-motion";
import { Sparkles, LayoutTemplate, Clapperboard, Code2 } from "lucide-react";
import { services } from "@/data/content";
import WovenPattern from "./WovenPattern";

const icons = { Sparkles, LayoutTemplate, Clapperboard, Code2 };

export default function Services() {
  return (
    <section id="services" className="bg-ink px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
          Ce que je fais
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-sand sm:text-5xl">
          Quatre métiers, une seule promesse&nbsp;: une image qui marque.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-ink-line bg-ink-soft p-8 transition-colors hover:border-clay/60"
              >
                <WovenPattern
                  seed={service.seed}
                  rows={4}
                  cols={4}
                  className="absolute -right-6 -top-6 h-28 w-28 opacity-40 transition-opacity group-hover:opacity-70"
                />
                <Icon className="relative z-10 h-7 w-7 text-clay-soft" strokeWidth={1.5} />
                <h3 className="relative z-10 mt-5 font-display text-xl font-semibold text-sand">
                  {service.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-sand-dim">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
