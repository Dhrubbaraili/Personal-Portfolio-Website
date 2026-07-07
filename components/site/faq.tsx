"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[24px] border border-white/60 bg-white/60 backdrop-blur-2xl"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-foreground md:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-[#5A6166] transition duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-5 pb-4 text-sm leading-6 text-foreground/70"
                >
                  {item.answer}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
