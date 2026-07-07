"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "pt-3" : "pt-5"
      )}
    >
      <div className="mx-auto flex w-[min(1120px,calc(100%-1.25rem))] items-center justify-between rounded-full border border-white/65 bg-white/70 px-4 py-3 shadow-[0_20px_60px_rgba(25,70,25,.08)] backdrop-blur-2xl transition duration-300 md:px-6">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/LOGO.png"
            alt={site.name}
            width={176}
            height={72}
            priority
            className="h-11 w-auto object-contain md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "rounded-full border border-transparent px-4 py-2 text-sm font-medium transition duration-300 hover:scale-[1.05] hover:border-red-200 hover:bg-white/85 hover:text-red-600 hover:shadow-[0_0_0_1px_rgba(220,38,38,.12),0_14px_30px_rgba(220,38,38,.14)]",
                isActive(link.href)
                  ? "border-red-200 bg-white/90 text-red-600 shadow-[0_0_0_1px_rgba(220,38,38,.14),0_14px_30px_rgba(220,38,38,.14)]"
                  : "text-[#5A6166]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="ml-2">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/80 text-foreground lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-3 w-[min(1120px,calc(100%-1.25rem))] rounded-[28px] border border-white/65 bg-white/85 p-4 shadow-[0_20px_60px_rgba(25,70,25,.08)] backdrop-blur-2xl lg:hidden">
          <div className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "rounded-2xl border border-transparent px-4 py-3 text-sm font-medium transition duration-300 hover:scale-[1.03] hover:border-red-200 hover:bg-white hover:text-red-600 hover:shadow-[0_0_0_1px_rgba(220,38,38,.12),0_12px_24px_rgba(220,38,38,.12)]",
                  isActive(link.href)
                    ? "border-red-200 bg-white text-red-600 shadow-[0_0_0_1px_rgba(220,38,38,.12),0_12px_24px_rgba(220,38,38,.12)]"
                    : "text-[#5A6166]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
