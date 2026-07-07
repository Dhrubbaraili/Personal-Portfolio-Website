"use client";

import { motion } from "framer-motion";
import { Quote, Star, MessageCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

const avatarTones = [
  "from-[#2f7d32] to-[#86c66b]",
  "from-[#5A6166] to-[#98a3a8]",
  "from-[#417d4c] to-[#b7d97c]",
  "from-[#7d6a2f] to-[#f5d96b]",
  "from-[#355f42] to-[#7fc08f]",
  "from-[#304d5a] to-[#8cbad6]",
];

export function Testimonials() {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
      {testimonials.map((testimonial, index) => {
        const initials = testimonial.name
          .split(" ")
          .map((part) => part[0])
          .slice(0, 2)
          .join("");

        return (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06, duration: 0.45 }}
          >
            <Card className="h-full border-white/70 bg-white/60 transition duration-300 hover:shadow-[0_24px_70px_rgba(76,175,80,.12)]">
              <CardContent className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-semibold text-white shadow-glow",
                        avatarTones[index % avatarTones.length]
                      )}
                    >
                      {initials}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-foreground/60">{testimonial.company}</div>
                    </div>
                  </div>
                  <Quote className="h-5 w-5 text-[#5A6166]" />
                </div>

                <div className="flex gap-1 text-[#f5d96b]">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm leading-7 text-foreground/70">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          </motion.article>
        );
      })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="rounded-[28px] border border-white/70 bg-white/60 p-5 backdrop-blur-2xl"
      >
        <p className="text-sm leading-7 text-foreground/70">
          I consider it a privilege to work with every client. Earning their trust and positive feedback is one of the most rewarding parts of what I do.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#DC2626]">
            <MessageCircle className="h-3.5 w-3.5" />
            Marketing Joke
          </span>
          <p className="text-sm italic text-foreground/60">
            My campaigns and I have something in common: we both perform better with clear goals and strong follow-through.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
