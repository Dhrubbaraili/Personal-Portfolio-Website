"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function QuoteCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/65 bg-white/60 p-8 shadow-[0_18px_60px_rgba(25,70,25,.08)] backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#4caf50]/10 via-transparent to-white/0 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-[32px] border border-transparent bg-[linear-gradient(120deg,rgba(76,175,80,.9),rgba(232,245,233,.3),rgba(102,187,106,.65))] bg-[length:200%_200%] p-[1px] opacity-30 animate-shimmer [mask:linear-gradient(#fff,transparent)]" />
      <div className="relative flex items-start gap-4">
        <div className="rounded-2xl bg-[#e8f5e9] p-3 text-[#5A6166]">
          <Quote className="h-6 w-6" />
        </div>
        <div>
          <p className="text-lg leading-8 text-foreground/80 md:text-2xl md:leading-10">
            &quot;Your brand is what other people say about you when you&apos;re not in the room.&quot;
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#5A6166]/90">
            Jeff Bezos
          </p>
        </div>
      </div>
    </motion.div>
  );
}
