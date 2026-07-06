"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const steps = ["1", "2", "3"] as const;

export default function Process() {
  const t = useTranslations("process");
  const reduce = useReducedMotion();

  return (
    <section id="process" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">{t("subtitle")}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                {step}
              </div>
              <h3 className="text-lg font-semibold text-navy">{t(`steps.${step}.title`)}</h3>
              <p className="mt-2 text-sm text-slate-600">{t(`steps.${step}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
