"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { images } from "@/lib/images";

const items = [
  { key: "1", img: images.showcase[0] },
  { key: "2", img: images.showcase[1] },
  { key: "3", img: images.showcase[2] },
  { key: "4", img: images.showcase[3] },
] as const;

export default function Showcase() {
  const t = useTranslations("showcase");
  const reduce = useReducedMotion();

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">{t("eyebrow")}</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {items.map((item, i) => (
            <motion.article
              key={item.key}
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={item.img}
                alt={t(`items.${item.key}.title`)}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-lg font-bold">{t(`items.${item.key}.title`)}</h3>
                <p className="mt-1 text-sm text-blue-100">{t(`items.${item.key}.desc`)}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
