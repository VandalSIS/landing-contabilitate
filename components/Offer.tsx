"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Offer() {
  const t = useTranslations("offer");
  const reduce = useReducedMotion();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-brand to-brandDark p-10 text-center text-white shadow-xl md:p-14"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-lg text-blue-100">{t("desc")}</p>
          <motion.a
            href="#contact"
            whileHover={reduce ? {} : { scale: 1.03 }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-brand shadow-lg"
          >
            {t("cta")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
