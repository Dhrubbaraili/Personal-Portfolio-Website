import type { Metadata } from "next";
import Image from "next/image";
import { Bot, Compass, LineChart, Sparkles } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Timeline } from "@/components/site/timeline";
import { Skills } from "@/components/site/skills";
import { Card, CardContent } from "@/components/ui/card";
import { visuals } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Dhrub Baraili, his mission, experience, and AI-driven approach to marketing.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A premium marketing consultant focused on clarity, intelligence, and growth."
        description="Dhrub Baraili helps brands adopt AI-powered marketing systems without losing the human polish that makes them memorable."
        icon={<Sparkles className="h-4 w-4" />}
      />

      <section className="mx-auto grid w-[min(1120px,calc(100%-1.25rem))] gap-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-white/70 bg-white/60">
          <CardContent className="space-y-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Professional Introduction</p>
              <div className="mt-3 space-y-4 text-sm leading-7 text-foreground/70">
                <p>
                  Based in Kathmandu, Nepal, I combine AI, marketing strategy, automation, and premium positioning to help modern businesses look premium and perform better.
                </p>
                <p>
                  Before transitioning into AI marketing and consulting, I spent more than 18 years working in the clerical field within Nepal&apos;s defense sector, where I developed strong operational, organizational, and leadership experience.
                </p>
                <p>
                  I also built the YouTube channel &quot;eFootball Galacticos&quot;, which has grown to more than 170K+ subscribers.
                </p>
                <p>
                  The same brand has also built communities of 16K+ followers on TikTok and 12K+ followers on Instagram.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Bot, label: "AI-first", text: "Strategic use of intelligent tools", image: visuals.aiFirst },
                { icon: Compass, label: "Focused", text: "Clear direction and execution", image: visuals.focused },
                { icon: LineChart, label: "Growth-led", text: "Built around measurable progress", image: visuals.growthLed },
              ].map((item) => (
                <div key={item.label} className="overflow-hidden rounded-[22px] border border-white/60 bg-white/50">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 p-4">
                    <item.icon className="h-5 w-5 text-primary" />
                    <div className="text-sm font-semibold">{item.label}</div>
                    <div className="text-xs leading-5 text-foreground/60">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Mission</p>
              <p className="mt-3 text-sm leading-7 text-foreground/70">
                To make advanced marketing systems accessible, elegant, and effective for ambitious brands.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Vision</p>
              <p className="mt-3 text-sm leading-7 text-foreground/70">
                To become a trusted strategic partner for businesses that want AI-enhanced growth without the generic noise.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/70 bg-white/60">
          <CardContent>
            <SectionHeading eyebrow="Skills" title="Capabilities and confidence across the stack." />
            <div className="mt-8">
              <Skills />
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] py-6">
        <SectionHeading
          eyebrow="Timeline"
          title="A career path shaped around marketing systems and premium delivery."
        />
        <div className="mt-10">
          <Timeline />
        </div>
      </section>
    </>
  );
}
