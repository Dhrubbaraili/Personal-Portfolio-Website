"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatsGrid } from "@/components/site/stats-grid";
import { site, visuals } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto grid w-[min(1120px,calc(100%-1.25rem))] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/65 px-4 py-2 text-sm font-medium text-foreground/75 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-[#5A6166]" />
            Premium AI Marketing Consultant in Kathmandu
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.55 }}
            className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-balance text-foreground md:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-[#2f7d32]">
              Dhrub Baraili
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70 md:text-xl"
          >
            {site.title}
            <span className="mt-2 block">
              Let&apos;s work together to grow your business with smart AI-powered marketing solutions that deliver real results.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/services">View Services</Link>
            </Button>
          </motion.div>

          <div className="mt-10">
            <StatsGrid />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[600px] md:min-h-[620px]"
        >
          <div className="absolute inset-x-0 top-14 mx-auto h-[520px] w-[520px] rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-x-0 top-20 mx-auto h-[430px] w-[430px] rounded-full bg-[#b7e6bb]/45 blur-3xl animate-pulse" />
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="relative h-full w-full">
              <Image
                src={visuals.hero}
                alt="Premium AI marketing and business growth illustration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-bottom -translate-y-4 md:-translate-y-8 drop-shadow-[0_40px_90px_rgba(40,110,50,.22)]"
              />
            </div>
          </div>
          <div className="absolute left-4 top-6 rounded-full border border-[#2f7d32]/40 bg-[#2f7d32] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FACC15] shadow-[0_0_0_1px_rgba(245,217,107,.12),0_14px_35px_rgba(47,125,50,.28)] backdrop-blur-xl">
            AI Strategy
          </div>
          <div className="absolute right-4 top-20 rounded-full border border-[#2f7d32]/40 bg-[#2f7d32] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FACC15] shadow-[0_0_0_1px_rgba(245,217,107,.12),0_14px_35px_rgba(47,125,50,.28)] backdrop-blur-xl">
            Premium Growth
          </div>
        </motion.div>
      </div>
    </section>
  );
}
