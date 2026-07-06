"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { images } from "@/lib/images";

const points = ["1", "2", "3", "4", "5", "6"] as const;

export default function WhyUs() {
  const t = useTranslations("whyUs");
  const reduce = useReducedMotion();

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={images.whyUsMain}
                alt={t("imageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl md:block lg:-right-8">
              <div className="relative aspect-square">
                <Image
                  src={images.whyUsSecondary}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>
            <div className="absolute -left-4 top-8 rounded-2xl bg-navy px-5 py-4 text-white shadow-xl">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-xs text-blue-200">{t("badge")}</p>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">{t("eyebrow")}</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">{t("title")}</h2>
            <p className="mt-4 text-lg text-slate-600">{t("subtitle")}</p>
            <ul className="mt-8 space-y-4">
              {points.map((id, i) => (
                <motion.li
                  key={id}
                  initial={reduce ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50/80 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
                    {id}
                  </span>
                  <div>
                    <p className="font-semibold text-navy">{t(`points.${id}.title`)}</p>
                    <p className="mt-0.5 text-sm text-slate-600">{t(`points.${id}.desc`)}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
