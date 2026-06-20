"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, Mail, Send } from "lucide-react";
import { contact, quoteOptions } from "@/data/content";

const initialForm = {
  name: "",
  contactInfo: "",
  serviceType: quoteOptions.serviceTypes[0],
  budget: quoteOptions.budgets[0],
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const lines = [
      `Bonjour, je m'appelle ${form.name || "—"}.`,
      `Service souhaité : ${form.serviceType}`,
      `Budget estimé : ${form.budget}`,
      form.message ? `Détails : ${form.message}` : null,
      `Pour me répondre : ${form.contactInfo || "—"}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${contact.whatsappNumber}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="devis" className="bg-ink-soft px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
            Devis
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-sand sm:text-5xl">
            Parlons de votre projet.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-sand-dim">
            Remplis ce formulaire : il ouvre WhatsApp avec un message déjà
            préparé, que tu peux relire et modifier avant de l&rsquo;envoyer.
            Tu préfères un contact direct&nbsp;? Utilise les liens ci-dessous.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-mono text-sm text-sand-dim transition-colors hover:text-gold"
              >
                <MessageCircle className="h-5 w-5 text-gold" />
                {contact.whatsappDisplay}
              </a>
              {contact.whatsappAltDisplay && (
                <span className="pl-8 font-mono text-xs text-sand-dim/70">
                  ou {contact.whatsappAltDisplay}
                </span>
              )}
            </div>
            
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm text-sand-dim transition-colors hover:text-gold"
            >
              <Instagram className="h-5 w-5 text-gold" />
              {contact.instagramHandle}
            </a>
            {contact.email && (
              
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 font-mono text-sm text-sand-dim transition-colors hover:text-gold"
              >
                <Mail className="h-5 w-5 text-gold" />
                {contact.email}
              </a>
            )}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border border-ink-line bg-ink p-8"
        >
          <Field label="Nom">
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full rounded-lg border border-ink-line bg-ink-soft px-4 py-3 text-sand placeholder:text-sand-dim/60 focus:border-gold"
              placeholder="Ton nom"
            />
          </Field>

          <Field label="Téléphone ou email">
            <input
              required
              type="text"
              value={form.contactInfo}
              onChange={(e) => update("contactInfo", e.target.value)}
              className="w-full rounded-lg border border-ink-line bg-ink-soft px-4 py-3 text-sand placeholder:text-sand-dim/60 focus:border-gold"
              placeholder="Comment te répondre ?"
            />
          </Field>

          <Field label="Type de service">
            <select
              value={form.serviceType}
              onChange={(e) => update("serviceType", e.target.value)}
              className="w-full rounded-lg border border-ink-line bg-ink-soft px-4 py-3 text-sand focus:border-gold"
            >
              {quoteOptions.serviceTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Budget estimé">
            <select
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className="w-full rounded-lg border border-ink-line bg-ink-soft px-4 py-3 text-sand focus:border-gold"
            >
              {quoteOptions.budgets.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Détails du projet">
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="w-full resize-none rounded-lg border border-ink-line bg-ink-soft px-4 py-3 text-sand placeholder:text-sand-dim/60 focus:border-gold"
              placeholder="Décris ton projet en quelques lignes..."
            />
          </Field>

          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:bg-gold-soft"
          >
            Envoyer via WhatsApp
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-wider text-sand-dim">
        {label}
      </span>
      {children}
    </label>
  );
}
