"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { pushDataLayer } from "@/lib/utils";

export default function ContactForm() {
  const t = useTranslations("form");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const reduce = useReducedMotion();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const url = process.env.NEXT_PUBLIC_FORM_URL;

    try {
      if (url && !url.includes("YOUR_ID")) {
        const res = await fetch(url, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("fail");
      }
      pushDataLayer("form_submit_success");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-xl px-4 md:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-navy">{t("title")}</h2>
          <p className="mt-3 text-slate-600">{t("subtitle")}</p>
        </motion.div>
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center text-green-800"
          >
            {t("success")}
          </motion.div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">{t("name")}</label>
              <input
                name="name"
                required
                placeholder={t("namePlaceholder")}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">{t("phone")}</label>
              <input
                name="phone"
                type="tel"
                required
                placeholder={t("phonePlaceholder")}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">{t("email")}</label>
              <input
                name="email"
                type="email"
                placeholder="email@exemplu.md"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">{t("message")}</label>
              <textarea
                name="message"
                rows={3}
                placeholder={t("messagePlaceholder")}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-red-600">{t("error")}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-brand py-3.5 text-sm font-semibold text-white hover:bg-brandDark disabled:opacity-60"
            >
              {loading ? "..." : t("submit")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
