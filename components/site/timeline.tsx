"use client";

import { motion } from "framer-motion";

import { timeline } from "@/lib/site";

export function Timeline() {
  return (
    <div className="space-y-4">
      {timeline.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: index * 0.08, duration: 0.45 }}
          className="relative overflow-hidden rounded-[26px] border border-white/60 bg-white/60 p-5 backdrop-blur-2xl"
        >
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#DC2626]">
            {item.year}
          </div>
          <h3 className="text-lg font-semibold text-[#DC2626]">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-foreground/70">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
