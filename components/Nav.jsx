"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { nav, identity } from "@/data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#accueil"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo-creAitive.png"
            alt="Logo CreAitive Studio"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="hidden font-mono text-xs uppercase tracking-wider text-gold sm:inline">
            {identity.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-wider text-sand-dim transition-colors hover:text-sand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#devis"
          className="hidden rounded-full bg-clay px-5 py-2 font-mono text-xs uppercase tracking-wider text-sand transition-colors hover:bg-clay-soft md:inline-block"
        >
          Demander un devis
        </a>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-sand md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-line bg-ink px-6 py-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm uppercase tracking-wider text-sand-dim transition-colors hover:text-sand"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#devis"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-clay px-5 py-2 text-center font-mono text-xs uppercase tracking-wider text-sand"
          >
            Demander un devis
          </a>
        </nav>
      )}
    </header>
  );
}
