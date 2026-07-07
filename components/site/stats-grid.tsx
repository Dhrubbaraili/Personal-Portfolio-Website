"use client";

import { motion } from "framer-motion";

import { stats } from "@/lib/site";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.08, duration: 0.45 }}
          className="rounded-[24px] border border-white/60 bg-white/60 p-5 text-center backdrop-blur-2xl"
        >
          <div className="text-3xl font-semibold text-foreground md:text-4xl">
            {stat.value}+
          </div>
          <div className="mt-2 text-sm font-medium text-foreground/65">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
