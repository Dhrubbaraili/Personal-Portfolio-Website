import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Youtube, Instagram } from "lucide-react";

import { site } from "@/lib/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/45">
      <div className="mx-auto grid w-[min(1120px,calc(100%-1.25rem))] gap-10 py-14 md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/LOGO.png"
              alt={site.name}
              width={176}
              height={72}
              className="h-11 w-auto object-contain"
            />
          </Link>
          <p className="max-w-xl text-sm leading-7 text-foreground/70">
            Premium AI-driven marketing, automation, SEO, and brand consulting designed to help modern
            businesses grow with clarity and confidence.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-foreground/70">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2">
              <Mail className="h-4 w-4 text-[#5A6166]" />
              {site.email}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2">
              <Phone className="h-4 w-4 text-[#5A6166]" />
              {site.phone}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2">
              <MapPin className="h-4 w-4 text-[#5A6166]" />
              {site.location}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">Navigation</h3>
          <div className="mt-4 grid gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]">Social</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { icon: Youtube, href: site.social.youtube, label: "YouTube" },
              { icon: Instagram, href: site.social.instagram, label: "Instagram" },
              { icon: TikTokIcon, href: site.social.tiktok, label: "TikTok" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/70 text-foreground/75 transition hover:-translate-y-0.5 hover:text-[#5A6166]"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/60 py-5">
        <div className="mx-auto flex w-[min(1120px,calc(100%-1.25rem))] flex-col gap-2 text-sm text-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Dhrub Baraili. All rights reserved.</p>
          <p>Built with premium AI-inspired UX for modern growth.</p>
        </div>
      </div>
    </footer>
  );
}

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
