"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const plans = ["starter", "business", "enterprise"] as const;

export default function Pricing() {
  const t = useTranslations("pricing");
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">{t("eyebrow")}</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">{t("subtitle")}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => {
            const featured = plan === "business";
            return (
              <motion.div
                key={plan}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  featured
                    ? "border-brand bg-navy text-white shadow-xl shadow-brand/20 scale-[1.02]"
                    : "border-slate-200 bg-white"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold text-white">
                    {t("popular")}
                  </span>
                )}
                <h3 className={`text-lg font-bold ${featured ? "text-white" : "text-navy"}`}>
                  {t(`plans.${plan}.name`)}
                </h3>
                <p className={`mt-1 text-sm ${featured ? "text-blue-200" : "text-slate-500"}`}>
                  {t(`plans.${plan}.desc`)}
                </p>
                <div className="my-6">
                  <span className={`text-4xl font-bold ${featured ? "text-white" : "text-navy"}`}>
                    {t(`plans.${plan}.price`)}
                  </span>
                  <span className={`text-sm ${featured ? "text-blue-200" : "text-slate-500"}`}>
                    {" "}
                    MDL/{t("month")}
                  </span>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {(["f1", "f2", "f3", "f4"] as const).map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${featured ? "text-blue-100" : "text-slate-600"}`}>
                      <span className={featured ? "text-cyan-300" : "text-brand"}>✓</span>
                      {t(`plans.${plan}.${f}`)}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                    featured
                      ? "bg-white text-navy hover:bg-blue-50"
                      : "bg-brand text-white hover:bg-brandDark"
                  }`}
                >
                  {t("cta")}
                </a>
              </motion.div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">{t("note")}</p>
      </div>
    </section>
  );
}
