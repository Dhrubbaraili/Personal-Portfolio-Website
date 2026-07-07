"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MessageCircle, PenLine, Search, Sparkles, Target, Users, Workflow } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ServiceItem } from "@/lib/site";

const icons = {
  sparkles: Sparkles,
  workflow: Workflow,
  search: Search,
  target: Target,
  users: Users,
  pen: PenLine,
  badge: BadgeCheck,
  "message-circle": MessageCircle,
} as const;

export function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      whileHover={{ y: -6 }}
    >
      <Card className="group h-full overflow-hidden border-white/70 bg-white/60 transition duration-300 hover:shadow-[0_24px_70px_rgba(76,175,80,.18)]">
        {service.image ? (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/50">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
          </div>
        ) : null}
        <CardHeader>
          <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5e9] text-[#5A6166] shadow-inner">
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle>{service.title}</CardTitle>
          <CardDescription>{service.short}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-foreground/70">{service.description}</p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#5A6166] transition group-hover:gap-3"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
