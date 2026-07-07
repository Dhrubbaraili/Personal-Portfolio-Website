import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "AI marketing, automation, SEO, branding, content, lead generation, and consulting services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Premium, modular services built for AI-driven growth."
        description="Choose a focused engagement or combine multiple service areas into a strategic growth system."
        icon={<Sparkles className="h-4 w-4" />}
      />

      <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] py-16">
        <SectionHeading
          eyebrow="Offerings"
          title="Everything is designed to be clear, elegant, and scalable."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/contact">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
