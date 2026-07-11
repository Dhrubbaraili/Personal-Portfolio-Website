import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/site/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { site, visuals } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a consultation with Dhrub Baraili for AI marketing, automation, SEO, branding, and growth.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ sent?: string }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s work together to grow your business with smart AI-powered marketing solutions that deliver real results."
        description="Use the form to start a conversation about strategy, automation, SEO, branding, or a long-term consulting partnership."
        icon={<Sparkles className="h-4 w-4" />}
      />

      <section className="mx-auto grid w-[min(1120px,calc(100%-1.25rem))] gap-5 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="border-white/70 bg-white/60">
          <CardContent>
            <ContactForm initialSubmitted={resolvedSearchParams?.sent === "1"} />
            <div className="mt-8 grid gap-3 text-sm text-foreground/70 sm:grid-cols-3">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white/65 px-4 py-3">
                <Phone className="h-4 w-4 text-[#5A6166]" /> {site.phone}
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white/65 px-4 py-3">
                <Mail className="h-4 w-4 text-[#5A6166]" /> {site.email}
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white/65 px-4 py-3">
                <MapPin className="h-4 w-4 text-[#5A6166]" /> {site.location}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-white/70 bg-white/50 transition duration-300 hover:shadow-[0_0_0_1px_rgba(47,125,50,.20),0_0_0_10px_rgba(47,125,50,.06),0_30px_80px_rgba(47,125,50,.16)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4caf50]/10 via-transparent to-white/0" />
          <CardContent className="relative h-full min-h-[700px] p-0">
            <div className="pointer-events-none absolute inset-3 z-10 rounded-[28px] border border-transparent transition duration-300 group-hover:border-[#2f7d32]/35 group-hover:shadow-[0_0_0_1px_rgba(47,125,50,.12),0_0_40px_rgba(47,125,50,.16)]" />
            <Image
              src={visuals.contact}
              alt="Business consultation and client meeting illustration"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition duration-300 group-hover:scale-[1.01]"
              priority
            />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
