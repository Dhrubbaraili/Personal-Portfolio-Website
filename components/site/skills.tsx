"use client";

import { motion } from "framer-motion";

import { skills } from "@/lib/site";

export function Skills() {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: index * 0.06 }}
        >
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">{skill.label}</span>
            <span className="text-foreground/60">{skill.value}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/70">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.value}%` }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-[#4caf50] to-[#7edc7f]"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
