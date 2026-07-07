import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Facebook, Instagram, Linkedin, Sparkles, Youtube, Wrench } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { FAQAccordion } from "@/components/site/faq";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return notFound();

  const socialPlatforms =
    service.slug === "social-media"
      ? [
          { icon: Facebook, label: "Facebook" },
          { icon: Instagram, label: "Instagram" },
          { icon: Youtube, label: "YouTube" },
          { icon: TikTokIcon, label: "TikTok" },
          { icon: Linkedin, label: "LinkedIn" },
        ]
      : [];

  return (
    <>
      <PageHero
        eyebrow="Service Detail"
        title={service.title}
        description={service.description}
        icon={<Sparkles className="h-4 w-4" />}
      />

      {service.image ? (
        <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] py-8">
          <Card className="overflow-hidden border-white/70 bg-white/60 p-0">
            <div className="relative aspect-[21/9] min-h-[240px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1120px"
                className="object-cover"
                priority
              />
            </div>
          </Card>
        </section>
      ) : null}

      <section className="mx-auto grid w-[min(1120px,calc(100%-1.25rem))] gap-5 py-16 lg:grid-cols-2">
        <Card className="border-white/70 bg-white/60">
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">Benefits</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="inline-flex items-center gap-2 rounded-2xl bg-[#e8f5e9] px-4 py-3 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#5A6166]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">Process</p>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-foreground/70">
                {service.process.map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/70 bg-white/60">
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">
                <Wrench className="h-4 w-4" />
                Tools
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm text-foreground/70">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {service.slug === "social-media" ? (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">Platforms</p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {socialPlatforms.map((platform) => (
                    <div
                      key={platform.label}
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm font-medium text-foreground/75"
                    >
                      <platform.icon className="h-4 w-4 text-[#5A6166]" />
                      {platform.label}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">FAQ</p>
              <div className="mt-4">
                <FAQAccordion items={service.faqs} />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-1.25rem))] pb-20">
        <Card className="border-white/70 bg-gradient-to-r from-white/75 to-[#e8f5e9]/70">
          <CardContent className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">Next Step</p>
              <h2 className="mt-3 text-2xl font-semibold">Ready to discuss {service.title.toLowerCase()}?</h2>
            </div>
            <Button asChild>
              <Link href="/contact">
                Contact Now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
