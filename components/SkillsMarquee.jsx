import { skills } from "@/data/content";

export default function SkillsMarquee() {
  const doubled = [...skills, ...skills];

  return (
    <div className="overflow-hidden border-y border-ink-line bg-ink-soft py-4">
      <div className="flex w-max animate-marquee gap-10">
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex items-center gap-10 font-mono text-sm uppercase tracking-wider text-sand-dim"
          >
            {skill}
            <span className="text-clay">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
