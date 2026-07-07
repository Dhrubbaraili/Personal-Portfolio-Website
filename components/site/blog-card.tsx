"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPost } from "@/lib/site";

export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full border-white/70 bg-white/60 transition duration-300 hover:shadow-[0_24px_70px_rgba(76,175,80,.14)]">
        <CardHeader>
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#5A6166]">
            <span>{post.category}</span>
            <span className="inline-flex items-center gap-1 text-foreground/45">
              <CalendarDays className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1 text-sm text-foreground/55">
              <Clock className="h-4 w-4" /> {post.readingTime}
            </span>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5A6166]"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
