"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const items = ["1", "2", "3", "4", "5"] as const;

export default function FAQ() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<string | null>("1");
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-navy md:text-4xl">
          {t("title")}
        </h2>
        <div className="space-y-3">
          {items.map((id, i) => (
            <motion.div
              key={id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <button
                type="button"
                onClick={() => setOpen(open === id ? null : id)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-navy"
              >
                {t(`items.${id}.q`)}
                <span className="text-brand">{open === id ? "−" : "+"}</span>
              </button>
              {open === id && (
                <div className="border-t border-slate-100 px-5 py-4 text-sm text-slate-600">
                  {t(`items.${id}.a`)}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
