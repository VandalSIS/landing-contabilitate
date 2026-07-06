"use client";

import Photo from "./Photo";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PHONE } from "@/lib/constants";
import { images } from "@/lib/images";
import { pushDataLayer } from "@/lib/utils";

export default function CtaBanner() {
  const t = useTranslations("ctaBanner");
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[360px] overflow-hidden py-24 md:min-h-[420px] md:py-32">
      <Photo
        src={images.ctaBanner}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl">{t("title")}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">{t("subtitle")}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-white px-8 py-4 text-sm font-bold text-navy shadow-lg hover:bg-blue-50"
            >
              {t("ctaForm")}
            </a>
            <a
              href={`tel:${PHONE}`}
              onClick={() => pushDataLayer("phone_click")}
              className="rounded-xl border-2 border-white px-8 py-4 text-sm font-bold text-white hover:bg-white/10"
            >
              {t("ctaCall")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
