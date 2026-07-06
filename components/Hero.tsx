"use client";

import { motion, useReducedMotion } from "framer-motion";
import Photo from "./Photo";
import { useTranslations } from "next-intl";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";
import { images } from "@/lib/images";
import { pushDataLayer } from "@/lib/utils";

export default function Hero() {
  const t = useTranslations("hero");
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/60">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24 lg:py-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
            {t("badge")}
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-navy md:text-5xl lg:text-[3.5rem]">
            {t("title")}{" "}
            <span className="text-brand">{t("titleAccent")}</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">{t("subtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-brand px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brandDark"
            >
              {t("ctaForm")}
            </a>
            <a
              href={`tel:${PHONE}`}
              onClick={() => pushDataLayer("phone_click")}
              className="rounded-xl border-2 border-navy/20 bg-white px-7 py-4 text-sm font-semibold text-navy hover:border-navy hover:bg-navy hover:text-white transition-colors"
            >
              {t("ctaCall")}
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
            {[t("trust1"), t("trust2"), t("trust3")].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-xs font-medium text-slate-500 md:text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200/50">
            <Photo
              src={images.heroMain}
              alt="Contabilitate profesională Chișinău"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 w-[45%] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
            <div className="relative aspect-[4/3]">
              <Photo
                src={images.heroSecondary}
                alt="Echipă contabilitate"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 280px"
              />
            </div>
          </div>
          <div className="absolute -right-3 top-8 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-slate-100">
            <p className="text-xs font-medium text-slate-500">{t("cardLabel")}</p>
            <p className="text-lg font-bold text-navy">{PHONE_DISPLAY}</p>
            <p className="mt-1 text-xs text-brand font-semibold">{t("cardFree")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
