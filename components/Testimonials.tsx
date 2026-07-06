"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const reviews = ["1", "2", "3"] as const;

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const reduce = useReducedMotion();

  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">{t("eyebrow")}</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">{t("title")}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((id, i) => (
            <motion.blockquote
              key={id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex gap-0.5 text-amber-400">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-600">&ldquo;{t(`items.${id}.text`)}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand">
                  {t(`items.${id}.initials`)}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-navy">{t(`items.${id}.name`)}</cite>
                  <p className="text-xs text-slate-500">{t(`items.${id}.role`)}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
