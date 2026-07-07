"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Youtube } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { visuals } from "@/lib/site";

const platforms = [
  {
    title: "eFootball Galacticos",
    label: "YouTube",
    href: "https://www.youtube.com/@efootballgalacticos./featured",
    image: visuals.social,
    icon: Youtube,
    stats: ["170,000+ Subscribers", "Football & Gaming Content"],
    description:
      "Built an engaged community through consistent content creation, audience analysis, and long-term growth strategies.",
  },
  {
    title: "Instagram Community",
    label: "Instagram",
    href: "https://www.instagram.com/efootballgalacticos?igsh=MWNycXhicmM4cDhjNQ%3D%3D&utm_source=qr",
    image: visuals.content,
    icon: Instagram,
    stats: ["12,000+ Followers", "Football-related content"],
    description:
      "Sharing football-related content with an active and engaged audience built through content planning and organic growth.",
  },
  {
    title: "TikTok Community",
    label: "TikTok",
    href: "https://www.tiktok.com/@efootball.galcticos?_t=ZS-8wSEVUa7Xpi&_r=1",
    image: visuals.growthLed,
    icon: TikTokIcon,
    stats: ["16,000+ Followers", "Short-form football content"],
    description:
      "Experience creating content that performs well on modern social platforms with consistent audience engagement.",
  },
] as const;

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M14.5 3c.5 2.8 2.2 4.4 5 4.7V11c-1.8 0-3.4-.5-5-1.4v5.2c0 3.5-2.9 6.2-6.4 6.2S1.7 18.2 1.7 14.7s2.9-6.2 6.4-6.2c.4 0 .8 0 1.2.1v3.1c-.4-.1-.8-.2-1.2-.2-1.8 0-3.4 1.4-3.4 3.2 0 1.9 1.6 3.4 3.4 3.4s3.5-1.4 3.5-3.4V3h3Z"
      />
    </svg>
  );
}

export function DigitalContentExperience() {
  return (
    <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] py-14">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="rounded-[34px] border border-white/70 bg-white/55 p-6 shadow-[0_18px_60px_rgba(25,70,25,.08)] backdrop-blur-2xl md:p-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#5A6166]">
            Digital Content Experience
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            Building and Growing Real Online Communities Through Content Strategy
          </h2>
          <p className="mt-4 text-base leading-8 text-foreground/70 md:text-lg">
            Beyond AI marketing, I have built and managed successful digital communities across multiple social media
            platforms. Creating and growing these communities has strengthened my expertise in content strategy,
            audience growth, analytics, engagement, branding, and platform algorithms. These real-world experiences
            complement my AI marketing knowledge and help me create practical, data-driven marketing strategies for
            businesses.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <motion.article
              key={platform.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <Card className="group flex h-full overflow-hidden border-white/70 bg-white/60 transition duration-300 hover:shadow-[0_24px_70px_rgba(76,175,80,.16)]">
                <div className="relative min-h-[260px] flex-1 overflow-hidden">
                  <Image
                    src={platform.image}
                    alt={platform.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-xl">
                    <platform.icon className="h-3.5 w-3.5" />
                    {platform.label}
                  </div>
                </div>
                <CardContent className="flex h-full flex-col p-5">
                  <h3 className="text-xl font-semibold">{platform.title}</h3>
                  <div className="mt-3 space-y-2">
                    {platform.stats.map((stat) => (
                      <div
                        key={stat}
                        className="inline-flex rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-medium text-foreground/70"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-foreground/70">{platform.description}</p>
                  <Button asChild className="mt-6 w-full">
                    <Link href={platform.href} target="_blank" rel="noreferrer">
                      Visit {platform.label} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-white/70 bg-white/60 p-5">
          <p className="text-sm leading-7 text-foreground/70">
            Although these platforms primarily feature football and gaming content, the experience of building large
            online communities has provided me with valuable expertise in audience growth, content strategy, analytics,
            branding, and digital engagement. I apply these same proven principles when helping businesses grow
            through AI-powered marketing.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
