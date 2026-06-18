"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";
import WovenPattern from "./WovenPattern";

export default function Projects() {
  return (
    <section id="realisations" className="bg-ink-soft px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
          Réalisations
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-sand sm:text-5xl">
          Une galerie qui grandit à chaque projet.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-sand-dim">
          Les cartes ci-dessous sont des emplacements réservés — remplace-les
          par tes vrais projets dans{" "}
          <code className="rounded bg-ink px-1.5 py-0.5 font-mono text-xs text-gold">
            data/content.js
          </code>{" "}
          dès que tu as des visuels à montrer.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl border border-ink-line bg-ink"
            >
              <div className="relative aspect-[4/3] border-b border-ink-line">
                <WovenPattern
                  seed={project.seed}
                  rows={6}
                  cols={6}
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-gold">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-sand">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-dim">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}