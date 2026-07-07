import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, Globe2, Layers3, Mail, Search, ShieldCheck, Sparkles } from "lucide-react";

import { HomeHero } from "@/components/site/home-hero";
import { QuoteCard } from "@/components/site/quote-card";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { BlogCard } from "@/components/site/blog-card";
import { Testimonials } from "@/components/site/testimonials";
import { DigitalContentExperience } from "@/components/site/digital-content-experience";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
  description: site.description,
};

const highlights = [
  { icon: Sparkles, title: "Premium brand presence", text: "Elegant positioning and visual clarity that inspire trust." },
  { icon: Bot, title: "AI-powered efficiency", text: "Workflows, automations, and systems that reduce friction." },
  { icon: Search, title: "Search visibility", text: "SEO built for sustainable discoverability and growth." },
  { icon: Globe2, title: "Business transformation", text: "Strategy that connects marketing, content, and conversion." },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] py-20">
        <QuoteCard />
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] py-10">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="An AI-inspired growth partner with strategic depth and premium execution."
          description="I help brands build marketing systems that feel modern, intelligent, and dependable from the first impression through the final conversion."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <Card key={item.title} className="h-full border-white/70 bg-white/60">
              <CardContent className="pt-0">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5e9] text-[#5A6166]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/70">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] py-14">
        <SectionHeading
          eyebrow="About"
          title="Professional introduction, mission, and growth philosophy."
          description="A concise snapshot of the thinking behind the brand, the work, and the way results are delivered."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-white/70 bg-white/60">
            <CardContent className="space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">Mission</p>
                <p className="mt-3 text-sm leading-7 text-foreground/70">
                  Help businesses communicate clearly, automate intelligently, and grow with systems that feel premium and sustainable.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">Vision</p>
                <p className="mt-3 text-sm leading-7 text-foreground/70">
                  Build a future-ready marketing practice where AI supports better decisions, stronger branding, and sharper execution.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">Experience</p>
                <p className="mt-3 text-sm leading-7 text-foreground/70">
                  Years of hands-on work in strategy, SEO, lead generation, automation, and consulting for businesses that want measurable progress.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/70 bg-white/60">
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <BrainCircuit className="h-5 w-5 text-[#5A6166]" />
                <h3 className="text-lg font-semibold">Core Approach</h3>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-foreground/70">
                <li>1. Strategy before tactics</li>
                <li>2. Clarity before complexity</li>
                <li>3. Automation where it truly helps</li>
                <li>4. Consistent measurement and refinement</li>
              </ul>
              <Button asChild className="mt-4 w-full sm:w-auto">
                <Link href="/about">
                  Explore About Page <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] py-14">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end AI marketing, automation, SEO, and consulting."
          description="Everything is designed as a premium, modular system that can stand alone or work together."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="secondary">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] py-14">
        <SectionHeading
          eyebrow="Process"
          title="A simple premium workflow built for clarity."
          description="Every engagement moves through a focused system that keeps work efficient and the experience polished."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            { icon: Mail, title: "Discover", text: "Understand goals, audience, and constraints." },
            { icon: Layers3, title: "Design", text: "Shape the strategy, systems, and priorities." },
            { icon: ShieldCheck, title: "Deploy", text: "Launch with clean execution and quality control." },
            { icon: ArrowRight, title: "Optimize", text: "Measure results and keep improving the system." },
          ].map((step) => (
            <Card key={step.title} className="border-white/70 bg-white/60">
              <CardContent>
                <step.icon className="h-5 w-5 text-[#5A6166]" />
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/70">{step.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] py-14">
        <SectionHeading
          eyebrow="Blog"
          title="Thoughtful articles on AI marketing, automation, SEO, and branding."
          description="A dynamic blog structure built to support ongoing insights and search visibility."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] py-14">
        <SectionHeading
          eyebrow="Testimonials"
          title="Client feedback that reflects trust, clarity, and measurable growth."
          description="A few voices from businesses that value thoughtful strategy and premium execution."
        />
        <div className="mt-10">
          <Testimonials />
        </div>
      </section>

      <DigitalContentExperience />

      <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] pb-20 pt-6">
        <Card className="border-white/70 bg-gradient-to-r from-white/75 to-[#e8f5e9]/60">
          <CardContent className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">Ready to begin?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Let&apos;s design a premium growth system for your brand.
              </h2>
              <p className="mt-3 text-sm leading-7 text-foreground/70">
                If you want a brand presence that feels modern, trustworthy, and intelligent, the next step is a short consultation.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
