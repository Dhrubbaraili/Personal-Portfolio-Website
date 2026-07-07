import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
};

export function PageHero({ eyebrow, title, description, icon, className }: Props) {
  return (
    <section className={cn("relative pt-28 md:pt-32", className)}>
      <div className="mx-auto w-[min(1120px,calc(100%-1.25rem))]">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#5A6166] backdrop-blur-xl">
          {icon}
          {eyebrow}
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/70 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
